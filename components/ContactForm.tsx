'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (container: string, options: { sitekey: string | undefined }) => void;
      getResponse: () => string;
      reset: () => void;
    };
  }
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  email?: string;
  mensaje?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    condominio: '',
    mensaje: ''
  });

  useEffect(() => {
    // Carga el script de reCAPTCHA
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setRecaptchaLoaded(true);
      window.grecaptcha.ready(() => {
        window.grecaptcha.render('recaptcha-container', {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        });
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Prevenir caracteres no válidos en el nombre
  const handleNombreKeyPress = (e: React.KeyboardEvent) => {
    const char = String.fromCharCode(e.charCode);
    if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(char)) {
      e.preventDefault();
    }
  };

  // Prevenir caracteres no válidos en el teléfono
  const handleTelefonoKeyPress = (e: React.KeyboardEvent) => {
    const char = String.fromCharCode(e.charCode);
    if (!/[0-9+]/.test(char)) {
      e.preventDefault();
    }
  };

  // Manejar cambios en el teléfono
  const handleTelefonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+]/g, '');
    
    // Limitar a máximo 12 caracteres (+56 + 9 dígitos)
    if (value.length > 12) {
      value = value.slice(0, 12);
    }
    
    // Asegurar que solo haya un '+'
    if (value.split('+').length > 2) {
      value = '+' + value.replace(/\+/g, '');
    }
    
    // Asegurar que '+' solo esté al inicio
    if (value.includes('+') && value.indexOf('+') !== 0) {
      value = '+' + value.replace(/\+/g, '');
    }

    setFormData(prev => ({ ...prev, telefono: value }));
  };

  // Manejar cambios en el email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    // Remover caracteres no válidos para email
    value = value.replace(/[^a-z0-9@._-]/g, '');
    setFormData(prev => ({ ...prev, email: value }));
  };

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const nombre = formData.get('nombre') as string;
    const telefono = formData.get('telefono') as string;
    const email = formData.get('email') as string;
    const mensaje = formData.get('mensaje') as string;

    // Validación de nombre (solo letras y espacios, mínimo 3 caracteres)
    if (!nombre || nombre.length < 3 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      errors.nombre = 'El nombre debe contener al menos 3 letras y solo puede contener letras y espacios';
    }

    // Validación de teléfono (formato chileno)
    if (!telefono || !/^(\+?56|0)?[2-9]\d{8}$/.test(telefono.replace(/\s/g, ''))) {
      errors.telefono = 'Ingresa un número de teléfono válido (ej: +56912345678 o 912345678)';
    }

    // Validación de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Ingresa un correo electrónico válido';
    }

    // Validación de mensaje (mínimo 10 caracteres, máximo 500)
    if (!mensaje || mensaje.length < 10 || mensaje.length > 500) {
      errors.mensaje = 'El mensaje debe tener entre 10 y 500 caracteres';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await window.grecaptcha.getResponse();
      if (!recaptchaToken) {
        setErrorMessage('Por favor, completa el captcha');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const data = {
        nombre: formData.get('nombre'),
        telefono: formData.get('telefono'),
        email: formData.get('email'),
        condominio: formData.get('condominio'),
        mensaje: formData.get('mensaje'),
        recaptchaToken
      };

      console.log('Enviando datos:', data);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          condominio: '',
          mensaje: ''
        });
        window.grecaptcha.reset();
      } else {
        throw new Error(responseData.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error en el envío:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor, intenta nuevamente.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#1f2937' }}>
          Nombre *
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
          onKeyPress={handleNombreKeyPress}
          required
          pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
          title="Solo se permiten letras y espacios"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #e5e7eb',
            fontSize: '1rem'
          }}
        />
        {formErrors.nombre && (
          <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>
            {formErrors.nombre}
          </p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#1f2937' }}>
          Teléfono *
        </label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleTelefonoChange}
          onKeyPress={handleTelefonoKeyPress}
          required
          placeholder="+56912345678"
          pattern="^(\+?56|0)?[2-9]\d{8}$"
          title="Ingresa un número válido (ej: +56912345678)"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #e5e7eb',
            fontSize: '1rem'
          }}
        />
        {formErrors.telefono && (
          <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>
            {formErrors.telefono}
          </p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#1f2937' }}>
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
          required
          pattern="[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}"
          title="Ingresa un email válido"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #e5e7eb',
            fontSize: '1rem'
          }}
        />
        {formErrors.email && (
          <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>
            {formErrors.email}
          </p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#1f2937' }}>
          Nombre del Condominio
        </label>
        <input
          type="text"
          name="condominio"
          value={formData.condominio}
          onChange={(e) => setFormData(prev => ({ ...prev, condominio: e.target.value }))}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #e5e7eb',
            fontSize: '1rem'
          }}
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#1f2937' }}>
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={(e) => setFormData(prev => ({ ...prev, mensaje: e.target.value }))}
          required
          rows={4}
          maxLength={500}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #e5e7eb',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
        {formErrors.mensaje && (
          <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>
            {formErrors.mensaje}
          </p>
        )}
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '4px' }}>
          {formData.mensaje.length}/500 caracteres
        </p>
      </div>

      <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'center'}}>
        <div id="recaptcha-container"></div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !recaptchaLoaded}
        style={{
          background: isSubmitting || !recaptchaLoaded
            ? '#d1d5db' 
            : 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
          color: 'white',
          fontWeight: 'bold',
          padding: '18px 60px',
          borderRadius: '15px',
          border: 'none',
          fontSize: '1.2rem',
          cursor: isSubmitting || !recaptchaLoaded ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 15px 35px rgba(245, 158, 11, 0.3)',
          transform: 'translateY(0)',
          opacity: isSubmitting || !recaptchaLoaded ? 0.7 : 1
        }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
      </button>

      {submitStatus === 'success' && (
        <p style={{
          color: '#059669',
          marginTop: '20px',
          fontWeight: 'bold'
        }}>
          ¡Mensaje enviado correctamente! Te contactaremos pronto.
        </p>
      )}

      {submitStatus === 'error' && (
        <p style={{
          color: '#dc2626',
          marginTop: '20px',
          fontWeight: 'bold'
        }}>
          {errorMessage || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'}
        </p>
      )}
    </form>
  );
} 