import ContactForm from '@/components/ContactForm';

export default function Home() {
  const services = [
    {icon: '🔐', title: 'Tecnología de Acceso', desc: 'Sistemas modernos de control de acceso con tarjetas, códigos y aplicaciones móviles para mayor seguridad y comodidad.', color: '#3b82f6'},
    {icon: '📹', title: 'Sistemas de Videovigilancia', desc: 'Cámaras de seguridad de última generación con monitoreo 24/7 y acceso remoto para máxima protección del condominio.', color: '#22c55e'},
    {icon: '⚙️', title: 'Sistemas Personalizados', desc: 'Desarrollamos soluciones tecnológicas específicas para las necesidades únicas de cada condominio.', color: '#8b5cf6'},
    {icon: '🏆', title: 'Amplia Experiencia', desc: 'Años de experiencia en administración de condominios, con historial comprobado de éxito y satisfacción de clientes.', color: '#f59e0b'},
    {icon: '💻', title: 'Plataforma Personal', desc: 'Cada residente tiene acceso a una plataforma personal para gestionar pagos, solicitudes y comunicaciones.', color: '#ef4444'},
    {icon: '🏠', title: 'Tecnología Domótica', desc: 'Implementamos sistemas inteligentes para automatización de iluminación, climatización y gestión energética.', color: '#06b6d4'}
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
        padding: '100px 20px',
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
          background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%)',
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
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            <span style={{color: '#fbbf24'}}>AdminQ</span> - Administración Profesional de Condominios
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '32px',
            maxWidth: '800px',
            margin: '0 auto 32px auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Administrador inscrito en el Colegio de Administración de Chile, 
            cumpliendo con la <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Ley 21.442</span>. 
            Tecnología avanzada para la gestión moderna de condominios.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button style={{
              backgroundColor: '#f59e0b',
              color: '#1e40af',
              fontWeight: 'bold',
              padding: '16px 40px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
              transform: 'translateY(0)'
            }}>
              Solicitar Propuesta
            </button>
            <button style={{
              border: '3px solid white',
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              fontWeight: 'bold',
              padding: '16px 40px',
              borderRadius: '12px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}>
              Portal de Transparencia
            </button>
          </div>
        </div>
      </section>

      {/* Administrador Certificado - IMAGEN CONDOMINIO 2 CON EFECTO BLUR */}
      <section style={{
        backgroundImage: 'url(/images/condominio2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '80px 20px'
      }}>
        {/* Overlay con blur y gradiente */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          zIndex: 1
        }}></div>
        
        <div style={{
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '32px',
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
          }}>
            Administrador Profesional Certificado
          </h2>
          <div style={{
            backgroundColor: 'rgba(249, 250, 251, 0.9)',
            borderRadius: '20px',
            padding: '50px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div style={{
                width: '140px',
                height: '140px',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3.5rem',
                fontWeight: 'bold',
                boxShadow: '0 15px 35px rgba(30, 64, 175, 0.4)',
                position: 'relative'
              }}>
                AC
                {/* Anillo animado */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  right: '-8px',
                  bottom: '-8px',
                  border: '3px solid #22c55e',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></div>
              </div>
              <div style={{textAlign: 'left', maxWidth: '600px'}}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '20px'
                }}>
                  Inscrito en el Colegio de Administración de Chile
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '30px',
                  lineHeight: '1.8',
                  fontSize: '1.1rem'
                }}>
                  Nuestro administrador está debidamente inscrito y certificado por el Colegio de 
                  Administración de Chile, garantizando el cumplimiento de todos los estándares 
                  profesionales y éticos requeridos por la legislación chilena.
                </p>
                <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                  <div style={{
                    background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                    color: '#166534',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2)'
                  }}>
                    ✓ Certificación Vigente
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    color: '#1e40af',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
                  }}>
                    ✓ Registro Actualizado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ley 21.442 - SIN IMAGEN DE FONDO PARA CONTRASTE */}
      <section style={{padding: '80px 20px', backgroundColor: '#f8fafc'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '60px'
          }}>
            Cumplimiento Ley 21.442
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '3px solid #3b82f6',
              boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '20px'}}>
                ¿Qué es la Ley 21.442?
              </h3>
              <p style={{color: '#374151', marginBottom: '20px', lineHeight: '1.7', fontSize: '1.1rem'}}>
                La Ley 21.442 regula la administración de condominios en Chile, estableciendo 
                estándares profesionales, transparencia y responsabilidades específicas para 
                administradores de propiedades.
              </p>
              <ul style={{color: '#374151', listStyle: 'disc', paddingLeft: '25px', lineHeight: '1.8'}}>
                <li>Registro obligatorio en el Colegio de Administración</li>
                <li>Transparencia en la gestión financiera</li>
                <li>Rendición de cuentas periódica</li>
                <li>Capacitación continua requerida</li>
              </ul>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '3px solid #22c55e',
              boxShadow: '0 15px 35px rgba(34, 197, 94, 0.15)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', color: '#15803d', marginBottom: '20px'}}>
                Nuestro Compromiso
              </h3>
              <p style={{color: '#374151', marginBottom: '20px', lineHeight: '1.7', fontSize: '1.1rem'}}>
                Garantizamos el cumplimiento total de la Ley 21.442 a través de:
              </p>
              <ul style={{color: '#374151', listStyle: 'disc', paddingLeft: '25px', lineHeight: '1.8'}}>
                <li>Administrador inscrito y certificado</li>
                <li>Portal de transparencia 24/7</li>
                <li>Informes financieros detallados</li>
                <li>Cumplimiento de plazos legales</li>
                <li>Actualización profesional constante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - IMAGEN CONDOMINIO 3 CON EFECTO OVERLAY OSCURO */}
      <section id="servicios" style={{
        backgroundImage: 'url(/images/condominio3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '100px 20px'
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
            fontSize: '3.5rem',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            
            {services.map((service, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                padding: '30px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: 'translateY(0)'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${service.color}40, ${service.color}60)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '2.5rem',
                  boxShadow: `0 10px 25px ${service.color}30`
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '15px'
                }}>
                  {service.title}
                </h3>
                <p style={{color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.05rem'}}>
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Portal de Transparencia - FONDO LIMPIO PARA CONTRASTE */}
      <section id="transparencia" style={{padding: '80px 20px', backgroundColor: '#f8fafc'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '40px'}}>
            Portal de Transparencia
          </h2>
          <p style={{fontSize: '1.5rem', color: '#6b7280', marginBottom: '60px'}}>
            Acceso 24/7 a toda la información financiera y administrativa de tu condominio
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px'}}>
            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '3px solid #3b82f6',
              boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)'
            }}>
              <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '20px'}}>
                Información Disponible
              </h3>
              <ul style={{textAlign: 'left', color: '#374151', lineHeight: '2'}}>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>✓ Estados financieros mensuales</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>✓ Detalle de ingresos y gastos</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>✓ Actas de reuniones</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>✓ Presupuestos y cotizaciones</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>✓ Reportes de mantención</li>
              </ul>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '3px solid #22c55e',
              boxShadow: '0 15px 35px rgba(34, 197, 94, 0.15)'
            }}>
              <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', color: '#15803d', marginBottom: '20px'}}>
                Funcionalidades
              </h3>
              <ul style={{textAlign: 'left', color: '#374151', lineHeight: '2'}}>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>📱 Acceso desde móvil y desktop</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>🔒 Seguridad y privacidad garantizada</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>📊 Gráficos y reportes interactivos</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>📧 Notificaciones automáticas</li>
                <li style={{marginBottom: '12px', fontSize: '1.1rem'}}>💬 Canal de comunicación directa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001 - FONDO LIMPIO */}
      <section style={{padding: '80px 20px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '40px'}}>
            Certificación ISO 9001
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
            borderRadius: '20px',
            padding: '50px',
            boxShadow: '0 25px 50px rgba(245, 158, 11, 0.2)',
            border: '3px solid #f59e0b'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div style={{
                width: '140px',
                height: '140px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4.5rem',
                boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4)'
              }}>
                🏅
              </div>
              <div style={{textAlign: 'left', maxWidth: '600px'}}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '20px'
                }}>
                  Proceso de Certificación en Curso
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '30px',
                  lineHeight: '1.8',
                  fontSize: '1.1rem'
                }}>
                  Estamos implementando los estándares de calidad ISO 9001 para garantizar 
                  la excelencia en todos nuestros procesos de administración de condominios.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                  <div style={{
                    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '2px solid #3b82f6',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)'
                  }}>
                    <h4 style={{fontWeight: 'bold', color: '#1e40af', marginBottom: '10px', fontSize: '1.2rem'}}>Gestión de Calidad</h4>
                    <p style={{fontSize: '1rem', color: '#6b7280'}}>
                      Procesos estandarizados y mejora continua
                    </p>
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '2px solid #22c55e',
                    boxShadow: '0 8px 20px rgba(34, 197, 94, 0.15)'
                  }}>
                    <h4 style={{fontWeight: 'bold', color: '#15803d', marginBottom: '10px', fontSize: '1.2rem'}}>Satisfacción del Cliente</h4>
                    <p style={{fontSize: '1rem', color: '#6b7280'}}>
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
      <section style={{padding: '80px 20px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '20px'
          }}>
            Solicitar Información
          </h2>
          <p style={{
            fontSize: '1.25rem',
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
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #312e81 100%)',
        color: 'white',
        position: 'relative'
      }}>
        {/* Efectos de fondo */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 4s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 3s infinite 1s'
        }}></div>
        
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2}}>
          <h2 style={{fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '30px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            Contáctanos
          </h2>
          <p style={{fontSize: '1.5rem', marginBottom: '60px', textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
            ¿Listo para modernizar la administración de tu condominio?
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            <div style={{
              background: 'rgba(30, 58, 138, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{fontSize: '4rem', display: 'block', marginBottom: '20px'}}>📧</span>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px'}}>Email</h3>
              <p style={{fontSize: '1.1rem'}}>contacto@adminq.cl</p>
            </div>
            <div style={{
              background: 'rgba(30, 58, 138, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{fontSize: '4rem', display: 'block', marginBottom: '20px'}}>📱</span>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px'}}>Teléfono</h3>
              <p style={{fontSize: '1.1rem'}}>+56 9 7453 2868</p>
            </div>
            <div style={{
              background: 'rgba(30, 58, 138, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{fontSize: '4rem', display: 'block', marginBottom: '20px'}}>📍</span>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px'}}>Ubicación</h3>
              <p style={{fontSize: '1.1rem'}}>Santiago, Chile</p>
            </div>
          </div>
          <button style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
            color: '#1e40af',
            fontWeight: 'bold',
            padding: '20px 50px',
            borderRadius: '15px',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4)',
            transform: 'translateY(0)'
          }}>
            Solicitar Cotización Gratuita
          </button>
        </div>
      </section>
    </div>
  );
}
