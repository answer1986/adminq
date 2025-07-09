'use client';

import { useState, useEffect } from 'react';

interface EconomicData {
  uf: {
    valor: number;
    fecha: string;
  };
  ipc: {
    valor: number;
    fecha: string;
  };
  tasa_interes: {
    valor: number;
    fecha: string;
  };
  tasa_ipc: {
    valor: number;
    fecha: string;
  };
}

export default function EconomicIndicators() {
  const [economicData, setEconomicData] = useState<EconomicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEconomicData = async () => {
      try {
        setLoading(true);
        // Usando la API de MinIndicadores que es gratuita y confiable
        const response = await fetch('/api/economic-indicators');
        if (!response.ok) {
          throw new Error('Error al obtener datos económicos');
        }
        const data = await response.json();
        setEconomicData(data);
      } catch (err) {
        setError('Error al cargar los indicadores económicos');
        console.error('Error:', err);
        // Datos de respaldo en caso de error
        setEconomicData({
          uf: { valor: 37852.45, fecha: new Date().toLocaleDateString() },
          ipc: { valor: 0.4, fecha: new Date().toLocaleDateString() },
          tasa_interes: { valor: 11.25, fecha: new Date().toLocaleDateString() },
          tasa_ipc: { valor: 4.2, fecha: new Date().toLocaleDateString() }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEconomicData();
  }, []);

  if (loading) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid #3b82f6',
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.1)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          📊 Indicadores Económicos
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '10px'
        }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '10px',
              borderRadius: '8px',
              textAlign: 'center',
              animation: 'pulse 2s infinite'
            }}>
              <div style={{
                width: '60px',
                height: '20px',
                background: 'rgba(59, 130, 246, 0.2)',
                borderRadius: '4px',
                margin: '0 auto'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid #ef4444',
        boxShadow: '0 10px 25px rgba(239, 68, 68, 0.1)',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#dc2626',
          marginBottom: '10px'
        }}>
          ⚠️ Error al cargar indicadores
        </h3>
        <p style={{
          color: '#7f1d1d',
          fontSize: '0.9rem'
        }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      padding: '20px',
      borderRadius: '15px',
      border: '2px solid #3b82f6',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.1)',
      marginBottom: '20px'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1e40af',
        marginBottom: '15px',
        textAlign: 'center'
      }}>
        📊 Indicadores Económicos Actuales
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '15px'
      }}>
        {/* UF */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '15px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{
            fontSize: '1.5rem',
            marginBottom: '8px'
          }}>💰</div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '4px'
          }}>
            UF
          </div>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            ${economicData?.uf.valor.toLocaleString('es-CL', { minimumFractionDigits: 2 })}
          </div>
          <div style={{
            fontSize: '0.7rem',
            color: '#6b7280',
            marginTop: '4px'
          }}>
            {economicData?.uf.fecha}
          </div>
        </div>

        {/* IPC */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '15px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{
            fontSize: '1.5rem',
            marginBottom: '8px'
          }}>📈</div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '4px'
          }}>
            IPC
          </div>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            {economicData?.ipc.valor}%
          </div>
          <div style={{
            fontSize: '0.7rem',
            color: '#6b7280',
            marginTop: '4px'
          }}>
            {economicData?.ipc.fecha}
          </div>
        </div>

        {/* Tasa de Interés */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '15px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{
            fontSize: '1.5rem',
            marginBottom: '8px'
          }}>🏦</div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '4px'
          }}>
            Tasa Interés
          </div>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            {economicData?.tasa_interes.valor}%
          </div>
          <div style={{
            fontSize: '0.7rem',
            color: '#6b7280',
            marginTop: '4px'
          }}>
            {economicData?.tasa_interes.fecha}
          </div>
        </div>

        {/* Tasa IPC */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '15px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{
            fontSize: '1.5rem',
            marginBottom: '8px'
          }}>📊</div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '4px'
          }}>
            Tasa IPC
          </div>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            {economicData?.tasa_ipc.valor}%
          </div>
          <div style={{
            fontSize: '0.7rem',
            color: '#6b7280',
            marginTop: '4px'
          }}>
            {economicData?.tasa_ipc.fecha}
          </div>
        </div>
      </div>
      
      <div style={{
        marginTop: '15px',
        padding: '10px',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.8rem',
          color: '#1e40af',
          margin: 0
        }}>
          Fuente: Banco Central de Chile • Actualizado automáticamente
        </p>
      </div>
    </div>
  );
} 