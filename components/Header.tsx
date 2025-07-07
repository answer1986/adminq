import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#1e40af',
      color: 'white',
      padding: '16px 0',
      position: 'sticky',
      top: '0',
      zIndex: '50',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fbbf24'
        }}>
          <Link href="/" title="AdminQ - Administración Profesional de Condominios" style={{textDecoration: 'none'}}>
            <Image src="/images/adminq-logo2.png" alt="AdminQ - Administración de Condominios" width={120} height={110} style={{objectFit: 'contain'}} />
          </Link>
        </div>
        
        <nav style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }}>
          <Link href="#inicio" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Inicio
          </Link>
          <Link href="#servicios" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Servicios
          </Link>
          <Link href="#transparencia" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Transparencia
          </Link>
          <Link href="#contacto" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Contacto
          </Link>
          <a 
            href="https://wa.me/56974532868" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#f59e0b',
              color: '#1e40af',
              fontWeight: 'bold',
              padding: '8px 20px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Cotizar</span>
            <span style={{fontSize: '1.2rem'}}>📱</span>
          </a>
        </nav>
      </div>
    </header>
  );
} 