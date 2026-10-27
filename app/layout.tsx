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
  themeColor: "#071510",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moratoadvocacia.com.br"),
  title:
    "Morato Advocacia · Contagem - MG · Michelle Morato · Advogada de Família",
  description:
    "⚖️ Morato Advocacia — Dra. Michelle Morato. Estratégia jurídica com acolhimento. Especialista em Direito de Família em Contagem - MG e atendimento online para todo o Brasil. Divórcio, Pensão Alimentícia, Guarda, Visitas e Partilha de Bens. Nota máxima 5,0 ★ no Google (41 avaliações). Av. João César de Oliveira, 1730 - Sl 104 - Eldorado, Contagem - MG.",
  keywords: [
    "Morato Advocacia",
    "Michelle Morato",
    "Dra Michelle Morato",
    "Michelle Morato Advogada",
    "Advogada de Família Contagem",
    "Advogado de Direito de Família em Contagem",
    "Advogado de Família Eldorado Contagem",
    "Divórcio em Contagem MG",
    "Divórcio Consensual e Litigioso Contagem",
    "Pensão Alimentícia Contagem MG",
    "Guarda dos Filhos Contagem",
    "Partilha de Bens Contagem",
    "Reconhecimento de União Estável Contagem",
    "Inventário Familiar Contagem MG",
    "Direito de Família Belo Horizonte e Contagem",
    "Estratégia jurídica com acolhimento",
  ],
  authors: [{ name: "Morato Advocacia · Dra. Michelle Morato" }],
  creator: "Morato Advocacia",
  publisher: "Morato Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=morato1", sizes: "any" },
      { url: "/favicon-32x32.png?v=morato1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=morato1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=morato1", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=morato1",
    apple: [{ url: "/apple-icon.png?v=morato1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.moratoadvocacia.com.br",
    title:
      "Morato Advocacia · Contagem - MG · Michelle Morato · Advogada de Família",
    description:
      "⚖️ Estratégia jurídica com acolhimento. Especialista em Direito de Família: Divórcio, Alimentos, Guarda, Visita e Partilha de Bens. Nota máxima 5,0 ★ no Google (41 avaliações). Sede no Eldorado, Contagem - MG e atendimento online em todo o Brasil.",
    siteName: "Morato Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Morato Advocacia — Advogada de Família",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Morato Advocacia · Contagem - MG · Michelle Morato · Advogada de Família",
    description:
      "⚖️ Estratégia jurídica com acolhimento. Especialista em Direito de Família em Contagem - MG e online para todo o Brasil. Nota máxima 5,0 ★ no Google (41 avaliações).",
    images: ["/logo.png"],
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
    name: "Morato Advocacia",
    alternateName: "Morato Advocacia — Michelle Morato Advogada de Família",
    legalName: "Morato Advocacia",
    telephone: "+55-31-2568-2738",
    email: "contato@moratoadvocacia.com.br",
    url: "https://www.moratoadvocacia.com.br",
    image: "https://www.moratoadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. João César de Oliveira, 1730 - Sl 104 - Eldorado",
      addressLocality: "Contagem",
      addressRegion: "MG",
      postalCode: "32310-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.9325,
      longitude: -44.0537,
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "41",
    },
    areaServed: [
      "Contagem",
      "Belo Horizonte",
      "Betim",
      "Nova Lima",
      "Sabará",
      "Ribeirão das Neves",
      "Santa Luzia",
      "Grande BH",
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
        opens: "08:30",
        closes: "18:00",
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Dra. Michelle Morato",
        jobTitle: "Advogada Fundadora & Especialista em Direito de Família",
      },
    ],
    sameAs: [
      "https://www.instagram.com/michellemoratoadvogada/",
      "https://wa.me/553125682738",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=morato1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=morato1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=morato1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=morato1" />
        <link rel="shortcut icon" href="/favicon.ico?v=morato1" />
        <meta name="theme-color" content="#071510" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#071510] font-sans text-[#fbfaf6] antialiased selection:bg-[#c59a3f] selection:text-[#071510]">
        {children}
      </body>
    </html>
  );
}
