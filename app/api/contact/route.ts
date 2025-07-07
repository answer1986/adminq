import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { logger } from '@/utils/logger';

export async function POST(request: Request) {
  try {
    logger.log('🔵 Iniciando proceso de envío de correo...');
    
    const body = await request.json();
    const { nombre, telefono, email, condominio, mensaje, recaptchaToken } = body;
    
    logger.log('📝 Datos recibidos', { 
      nombre, 
      telefono, 
      email, 
      condominio, 
      mensajeLength: mensaje?.length,
      tieneRecaptcha: !!recaptchaToken 
    });

    // Verificar reCAPTCHA
    logger.log('🔑 Verificando reCAPTCHA...');
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY?.replace(/%$/, '')}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    logger.log('✅ Respuesta reCAPTCHA', recaptchaData);

    if (!recaptchaData.success) {
      logger.error('❌ Verificación de reCAPTCHA fallida');
      return NextResponse.json(
        { error: 'Verificación de reCAPTCHA fallida' },
        { status: 400 }
      );
    }

    // Configurar el transporte de correo
    logger.log('📧 Configurando transporte de correo...', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? '✅ Configurado' : '❌ No configurado',
      pass: process.env.SMTP_PASSWORD ? '✅ Configurado' : '❌ No configurado',
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verificar conexión SMTP
    logger.log('🔄 Verificando conexión SMTP...');
    try {
      await transporter.verify();
      logger.log('✅ Conexión SMTP verificada correctamente');
    } catch (error) {
      logger.error('❌ Error en la verificación SMTP', error);
      throw new Error('Error en la conexión SMTP');
    }

    // Plantilla del correo
    const emailContent = `
      Nueva solicitud de contacto:
      
      Nombre: ${nombre}
      Teléfono: ${telefono}
      Email: ${email}
      Condominio: ${condominio}
      Mensaje: ${mensaje}
    `;

    // Enviar el correo
    logger.log('📤 Intentando enviar correo...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nueva solicitud de contacto de ${nombre}`,
      text: emailContent,
    });

    logger.log('✅ Correo enviado exitosamente', { messageId: info.messageId });
    return new NextResponse(JSON.stringify({ 
      success: true,
      message: 'Mensaje enviado correctamente',
      messageId: info.messageId 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    logger.error('❌ Error en el proceso', error);
    return new NextResponse(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Error al procesar la solicitud'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 