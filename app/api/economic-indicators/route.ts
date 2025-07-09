import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Usando la API de MinIndicadores para obtener datos económicos chilenos
    const indicadores = ['uf', 'ipc', 'tpm', 'ivp'];
    const results = await Promise.allSettled(
      indicadores.map(async (indicador) => {
        const response = await fetch(`https://mindicador.cl/api/${indicador}`, {
          headers: {
            'User-Agent': 'AdminQ-Website/1.0',
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Error fetching ${indicador}: ${response.status}`);
        }
        
        const data = await response.json();
        return { indicador, data };
      })
    );

    // Procesar los resultados
    const economicData = {
      uf: {
        valor: 37852.45,
        fecha: new Date().toLocaleDateString('es-CL')
      },
      ipc: {
        valor: 0.4,
        fecha: new Date().toLocaleDateString('es-CL')
      },
      tasa_interes: {
        valor: 11.25,
        fecha: new Date().toLocaleDateString('es-CL')
      },
      tasa_ipc: {
        valor: 4.2,
        fecha: new Date().toLocaleDateString('es-CL')
      }
    };

    // Procesar resultados exitosos
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        const { indicador, data } = result.value;
        const latestValue = data.serie?.[0];
        
        if (latestValue) {
          const fecha = new Date(latestValue.fecha).toLocaleDateString('es-CL');
          const valor = latestValue.valor;
          
          switch (indicador) {
            case 'uf':
              economicData.uf = { valor, fecha };
              break;
            case 'ipc':
              economicData.ipc = { valor, fecha };
              break;
            case 'tpm':
              economicData.tasa_interes = { valor, fecha };
              break;
            case 'ivp':
              economicData.tasa_ipc = { valor, fecha };
              break;
          }
        }
      }
    });

    return NextResponse.json(economicData);
  } catch (error) {
    console.error('Error fetching economic indicators:', error);
    
    // Datos de respaldo actualizados
    const fallbackData = {
      uf: {
        valor: 37852.45,
        fecha: new Date().toLocaleDateString('es-CL')
      },
      ipc: {
        valor: 0.4,
        fecha: new Date().toLocaleDateString('es-CL')
      },
      tasa_interes: {
        valor: 11.25,
        fecha: new Date().toLocaleDateString('es-CL')
      },
      tasa_ipc: {
        valor: 4.2,
        fecha: new Date().toLocaleDateString('es-CL')
      }
    };

    return NextResponse.json(fallbackData);
  }
} 