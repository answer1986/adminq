// Configuración y utilidades para Google Ads
export const GOOGLE_ADS_ID = 'AW-17416452794';
export const CONVERSION_ID = 'AW-17416452794/AxJ4CMy-v_0aELr15_BA';

// Función para verificar si Google Ads está disponible
export const isGoogleAdsAvailable = (): boolean => {
  if (typeof window === 'undefined') return false;
  return typeof window.gtag === 'function';
};

// Función para registrar conversiones
export const trackConversion = (action: string, value?: number): void => {
  if (!isGoogleAdsAvailable()) {
    console.warn('Google Ads gtag no está disponible');
    return;
  }

  console.log(`Intentando registrar conversión: ${action}`);
  
  const conversionData: any = {
    'send_to': CONVERSION_ID,
    'transaction_id': Date.now().toString(),
    'event_callback': function() {
      console.log(`Conversión registrada exitosamente en Google Ads - ${action}`);
    }
  };

  // Agregar valor si se proporciona
  if (value) {
    conversionData.value = value;
    conversionData.currency = 'CLP';
  }

  window.gtag('event', 'conversion', conversionData);
};

// Función para registrar eventos personalizados
export const trackEvent = (eventName: string, parameters?: Record<string, any>): void => {
  if (!isGoogleAdsAvailable()) {
    console.warn('Google Ads gtag no está disponible');
    return;
  }

  const eventData: any = {
    'event_name': eventName,
    ...parameters
  };

  window.gtag('event', eventName, eventData);
};

// Función para registrar page views
export const trackPageView = (pagePath: string): void => {
  if (!isGoogleAdsAvailable()) {
    console.warn('Google Ads gtag no está disponible');
    return;
  }

  window.gtag('config', GOOGLE_ADS_ID, {
    'page_path': pagePath
  });
}; 