export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white',
      padding: '60px 20px 40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#f59e0b'
            }}>
              AdminQ
            </h3>
            <p style={{
              color: '#d1d5db',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              Administrador profesional inscrito en el Colegio de Administración de Chile, 
              cumpliendo con la Ley 21.442 para una gestión transparente y moderna.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                AC
              </div>
              <span style={{fontSize: '0.875rem', color: '#d1d5db'}}>
                Certificación ISO 9001 en proceso
              </span>
            </div>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>
              Servicios
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#d1d5db',
              lineHeight: '2'
            }}>
              <li>🔐 Sistemas de Acceso</li>
              <li>📹 Videovigilancia 24/7</li>
              <li>🏠 Tecnología Domótica</li>
              <li>💻 Portal de Transparencia</li>
              <li>⚙️ Sistemas Personalizados</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>
              Cumplimiento Legal
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              color: '#d1d5db',
              lineHeight: '2'
            }}>
              <li>✅ Ley 21.442 Chile</li>
              <li>✅ Colegio de Administración</li>
              <li>✅ Certificación ISO 9001</li>
              <li>✅ Transparencia Total</li>
              <li>✅ Rendición de Cuentas</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>
              Contacto
            </h4>
            <div style={{
              color: '#d1d5db',
              lineHeight: '2.2'
            }}>
              <p style={{marginBottom: '8px'}}>
                📧 contacto@adminq.cl
              </p>
              <p style={{marginBottom: '8px'}}>
                📱 +56 9 7453 2868
              </p>
              <p style={{marginBottom: '8px'}}>
                📍 Santiago, Chile
              </p>
              <p style={{marginBottom: '8px'}}>
                🌐 Portal 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '30px',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p style={{marginBottom: '10px'}}>
            &copy; 2024 AdminQ. Todos los derechos reservados.
          </p>
          <p style={{fontSize: '0.875rem'}}>
            Cumplimiento Ley 21.442 - Inscrito en Colegio de Administración de Chile
          </p>
        </div>
      </div>
    </footer>
  );
} 