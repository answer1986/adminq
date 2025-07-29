import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
  const [screenSize, setScreenSize] = useState('desktop');
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

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width <= 480) {
          setScreenSize('mobile');
        } else if (width <= 768) {
          setScreenSize('tablet');
        } else {
          setScreenSize('desktop');
        }
      }
    };

    handleResize(); // Set initial size
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [length]);

  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          cardWidth: 180,
          cardHeight: 240,
          translateXBase: 60,
          translateXSide: 80,
        };
      case 'tablet':
        return {
          cardWidth: 220,
          cardHeight: 300,
          translateXBase: 100,
          translateXSide: 140,
        };
      default: // desktop
        return {
          cardWidth: 260,
          cardHeight: 340,
          translateXBase: 120,
          translateXSide: 180,
        };
    }
  };

  const responsiveValues = getResponsiveValues();

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '800px', 
      margin: '0 auto', 
      position: 'relative', 
      height: 'clamp(280px, 45vh, 360px)',
      padding: '0 clamp(60px, 10vw, 80px)',
      overflow: 'hidden'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 'clamp(240px, 40vh, 320px)', 
        position: 'relative',
        overflow: 'visible'
      }}>
        {benefits.map((benefit, idx) => {
          const offset = idx - current;
          let scale = 0.6;
          let zIndex = 1;
          let opacity = 0.3;
          let translateX = offset * (responsiveValues.translateXBase * 0.8); // Reducir espaciado
          
          if (offset === 0) {
            scale = 1;
            zIndex = 3;
            opacity = 1;
            translateX = 0;
          } else if (Math.abs(offset) === 1) {
            scale = 0.8;
            zIndex = 2;
            opacity = 0.7;
            translateX = offset * (responsiveValues.translateXSide * 0.8); // Reducir espaciado
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
                width: responsiveValues.cardWidth,
                height: responsiveValues.cardHeight,
                boxShadow: offset === 0 ? '0 8px 32px rgba(30,64,175,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
                borderRadius: 'clamp(12px, 2vw, 18px)',
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
              <div style={{ 
                width: '100%', 
                height: 'clamp(120px, 35%, 200px)', 
                background: '#f3f4f6', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative'
              }}>
                {benefit.image ? (
                  <Image 
                    src={benefit.image} 
                    alt={benefit.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 480px) 180px, (max-width: 768px) 220px, 260px"
                  />
                ) : (
                  <span style={{ color: '#d1d5db', fontSize: 'clamp(20px, 4vw, 32px)' }}>Imagen</span>
                )}
              </div>
              <div style={{ 
                padding: 'clamp(16px, 3vw, 24px) clamp(12px, 2vw, 18px) clamp(12px, 2vw, 18px) clamp(12px, 2vw, 18px)', 
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <h3 style={{ 
                  fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)', 
                  fontWeight: 700, 
                  color: '#1e40af', 
                  marginBottom: 0,
                  lineHeight: 1.3
                }}>
                  {benefit.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prev} 
        style={{ 
          position: 'absolute', 
          left: '15px', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          background: '#fff', 
          border: '1.5px solid #1e40af', 
          borderRadius: '50%', 
          width: 'clamp(32px, 8vw, 40px)', 
          height: 'clamp(32px, 8vw, 40px)', 
          fontSize: 'clamp(16px, 4vw, 22px)', 
          color: '#1e40af', 
          cursor: 'pointer', 
          zIndex: 10, 
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} 
        aria-label="Anterior"
      >
        &#8592;
      </button>
      
      <button 
        onClick={next} 
        style={{ 
          position: 'absolute', 
          right: '15px', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          background: '#fff', 
          border: '1.5px solid #1e40af', 
          borderRadius: '50%', 
          width: 'clamp(32px, 8vw, 40px)', 
          height: 'clamp(32px, 8vw, 40px)', 
          fontSize: 'clamp(16px, 4vw, 22px)', 
          color: '#1e40af', 
          cursor: 'pointer', 
          zIndex: 10, 
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} 
        aria-label="Siguiente"
      >
        &#8594;
      </button>
    </div>
  );
} 