import React, { useState, useEffect, useRef } from 'react';

interface Benefit {
  image: string;
  title: string;
}

const benefits: Benefit[] = [
  { image: '/images/quas-serv/administracion-de-Personal.webp', title: 'Administración del personal' },
  { image: '/images/quas-serv/proveedores-web.webp', title: 'Administración de proveedores' },
  { image: '/images/quas-serv/planificacion.webp', title: 'Planificación operacional anual del condominio' },
  { image: '/images/quas-serv/cumplmiento.webp', title: 'Control de cumplimiento del plan anual' },
  { image: '/images/quas-serv/indicadores.webp', title: 'Indicadores de gestión mensuales' },
  { image: '/images/quas-serv/indicadoreskpi.webp', title: 'Dashboard de presentación de resultados en hall' },
  { image: '/images/quas-serv/resultados-mensuales.webp', title: 'Entrega mensual de informe de gestión por unidad (depto.)' },
  { image: '/images/quas-serv/informe-cobro.webp', title: 'Informe de cobro (Gastos comunes)' },
  { image: '/images/quas-serv/resultados-mensuales.webp', title: 'Presentación de informe de resultados y gestión mensuales (presenciales)' },
  { image: '/images/quas-serv/atencion-prop.webp', title: 'Atención de propietarios mensual (presencial)' },
  { image: '/images/quas-serv/cobranza-judicial.webp', title: 'Gestión de cobranza judicial morosos gastos comunes' },
  { image: '/images/quas-serv/avances.webp', title: 'Control avance y cumplimiento planificación de prevención de riesgos y accidentes (Ing. Prevención riesgos)' },
  { image: '/images/quas-serv/evacuaion.webp', title: 'Control cumplimiento y correcciones plan de evacuación (Ing. Prevención riesgos)' },
  { image: '/images/quas-serv/plan-emergencia.webp', title: 'Control y mejoras plan de emergencias (Ing. Prevención riesgos)' },
  { image: '/images/quas-serv/legal-asesor.webp', title: 'Asesoría legal para actualización reglamento copropiedad (Plazo forma y fondo, están definidos por ley)' },
  { image: '/images/quas-serv/defensa-condominios.webp', title: 'Asesoría legal para defensa de condominio ante organismos municipales y similares' },
  { image: '/images/quas-serv/evaluacion-personal.webp', title: 'Evaluación periódica del personal contratado por la comunidad' },
  { image: '/images/quas-serv/perfiles.webp', title: 'Entrega de descriptores y perfiles de cargo del personal y sus funciones' },
  { image: '/images/quas-serv/Seleccion-Personal.webp', title: 'Selección de personal con estándar empresarial' },
  { image: '/images/quas-serv/profesionalizacion.webp', title: 'Profesionalización del personal bien evaluado (estratégico para el condominio) a través de cursos en materias: administrativas, de seguridad, de prevención de riesgos, de trato de personas y residentes por medio de la OTEC asociada a AdminQ SpA' },
  { image: '/images/quas-serv/21.442.webp', title: 'Cumplimiento del marco regulador, ley 21.442 al pie de la letra los 365 días del año' },
  { image: '/images/quas-serv/multa.webp', title: 'El condominio no sufrirá multas ni sanciones' },
  { image: '/images/quas-serv/iso.webp', title: 'Servicio bajo estándar internacional de calidad ISO 9001' },
];

export default function BenefitCoverflow() {
  const [current, setCurrent] = useState(0);
  const length = benefits.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetTimer();
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
    resetTimer();
  };
  const next = () => {
    setCurrent((prev) => (prev + 1) % length);
    resetTimer();
  };

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [length]);

  return (
    <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', position: 'relative', height: 380 }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 340, position: 'relative' }}>
        {benefits.map((benefit, idx) => {
          // Coverflow effect: center is scale(1), sides are scale(0.8), further are scale(0.6)
          const offset = idx - current;
          let scale = 0.6;
          let zIndex = 1;
          let opacity = 0.3;
          let translateX = offset * 120;
          if (offset === 0) {
            scale = 1;
            zIndex = 3;
            opacity = 1;
            translateX = 0;
          } else if (Math.abs(offset) === 1) {
            scale = 0.8;
            zIndex = 2;
            opacity = 0.7;
            translateX = offset * 180;
          }
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                transform: `translateX(-50%) translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity,
                transition: 'all 0.5s cubic-bezier(.4,2,.3,1)',
                width: 260,
                height: 340,
                boxShadow: offset === 0 ? '0 8px 32px rgba(30,64,175,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
                borderRadius: 18,
                background: '#fff',
                overflow: 'hidden',
                cursor: offset === 0 ? 'default' : 'pointer',
                border: offset === 0 ? '3px solid #fbbf24' : '1.5px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
              onClick={() => goTo(idx)}
            >
              <div style={{ width: '100%', height: 200, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {benefit.image ? (
                  <img src={benefit.image} alt={benefit.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ color: '#d1d5db', fontSize: 32 }}>Imagen</span>
                )}
              </div>
              <div style={{ padding: '24px 18px 18px 18px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e40af', marginBottom: 8 }}>{benefit.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: '#fff', border: '1.5px solid #1e40af', borderRadius: '50%', width: 40, height: 40, fontSize: 22, color: '#1e40af', cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} aria-label="Anterior">&#8592;</button>
      <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: '#fff', border: '1.5px solid #1e40af', borderRadius: '50%', width: 40, height: 40, fontSize: 22, color: '#1e40af', cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} aria-label="Siguiente">&#8594;</button>
    </div>
  );
} 