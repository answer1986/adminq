import { useEffect } from 'react';
import Image from 'next/image';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '20px',
        maxWidth: '90%',
        width: '400px',
        position: 'relative',
        textAlign: 'center'
      }} onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#6b7280'
          }}
        >
          ×
        </button>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '20px'
        }}>
          Escanea para Cotizar
        </h3>
        <div style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          margin: '0 auto 20px auto'
        }}>
          <Image
            src="/images/qr-adminq.png"
            alt="QR AdminQ WhatsApp"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
        <p style={{
          color: '#6b7280',
          fontSize: '1rem',
          marginBottom: '15px'
        }}>
          O contáctanos directamente:
        </p>
        <a 
          href="https://wa.me/56974532868"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
        >
          <span>WhatsApp</span>
          <span style={{fontSize: '1.2rem'}}>📱</span>
        </a>
      </div>
    </div>
  );
} 