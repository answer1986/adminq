'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import EconomicIndicators from '@/components/EconomicIndicators';
import MinvuSection from '@/components/MinvuSection';
import QRModal from '@/components/QRModal';
import BenefitCoverflow from '@/components/BenefitCoverflow';

// Declaración de tipos para Google Ads
declare global {
  function gtag_report_conversion(url?: string): boolean;
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function Home() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const services = [
    {
      icon: '🏛️', 
      title: 'Administración Profesional Integral', 
      desc: 'Servicio completo para cumplimiento total de la Ley 21.442, incluyendo asesoría contable, legal, prevención de riesgos y metodología ISO 9001.', 
      color: '#3b82f6'
    },
    {
      icon: '🔐', 
      title: 'Sistemas de Seguridad Avanzados', 
      desc: 'Control de acceso con reconocimiento facial, huella dactilar, claves digitales, y acceso remoto vía smartphone con hardware de última generación.', 
      color: '#22c55e'
    },
    {
      icon: '📹', 
      title: 'Videovigilancia Inteligente', 
      desc: 'Cámaras lectoras de placas patentes interconectadas a conserjería, monitoreo 24/7 y acceso remoto para máxima protección.', 
      color: '#8b5cf6'
    },
    {
      icon: '⚙️', 
      title: 'Sistemas Domóticos', 
      desc: 'Automatización de estacionamientos, apertura/cierre de portones, iluminación inteligente y gestión energética automatizada.', 
      color: '#f59e0b'
    },
    {
      icon: '💻', 
      title: 'Portal de Transparencia 24/7', 
      desc: 'Plataforma personal para cada residente con acceso completo a información financiera, administrativa y comunicaciones.', 
      color: '#ef4444'
    },
    {
      icon: '🏆', 
      title: 'Certificación ISO 9001', 
      desc: 'Empresa certificada en norma ISO 9001 con procesos estandarizados, mejora continua y enfoque en satisfacción del cliente.', 
      color: '#06b6d4'
    }
  ];

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8fafc'}}>
      {/* Hero Section - IMAGEN CONDOMINIO 1 CON EFECTO PARALLAX */}
      <section id="inicio" style={{
        backgroundImage: 'url(/images/condominio1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Overlay con gradiente */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(17, 117, 17, 0.8) 100%)',
          zIndex: 1
        }}></div>
        
        {/* Efecto de partículas flotantes */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '4px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '40%',
            right: '15%',
            width: '2px',
            height: '2px',
            backgroundColor: 'rgba(251, 191, 36, 0.8)',
            borderRadius: '50%',
            animation: 'float 3s ease-in-out infinite 1s'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '20%',
            width: '3px',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            animation: 'float 5s ease-in-out infinite 2s'
          }}></div>
        </div>
        
        <div style={{
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 3,
          color: 'white'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            <span style={{color: '#fbbf24'}}>AdminQ</span> - Administración Profesional de Condominios
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            marginBottom: '32px',
            maxWidth: '800px',
            margin: '0 auto 32px auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Administrador inscrito en el <strong>Registro Nacional de Administradores de Condominios</strong> del{' '}
            <strong>Ministerio de Vivienda y Urbanismo (MINVU)</strong>, cumpliendo con la{' '}
            <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Ley 21.442</span>. 
            Tecnología avanzada para la gestión moderna de condominios.
          </p>
          <div style={{
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => {
                // Tracking de conversión de Google Ads
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-17416452794/AxJ4CMy-v_0aELr15_BA',
                    'transaction_id': Date.now().toString(),
                    'event_callback': function() {
                      console.log('Conversión registrada en Google Ads');
                    }
                  });
                }
                setIsQRModalOpen(true);
              }}
              style={{
                backgroundColor: '#f59e0b',
                color: '#1e40af',
                fontWeight: 'bold',
                padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 40px)',
                borderRadius: '12px',
                border: 'none',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
                transform: 'translateY(0)'
              }}>
              Solicitar Propuesta
            </button>
            <button 
              onClick={() => {
                // Tracking de conversión de Google Ads
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-17416452794/AxJ4CMy-v_0aELr15_BA',
                    'transaction_id': Date.now().toString(),
                    'event_callback': function() {
                      console.log('Conversión registrada en Google Ads - Portal');
                    }
                  });
                }
                // Aquí puedes agregar la URL del portal de transparencia
                window.open('/portal', '_blank');
              }}
              style={{
                border: '3px solid white',
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                fontWeight: 'bold',
                padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 40px)',
                borderRadius: '12px',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}>
              Portal de Transparencia
            </button>
          </div>
        </div>
      </section>

      {/* Indicadores Económicos */}
      <section style={{padding: '60px 20px', backgroundColor: '#ffffff'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '40px'
          }}>
            Indicadores Económicos de Referencia
          </h2>
          <EconomicIndicators />
        </div>
      </section>

      {/* MINVU Section */}
      <MinvuSection />

      {/* Ley 21.442 - SIN IMAGEN DE FONDO PARA CONTRASTE */}
      <section style={{padding: '60px 20px', backgroundColor: '#f8fafc'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '60px'
          }}>
            Cumplimiento Ley 21.442
          </h2>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              padding: '30px',
              borderRadius: '20px',
              border: '3px solid #3b82f6',
              boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', 
                fontWeight: 'bold', 
                color: '#1e40af', 
                marginBottom: '20px'
              }}>
                ¿Qué es la Ley 21.442?
              </h3>
              <p style={{
                color: '#374151', 
                marginBottom: '20px', 
                lineHeight: '1.7', 
                fontSize: 'clamp(1rem, 2vw, 1.1rem)'
              }}>
                La Ley 21.442 regula la administración de condominios en Chile, estableciendo 
                estándares profesionales, transparencia y responsabilidades específicas para 
                administradores de propiedades.
              </p>
              <ul style={{
                color: '#374151', 
                listStyle: 'disc', 
                paddingLeft: '25px', 
                lineHeight: '1.8'
              }}>
                <li>Registro obligatorio en el MINVU</li>
                <li>Transparencia en la gestión financiera</li>
                <li>Rendición de cuentas periódica</li>
                <li>Capacitación continua requerida</li>
              </ul>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '30px',
              borderRadius: '20px',
              border: '3px solid #22c55e',
              boxShadow: '0 15px 35px rgba(34, 197, 94, 0.15)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', 
                fontWeight: 'bold', 
                color: '#15803d', 
                marginBottom: '20px'
              }}>
                Nuestro Compromiso
              </h3>
              <p style={{
                color: '#374151', 
                marginBottom: '20px', 
                lineHeight: '1.7', 
                fontSize: 'clamp(1rem, 2vw, 1.1rem)'
              }}>
                Garantizamos el cumplimiento total de la Ley 21.442 a través de:
              </p>
              <ul style={{
                color: '#374151', 
                listStyle: 'disc', 
                paddingLeft: '25px', 
                lineHeight: '1.8'
              }}>
                <li>Administrador inscrito en MINVU</li>
                <li>Portal de transparencia 24/7</li>
                <li>Informes financieros detallados</li>
                <li>Cumplimiento de plazos legales</li>
                <li>Actualización profesional constante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formación y Certificación OS10 para Conserjes */}
      <section style={{padding: '60px 20px', backgroundColor: '#fff7ed'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#b45309',
            marginBottom: '40px'
          }}>
            Formación y Certificación OS10 para Conserjes
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{flex: 1, minWidth: '320px'}}>
              <p style={{
                color: '#92400e',
                fontSize: '1.15rem',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                <strong>AdminQ</strong>, a través de su empresa asociada <strong>Quas Capacitación SpA</strong>, formará y certificará por ley a los conserjes del edificio en el curso <strong>OS-10</strong>, <span style={{color:'#f59e0b', fontWeight:'bold'}}>sin costo para la comunidad</span>.
              </p>
              <p style={{
                color: '#b45309',
                fontSize: '1.05rem',
                marginBottom: '18px'
              }}>
                En Chile, la multa por no contar con el curso OS10 para conserjes o guardias de seguridad en edificios y condominios puede variar entre <strong>4 y 20 millones de pesos por empleado</strong>. Además, se pueden aplicar multas por no contar con la credencial del curso o por realizar funciones distintas a las de control de acceso, incluso con la certificación.
              </p>
              <ul style={{
                color: '#b45309',
                fontSize: '1.05rem',
                marginBottom: '18px',
                paddingLeft: '20px',
                lineHeight: '1.7',
                listStyle: 'disc'
              }}>
                <li>Formación y certificación OS10 sin costo para la comunidad.</li>
                <li>Evita multas millonarias y sanciones legales.</li>
                <li>Personal calificado y acreditado para funciones de seguridad.</li>
                <li>Gestión integral de la capacitación y trámites.</li>
              </ul>
              <p style={{
                color: '#92400e',
                fontSize: '1.05rem',
                marginBottom: '0'
              }}>
                <strong>¡Con AdminQ, tu condominio cumple la ley y protege su patrimonio!</strong>
              </p>
            </div>
            <div style={{flex: 1, minWidth: '320px', textAlign: 'center'}}>
              <Image src="/images/condominio3.jpg" alt="Curso OS10 para conserjes" width={400} height={300} style={{borderRadius: '18px', boxShadow: '0 8px 32px rgba(245, 158, 11, 0.15)'}} />
              <div style={{marginTop: '18px', color: '#b45309', fontWeight: 'bold', fontSize: '1.1rem'}}>Certificación OS10 obligatoria para conserjes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Características y Beneficios - Coverflow */}
      <section style={{
        padding: '60px 60px', // Aumentado el padding horizontal para contener el botón next
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden' // Asegura que nada se desborde
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '60px'
          }}>
            Características y Beneficios del Servicio
          </h2>
          <BenefitCoverflow />
        </div>
      </section>

      {/* Servicios - IMAGEN CONDOMINIO 3 CON EFECTO OVERLAY OSCURO */}
      <section id="servicios" style={{
        backgroundImage: 'url(/images/condominio3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '80px 20px'
      }}>
        {/* Overlay oscuro con patrón */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
          zIndex: 1
        }}></div>
        
        {/* Patrón de puntos */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          zIndex: 2
        }}></div>
        
        <div style={{
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 3
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            marginBottom: '60px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            ¿Por Qué <span style={{color: '#fbbf24'}}>Escogernos</span>?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            
            {services.map((service, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                padding: '25px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: 'translateY(0)'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: `linear-gradient(135deg, ${service.color}40, ${service.color}60)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '2rem',
                  boxShadow: `0 10px 25px ${service.color}30`
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '15px'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#cbd5e1', 
                  lineHeight: '1.7', 
                  fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
                }}>
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Portal de Transparencia - FONDO LIMPIO PARA CONTRASTE */}
      <section id="transparencia" style={{padding: '60px 20px', backgroundColor: '#f8fafc'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '40px'
          }}>
            Portal de Transparencia
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', 
            color: '#6b7280', 
            marginBottom: '60px'
          }}>
            Acceso 24/7 a toda la información financiera y administrativa de tu condominio
          </p>
          
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              padding: '30px',
              borderRadius: '20px',
              border: '3px solid #3b82f6',
              boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', 
                fontWeight: 'bold', 
                color: '#1e40af', 
                marginBottom: '20px'
              }}>
                Información Disponible
              </h3>
              <ul style={{
                textAlign: 'left', 
                color: '#374151', 
                lineHeight: '2'
              }}>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>✓ Estados financieros mensuales</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>✓ Detalle de ingresos y gastos</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>✓ Actas de reuniones</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>✓ Presupuestos y cotizaciones</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>✓ Reportes de mantención</li>
              </ul>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '30px',
              borderRadius: '20px',
              border: '3px solid #22c55e',
              boxShadow: '0 15px 35px rgba(34, 197, 94, 0.15)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', 
                fontWeight: 'bold', 
                color: '#15803d', 
                marginBottom: '20px'
              }}>
                Funcionalidades
              </h3>
              <ul style={{
                textAlign: 'left', 
                color: '#374151', 
                lineHeight: '2'
              }}>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>📱 Acceso desde móvil y desktop</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>🔒 Seguridad y privacidad garantizada</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>📊 Gráficos y reportes interactivos</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>📧 Notificaciones automáticas</li>
                <li style={{marginBottom: '12px', fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>💬 Canal de comunicación directa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001 - FONDO LIMPIO */}
      <section style={{padding: '60px 20px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '40px'
          }}>
            Certificación ISO 9001
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 25px 50px rgba(245, 158, 11, 0.2)',
            border: '3px solid #f59e0b'
          }}>
            <div style={{
              display: 'flex', 
              alignItems: 'center', 
              gap: '30px', 
              flexWrap: 'wrap', 
              justifyContent: 'center'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4)'
              }}>
                🏅
              </div>
              <div style={{textAlign: 'left', maxWidth: '600px'}}>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '20px'
                }}>
                  La empresa &quot;AdminQ&quot; está certificada en norma ISO 9001
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '30px',
                  lineHeight: '1.8',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)'
                }}>
                  Contamos con certificación ISO 9001 vigente, garantizando procesos 
                  estandarizados, mejora continua y excelencia en todos nuestros servicios 
                  de administración de condominios.
                </p>
                <div style={{
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '15px'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '2px solid #3b82f6',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)'
                  }}>
                    <h4 style={{
                      fontWeight: 'bold', 
                      color: '#1e40af', 
                      marginBottom: '8px', 
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)'
                    }}>
                      Gestión de Calidad
                    </h4>
                    <p style={{
                      fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', 
                      color: '#6b7280'
                    }}>
                      Procesos estandarizados y mejora continua
                    </p>
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '2px solid #22c55e',
                    boxShadow: '0 8px 20px rgba(34, 197, 94, 0.15)'
                  }}>
                    <h4 style={{
                      fontWeight: 'bold', 
                      color: '#15803d', 
                      marginBottom: '8px', 
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)'
                    }}>
                      Satisfacción del Cliente
                    </h4>
                    <p style={{
                      fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', 
                      color: '#6b7280'
                    }}>
                      Enfoque en las necesidades de los residentes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto - FONDO BLANCO */}
      <section style={{padding: '60px 20px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '20px'
          }}>
            Solicitar Información
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
            color: '#6b7280',
            marginBottom: '50px'
          }}>
            Completa el formulario y te contactaremos en menos de 24 horas
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Contacto - GRADIENTE AZUL INTENSO */}
      <section id="contacto" style={{
        padding: '80px 20px',
        background: 'url(/images/condominio2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        position: 'relative'
      }}>
        {/* Overlay con gradiente */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(11, 35, 113, 0.95) 0%, rgba(17, 117, 17, 0.9) 100%)',
          zIndex: 1
        }}></div>

        {/* Efectos de fondo */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 4s infinite',
          zIndex: 2
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 3s infinite 1s',
          zIndex: 2
        }}></div>
        
        <div style={{
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 3
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '30px', 
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Contáctanos
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', 
            marginBottom: '60px', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            ¿Listo para modernizar la administración de tu condominio?
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginBottom: '60px'
          }}>
            <div style={{
              background: 'rgba(30, 58, 138, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '25px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
                display: 'block', 
                marginBottom: '20px'
              }}>📧</span>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                fontWeight: 'bold', 
                marginBottom: '10px'
              }}>Email</h3>
              <p style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>contacto@adminq.cl</p>
            </div>
            <div style={{
              background: 'rgba(30, 58, 138, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '25px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
                display: 'block', 
                marginBottom: '20px'
              }}>📱</span>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                fontWeight: 'bold', 
                marginBottom: '10px'
              }}>Teléfono</h3>
              <p style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>+56 9 7453 2868</p>
              <p style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>+56 9 5948 6825</p>
            </div>
            <div style={{
              background: 'rgba(30, 58, 138, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '25px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
                display: 'block', 
                marginBottom: '20px'
              }}>📍</span>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                fontWeight: 'bold', 
                marginBottom: '10px'
              }}>Ubicación</h3>
              <p style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)'}}>Santiago, Metro Universidad de Chile</p>
            </div>
          </div>
          <button 
            onClick={() => setIsQRModalOpen(true)}
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
              color: '#1e40af',
              fontWeight: 'bold',
              padding: 'clamp(15px, 3vw, 20px) clamp(30px, 5vw, 50px)',
              borderRadius: '15px',
              border: 'none',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4)',
              transform: 'translateY(0)'
            }}>
            Solicitar Cotización Gratuita
          </button>
        </div>
      </section>

      <QRModal 
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
}
