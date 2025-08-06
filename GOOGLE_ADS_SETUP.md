# Configuración de Google Ads para AdminQ

## Implementación Actual

### 1. Scripts en `app/layout.tsx`
- **Google Ads Tag**: Cargado con `strategy="afterInteractive"`
- **ID de Conversión**: `AW-17416452794/AxJ4CMy-v_0aELr15_BA`
- **Configuración**: Incluye `send_page_view: true` y `anonymize_ip: true`

### 2. Tracking de Conversiones
Se han implementado conversiones en los siguientes botones:
- **"Solicitar Propuesta"** (Hero Section)
- **"Portal de Transparencia"** (Hero Section)  
- **"Solicitar Cotización Gratuita"** (Contact Section)

### 3. Utilidades en `utils/googleAds.ts`
- `trackConversion()`: Registra conversiones con transaction_id único
- `isGoogleAdsAvailable()`: Verifica disponibilidad de gtag
- `trackEvent()`: Para eventos personalizados
- `trackPageView()`: Para page views

## Cómo Verificar que Funcione

### 1. Verificar en el Navegador
1. Abre las **Herramientas de Desarrollador** (F12)
2. Ve a la pestaña **Console**
3. Deberías ver:
   ```
   ✅ Google Ads gtag está disponible
   ```

### 2. Probar Conversiones
1. Haz clic en cualquiera de los botones con tracking
2. En la consola deberías ver:
   ```
   Intentando registrar conversión: [Nombre de la acción]
   Conversión registrada exitosamente en Google Ads - [Nombre de la acción]
   ```

### 3. Verificar en Google Ads
1. Ve a tu cuenta de Google Ads
2. Navega a **Herramientas y configuración > Medición > Conversiones**
3. Busca la acción de conversión configurada
4. Verifica que aparezcan conversiones en tiempo real

### 4. Usar Google Tag Assistant
1. Instala la extensión **Google Tag Assistant Legacy**
2. Activa el modo de grabación
3. Navega por el sitio y haz clic en los botones
4. Verifica que se registren los eventos de conversión

## Posibles Problemas y Soluciones

### Problema: "Google Ads gtag no está disponible"
**Solución**: 
- Verifica que el script se cargue correctamente
- Revisa la consola por errores de red
- Asegúrate de que el ID de conversión sea correcto

### Problema: No se registran conversiones en Google Ads
**Solución**:
- Verifica que el `send_to` sea correcto
- Asegúrate de que la acción de conversión esté configurada en Google Ads
- Revisa que no haya bloqueadores de anuncios activos

### Problema: Conversiones duplicadas
**Solución**:
- El `transaction_id` único evita duplicados
- Verifica que no haya múltiples llamadas al mismo evento

## Configuración Recomendada en Google Ads

### 1. Acción de Conversión
- **Nombre**: "Solicitar Propuesta"
- **Tipo**: Acción personalizada
- **Valor**: Sin valor fijo
- **Contar**: Una vez por clic

### 2. Configuración de Seguimiento
- **Incluir en "Conversiones"**: Sí
- **Optimización de puja**: Conversiones
- **Atribución**: Último clic

## Debugging Avanzado

### 1. Verificar en Network Tab
1. Abre las herramientas de desarrollador
2. Ve a la pestaña **Network**
3. Filtra por "google-analytics" o "googletagmanager"
4. Haz clic en un botón con tracking
5. Verifica que se envíen las peticiones correctas

### 2. Usar Google Analytics Debugger
1. Instala la extensión **Google Analytics Debugger**
2. Activa el modo debug
3. Navega por el sitio para ver eventos detallados

## Contacto para Soporte

Si tienes problemas con la configuración:
- Revisa los logs en la consola del navegador
- Verifica la configuración en Google Ads
- Contacta al equipo de desarrollo con los logs de error 