// layout.js
import "./globals.css";
import Providers from "./Providers";
import { jsonLdScriptProps } from "react-schemaorg";

export const metadata = {
  title: "YELMOUSS | Full Stack Developer in Morocco",
  description: "Expert Full Stack Developer based in Morocco specializing in React, Next.js, and modern web technologies. Building innovative digital solutions with cutting-edge technology.",
  keywords: "developer morocco, full stack developer rabat, react developer morocco, web developer morocco, développeur maroc",
  authors: [{ name: "Yassine ELMOUSS" }],
  creator: "Yassine ELMOUSS",
  publisher: "Yassine ELMOUSS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://yelmouss.vercel.app',
  },
  openGraph: {
    title: 'YELMOUSS | Full Stack Developer in Morocco',
    description: 'Expert Full Stack Developer based in Morocco specializing in React, Next.js, and modern web technologies.',
    url: 'https://yelmouss.vercel.app',
    siteName: 'YELMOUSS Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/yass.jpg',
        width: 1200,
        height: 630,
        alt: 'YELMOUSS - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YELMOUSS | Full Stack Developer in Morocco',
    description: 'Expert Full Stack Developer based in Morocco specializing in React, Next.js, and modern web technologies.',
    images: ['/yass.jpg'],
    creator: '@yelmouss',
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
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yassine ELMOUSS",
  url: "https://yelmouss.vercel.app",
  image: "/yass.jpg",
  sameAs: [
    "https://github.com/yelmouss",
    "https://linkedin.com/in/yelmouss",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    addressCountry: "Morocco"
  },
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Rabat" /> 
      
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Modern Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <script
          {...jsonLdScriptProps({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "YELMOUSS Portfolio",
            url: "https://yelmouss.vercel.app"
          })}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}