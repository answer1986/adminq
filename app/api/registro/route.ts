import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import pool from '@/utils/db';

export async function POST(request: Request) {
  console.log('🚀 Starting registration API call');

  try {
    // Obtener el FormData
    const formData = await request.formData();
    console.log('📝 Procesando datos del formulario...');

    // Extraer datos principales
    const apartmentNumber = formData.get('apartmentNumber') as string;
    const headName = formData.get('headName') as string;
    const headEmail = formData.get('headEmail') as string;
    const headPhone = formData.get('headPhone') as string;
    const headPassword = formData.get('headPassword') as string;
    const comments = formData.get('comments') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;

    // Validar datos requeridos
    if (!apartmentNumber || !headName || !headEmail || !headPhone || !headPassword || !recaptchaToken) {
      return NextResponse.json({
        error: 'Faltan campos requeridos',
      }, { status: 400 });
    }

    // Obtener conexión de la pool
    const connection = await pool.getConnection();

    try {
      // Iniciar transacción
      await connection.beginTransaction();

      // Insertar residente principal
      const [result] = await connection.execute(
        'INSERT INTO residents (apartment_number, head_name, head_email, head_phone, head_password, comments) VALUES (?, ?, ?, ?, ?, ?)',
        [apartmentNumber, headName, headEmail, headPhone, headPassword, comments]
      );

      const residentId = (result as any).insertId;

      // Procesar foto del jefe de hogar si existe
      const headPhoto = formData.get('member0Photo') as File;
      if (headPhoto) {
        const photoBuffer = Buffer.from(await headPhoto.arrayBuffer());
        const photoPath = \`/uploads/resident_\${residentId}_head.jpg\`;
        await writeFile(join(process.cwd(), 'public', photoPath), photoBuffer);

        // Actualizar ruta de la foto en la base de datos
        await connection.execute(
          'UPDATE residents SET photo_path = ? WHERE id = ?',
          [photoPath, residentId]
        );
      }

      // Procesar miembros adicionales
      let memberIndex = 1;
      while (formData.get(\`member\${memberIndex}Name\`)) {
        const memberName = formData.get(\`member\${memberIndex}Name\`) as string;
        const memberEmail = formData.get(\`member\${memberIndex}Email\`) as string;
        const memberPhone = formData.get(\`member\${memberIndex}Phone\`) as string;
        
        if (memberName && (memberEmail || memberPhone)) {
          const [memberResult] = await connection.execute(
            'INSERT INTO household_members (resident_id, name, email, phone) VALUES (?, ?, ?, ?)',
            [residentId, memberName, memberEmail || null, memberPhone || null]
          );

          const memberId = (memberResult as any).insertId;

          // Procesar foto del miembro si existe
          const memberPhoto = formData.get(\`member\${memberIndex}Photo\`) as File;
          if (memberPhoto) {
            const photoBuffer = Buffer.from(await memberPhoto.arrayBuffer());
            const photoPath = \`/uploads/member_\${memberId}.jpg\`;
            await writeFile(join(process.cwd(), 'public', photoPath), photoBuffer);

            // Actualizar ruta de la foto
            await connection.execute(
              'UPDATE household_members SET photo_path = ? WHERE id = ?',
              [photoPath, memberId]
            );
          }
        }
        memberIndex++;
      }

      // Confirmar transacción
      await connection.commit();

      console.log('✅ Registro completado exitosamente');
      return NextResponse.json({
        success: true,
        message: 'Registro completado exitosamente'
      });

    } catch (error) {
      // Revertir transacción en caso de error
      await connection.rollback();
      throw error;
    } finally {
      // Liberar conexión
      connection.release();
    }

  } catch (error) {
    console.error('❌ Error en el registro:', error);
    return NextResponse.json({
      error: 'Error interno del servidor',
      details: String(error)
    }, { status: 500 });
  }
}