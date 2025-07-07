import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adminq.cl'),
  title: {
    default: 'AdminQ - Administración Profesional de Condominios en Chile',
    template: '%s | AdminQ Chile'
  },
  description: "Optimizamos la gestión de tu condominio con soluciones integrales y personalizadas. Transparencia, eficiencia y atención 24/7.",
  keywords: ["administración condominios", "ley 21.442", "administrador certificado", "condominios chile", "gestión condominios", "transparencia condominios", "videovigilancia condominios", "tecnología condominios", "santiago", "chile", "administración edificios", "administrador profesional", "gastos comunes", "mantención edificios"],
  authors: [{ name: "AdminQ", url: "https://www.adminq.cl" }],
  creator: "AdminQ",
  publisher: "AdminQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.adminq.cl",
    siteName: "AdminQ",
    title: "AdminQ - Administración Profesional de Condominios",
    description: "Optimizamos la gestión de tu condominio con soluciones integrales y personalizadas",
    images: [
      {
        url: "/images/adminq-logo2.png",
        width: 800,
        height: 600,
        alt: "AdminQ Logo",
      },
      {
        url: '/images/condominio1.webp',
        width: 1200,
        height: 630,
        alt: 'Administración de Condominios AdminQ',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdminQ - Administración Profesional de Condominios",
    description: "Optimizamos la gestión de tu condominio con soluciones integrales y personalizadas",
    images: ["/images/adminq-logo2.png"],
    creator: '@adminq_chile',
    site: '@adminq_chile',
  },
  alternates: {
    canonical: "https://www.adminq.cl",
    languages: {
      'es-CL': 'https://www.adminq.cl',
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  category: 'Administración de Condominios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.adminq.cl" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="google" content="notranslate" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="business:contact_data:street_address" content="Santiago" />
        <meta property="business:contact_data:locality" content="Santiago" />
        <meta property="business:contact_data:region" content="Región Metropolitana" />
        <meta property="business:contact_data:postal_code" content="8320000" />
        <meta property="business:contact_data:country_name" content="Chile" />
        <meta property="business:contact_data:email" content="contacto@adminq.cl" />
        <meta property="business:contact_data:phone_number" content="+56974532868" />
        <meta property="business:contact_data:website" content="https://www.adminq.cl" />
        
        {/* Datos estructurados JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.adminq.cl/#organization',
                  name: 'AdminQ',
                  url: 'https://www.adminq.cl',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.adminq.cl/images/adminq-logo2.png',
                    width: 800,
                    height: 600
                  },
                  sameAs: [
                    'https://www.facebook.com/adminq',
                    'https://www.instagram.com/adminq_chile',
                    'https://twitter.com/adminq_chile',
                    'https://www.linkedin.com/company/adminq'
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+56974532868',
                    contactType: 'customer service',
                    email: 'contacto@adminq.cl',
                    areaServed: 'CL',
                    availableLanguage: 'Spanish'
                  }
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://www.adminq.cl/#localbusiness',
                  name: 'AdminQ',
                  image: 'https://www.adminq.cl/images/adminq-logo2.png',
                  url: 'https://www.adminq.cl',
                  telephone: '+56974532868',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Santiago',
                    addressLocality: 'Santiago',
                    addressRegion: 'Región Metropolitana',
                    postalCode: '8320000',
                    addressCountry: 'CL'
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -33.4489,
                    longitude: -70.6693
                  },
                  priceRange: '$$',
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday'
                    ],
                    opens: '09:00',
                    closes: '18:00'
                  }
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.adminq.cl/#website',
                  url: 'https://www.adminq.cl',
                  name: 'AdminQ',
                  description: 'Administración profesional de condominios en Chile',
                  publisher: {
                    '@id': 'https://www.adminq.cl/#organization'
                  },
                  inLanguage: 'es-CL'
                },
                {
                  '@type': 'Service',
                  name: 'Administración de Condominios',
                  description: 'Servicio profesional de administración de condominios cumpliendo la Ley 21.442',
                  provider: {
                    '@id': 'https://www.adminq.cl/#organization'
                  },
                  areaServed: {
                    '@type': 'City',
                    name: 'Santiago'
                  },
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Servicios de Administración',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Tecnología de Acceso',
                          description: 'Sistemas modernos de control de acceso'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Videovigilancia',
                          description: 'Sistema de cámaras 24/7'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Portal de Transparencia',
                          description: 'Acceso en línea a toda la información'
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <main style={{flex: 1}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
