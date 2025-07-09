import Image from 'next/image';
import Link from 'next/link';

export default function MinvuSection() {
  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#ffffff',
      borderTop: '3px solid #1e40af',
      borderBottom: '3px solid #1e40af'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          padding: '40px',
          borderRadius: '20px',
          border: '2px solid #3b82f6',
          boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            border: '2px solid #e5e7eb'
          }}>
            <Image
              src="/images/logo-minvu.png"
              alt="Logo MINVU - Ministerio de Vivienda y Urbanismo"
              width={120}
              height={120}
              style={{
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
          
          <div style={{
            textAlign: 'left',
            maxWidth: '600px',
            flex: 1
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '15px'
            }}>
              Registro Nacional de Administradores de Condominios
            </h3>
            <p style={{
              color: '#374151',
              marginBottom: '20px',
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}>
              Nuestro administrador está debidamente inscrito en el{' '}
              <strong>Registro Nacional de Administradores de Condominios</strong>,{' '}
              dependiente del <strong>Ministerio de Vivienda y Urbanismo (MINVU)</strong>,
              garantizando el cumplimiento de todos los estándares profesionales y éticos 
              establecidos por la <strong>Ley 21.442</strong>.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              marginBottom: '25px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                color: '#166534',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2)'
              }}>
                ✓ Registro MINVU Vigente
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                color: '#1e40af',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
              }}>
                ✓ Ley 21.442 Certificado
              </div>
            </div>
            
            <Link 
              href="https://www.minvu.gob.cl/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 8px 20px rgba(30, 64, 175, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              🏛️ Visitar MINVU Oficial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 