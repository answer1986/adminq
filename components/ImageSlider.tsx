import React, { useState, useEffect } from 'react';

interface Benefit {
  image: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    image: '/images/condominio1.webp',
    title: 'Administración del personal',
    description: 'Gestión profesional y evaluación periódica del personal contratado por la comunidad.'
  },
  {
    image: '/images/condominio2.jpg',
    title: 'Planificación operacional anual',
    description: 'Planificación y control de cumplimiento del plan anual del condominio.'
  },
  {
    image: '/images/condominio3.jpg',
    title: 'Indicadores de gestión mensuales',
    description: 'Dashboard y presentación de resultados en hall, con entrega mensual de informe de gestión.'
  },
  {
    image: '/images/logo-minvu.png',
    title: 'Cumplimiento legal y asesoría',
    description: 'Asesoría legal para actualización de reglamento, defensa ante organismos y cumplimiento Ley 21.442.'
  },
  {
    image: '/images/qr-adminq.png',
    title: 'Capacitación OS10 sin costo',
    description: 'Formación y certificación OS10 para conserjes, sin costo para la comunidad.'
  },
  {
    image: '/images/adminq-logo2.png',
    title: 'Servicio bajo estándar internacional',
    description: 'Servicio prestado bajo estándar internacional de calidad ISO 9001.'
  },
];

export default function BenefitCarousel() {
  const [current, setCurrent] = useState(0);
  const length = benefits.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '700px',
      margin: '0 auto',
      borderRadius: '18px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(30,64,175,0.12)',
      background: '#fff',
      minHeight: '420px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <img
        src={benefits[current].image}
        alt={benefits[current].title}
        style={{width: '100%', height: '260px', objectFit: 'cover', transition: 'opacity 0.7s'}}
      />
      <div style={{
        padding: '28px 24px 18px 24px',
        textAlign: 'center',
      }}>
        <h3 style={{fontSize: '1.35rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px'}}>{benefits[current].title}</h3>
        <p style={{fontSize: '1.08rem', color: '#374151', marginBottom: '0'}}>{benefits[current].description}</p>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
      }}>
        {benefits.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: idx === current ? '#fbbf24' : '#fff',
              border: '1.5px solid #1e40af',
              cursor: 'pointer',
              opacity: idx === current ? 1 : 0.6,
              transition: 'background 0.3s',
              outline: 'none',
            }}
            aria-label={`Ir al beneficio ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 