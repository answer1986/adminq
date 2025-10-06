'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      background: 'linear-gradient(135deg, rgba(11, 35, 113, 0.9) 0%, rgba(17, 117, 17, 0.8) 100%)',
      color: 'white',
      padding: '12px 0',
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
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fbbf24'
        }}>
          <Link href="/" title="AdminQ - Administración Profesional de Condominios" style={{textDecoration: 'none'}}>
            <Image 
              src="/images/adminq-logo2.png" 
              alt="AdminQ - Administración de Condominios" 
              width={isMobile ? 80 : 120} 
              height={isMobile ? 74 : 110} 
              style={{objectFit: 'contain'}} 
            />
          </Link>
        </div>
        
        {/* Menú hamburguesa para móviles */}
        <button
          onClick={toggleMenu}
          style={{
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '4px',
            zIndex: '60'
          }}
          className="mobile-menu-button"
        >
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            margin: '5px auto',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            margin: '5px auto',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? '0' : '1'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: 'white',
            margin: '5px auto',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></span>
        </button>
        
        {/* Navegación desktop */}
        <nav style={{
          display: isMobile ? 'none' : 'flex',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          <Link href="#inicio" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Inicio
          </Link>
          <Link href="#servicios" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Servicios
          </Link>
          <Link href="#transparencia" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Transparencia
          </Link>
          <Link href="#contacto" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Contacto
          </Link>
          <Link href="/registro" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            Registro
          </Link>
          <a 
            href="https://wa.me/56974532868" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#f59e0b',
              color: '#1e40af',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Cotizar</span>
            <span style={{fontSize: '1rem'}}>📱</span>
          </a>
        </nav>

        {/* Navegación móvil */}
        <nav style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          backgroundColor: '#1e40af',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMenuOpen ? '1' : '0',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: '55',
          display: isMobile ? 'block' : 'none'
        }} className="mobile-nav">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            gap: '16px'
          }}>
            <Link 
              href="#inicio" 
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
            >
              Inicio
            </Link>
            <Link 
              href="#servicios" 
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
            >
              Servicios
            </Link>
            <Link 
              href="#transparencia" 
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
            >
              Transparencia
            </Link>
            <Link
              href="#contacto"
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
            >
              Contacto
            </Link>
            <Link
              href="/registro"
              onClick={closeMenu}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
            >
              Registro
            </Link>
            <a 
              href="https://wa.me/56974532868" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                backgroundColor: '#f59e0b',
                color: '#1e40af',
                fontWeight: 'bold',
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '1.1rem',
                marginTop: '8px'
              }}
            >
              <span>Cotizar por WhatsApp</span>
              <span style={{fontSize: '1.2rem'}}>📱</span>
            </a>
          </div>
        </nav>

        {/* Overlay para cerrar menú móvil */}
        {isMenuOpen && (
          <div
            onClick={closeMenu}
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: '40'
            }}
          />
        )}
      </div>
    </header>
  );
} 