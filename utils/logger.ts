import fs from 'fs';
import path from 'path';

// Asegurarse de que el directorio de logs existe
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFile = path.join(logDir, 'api.log');

export const logger = {
  log: (message: string, data?: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] INFO: ${message}${data ? '\nData: ' + JSON.stringify(data, null, 2) : ''}\n`;
    
    // Escribir en archivo
    fs.appendFileSync(logFile, logMessage);
    
    // También mostrar en consola
    console.log(message, data || '');
  },

  error: (message: string, error?: any) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${message}\n${error ? 'Error: ' + JSON.stringify(error, null, 2) : ''}\n`;
    
    // Escribir en archivo
    fs.appendFileSync(logFile, logMessage);
    
    // También mostrar en consola
    console.error(message, error || '');
  }
}; 