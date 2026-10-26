import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0908",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daianapaiva.adv.br"),
  title: "Daiana Paiva · Advocacia Especializada · Agronegócio, Família & INSS · Raul Soares - MG",
  description:
    "⚖️ Dra. Daiana Paiva (OAB/MG 211.743) — Advocacia Especializada com a autoridade única de quem é Advogada e Engenheira Agrônoma. Direito do Agronegócio e Ambiental, Família e Sucessões, e Benefícios Previdenciários (INSS). Nota máxima 5,0 ★ no Google (22 avaliações). Sede em Raul Soares - MG e atendimento em todo o Brasil.",
  keywords: [
    "Daiana Paiva Advocacia Especializada",
    "Dra Daiana Paiva",
    "Daiana Paiva Advogada",
    "OAB MG 211.743",
    "Advogada e Agronoma",
    "Direito do Agronegocio Raul Soares",
    "Direito Ambiental MG",
    "Regularizacao Fundiaria MG",
    "Contratos Rurais e Arrendamento",
    "Advogada Direito de Familia Raul Soares",
    "Inventario e Partilha de Bens Raul Soares",
    "Planejamento Sucessorio Familiar e Rural",
    "Aposentadoria Rural INSS",
    "Advogada Previdenciario Raul Soares",
    "Beneficios INSS Raul Soares MG",
    "Advocacia Especializada Raul Soares",
  ],
  authors: [{ name: "Daiana Paiva Advocacia Especializada" }],
  creator: "Daiana Paiva Advocacia Especializada",
  publisher: "Daiana Paiva Advocacia Especializada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=10", sizes: "any" },
      { url: "/favicon-32x32.png?v=10", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=10", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=10", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=10",
    apple: [{ url: "/apple-icon.png?v=10", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.daianapaiva.adv.br",
    title: "Daiana Paiva · Advocacia Especializada · Agronegócio, Família & INSS",
    description:
      "⚖️ Advocacia com rigor técnico, atendimento humanizado e a autoridade única de quem é advogada e agrônoma. 5,0 ★ no Google (22 avaliações). R. José de Oliveira, 40 - Raul Soares, MG e atendimento em todo o Brasil.",
    siteName: "Daiana Paiva Advocacia Especializada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Daiana Paiva Advocacia Especializada",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Daiana Paiva - Advocacia Especializada",
    alternateName: "Dra. Daiana Paiva — Advogada & Engenheira Agrônoma",
    legalName: "Daiana Paiva Advocacia Especializada",
    telephone: "+55-31-98258-2001",
    email: "contato@daianapaiva.adv.br",
    url: "https://www.daianapaiva.adv.br",
    image: "https://www.daianapaiva.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. José de Oliveira, 40",
      addressLocality: "Raul Soares",
      addressRegion: "MG",
      postalCode: "35350-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.1031,
      longitude: -42.4533,
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22",
    },
    areaServed: [
      "Raul Soares",
      "Rio Casca",
      "São Pedro dos Ferros",
      "Ponte Nova",
      "Caratinga",
      "Viçosa",
      "Manhuaçu",
      "Zona da Mata",
      "Belo Horizonte",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/dra_daiana_paiva/",
      "https://wa.me/5531982582001",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=10" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=10" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=10" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=10" />
        <link rel="shortcut icon" href="/favicon.ico?v=10" />
        <meta name="theme-color" content="#0a0908" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0a0908] font-sans text-[#fbf8f5] antialiased selection:bg-[#ce9568] selection:text-[#0a0908]">
        {children}
      </body>
    </html>
  );
}
