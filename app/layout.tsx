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
  themeColor: "#0b0708",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carvalhoeperigolo.adv.br"),
  title:
    "Carvalho & Perígolo Advogados · Simonésia - MG · Direito Notarial, Registral, Família & Previdenciário",
  description:
    "⚖️ Carvalho & Perígolo Advogados — Dra. Mônica Perígolo Magalhães e Dr. Isaac Augusto de Carvalho. Especialistas em Direito Notarial, Registral, Regularização Imobiliária, Família, Sucessões e Previdenciário. Nota máxima 5,0 ★ no Google (19 avaliações). Sede em Simonésia - MG e atendimento para todo o Brasil.",
  keywords: [
    "Carvalho & Perígolo Advogados",
    "Carvalho e Perigolo Advogados",
    "Dra Mônica Perígolo Magalhães",
    "Dr Isaac Augusto de Carvalho",
    "Advogados Simonésia MG",
    "Advocacia Simonésia Minas Gerais",
    "Direito Notarial e Registral Simonésia",
    "Regularização de Imóveis Simonésia",
    "Usucapião Extrajudicial MG",
    "Inventário em Cartório Simonésia",
    "Planejamento Sucessório e Partilha de Bens",
    "Direito Público FGV MG",
    "Direito de Família e Divórcio Simonésia",
    "Advogado Previdenciário Simonésia",
    "Aposentadoria Rural e Urbana INSS",
    "Advogados Leste de Minas Gerais",
  ],
  authors: [{ name: "Carvalho & Perígolo Advogados" }],
  creator: "Carvalho & Perígolo Advogados",
  publisher: "Carvalho & Perígolo Advogados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=cp1", sizes: "any" },
      { url: "/favicon-32x32.png?v=cp1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=cp1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=cp1", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=cp1",
    apple: [{ url: "/apple-icon.png?v=cp1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.carvalhoeperigolo.adv.br",
    title:
      "Carvalho & Perígolo Advogados · Simonésia - MG · Direito Notarial, Registral & Previdenciário",
    description:
      "⚖️ Advocacia com rigor técnico, atendimento humanizado e alta especialização notarial e registral. Dra. Mônica Perígolo e Dr. Isaac Carvalho. Nota 5,0 ★ no Google (19 avaliações). Av. Gov. Valadares, 151 - Centro, Simonésia - MG.",
    siteName: "Carvalho & Perígolo Advogados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Carvalho & Perígolo Advogados",
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
    name: "Carvalho & Perígolo Advogados",
    alternateName: "Carvalho e Perígolo Advogados — Dra. Mônica Perígolo & Dr. Isaac Carvalho",
    legalName: "Carvalho & Perígolo Advogados",
    telephone: "+55-33-99873-3957",
    email: "contato@carvalhoeperigolo.adv.br",
    url: "https://www.carvalhoeperigolo.adv.br",
    image: "https://www.carvalhoeperigolo.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Gov. Valadares, 151 - Centro",
      addressLocality: "Simonésia",
      addressRegion: "MG",
      postalCode: "36930-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.1206,
      longitude: -42.0003,
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "19",
    },
    areaServed: [
      "Simonésia",
      "Manhuaçu",
      "Caratinga",
      "Ipanema",
      "Mutum",
      "Lajinha",
      "Santana do Manhuaçu",
      "Reduto",
      "Zona da Mata",
      "Leste de Minas",
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
        opens: "08:30",
        closes: "18:00",
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Dra. Mônica Perígolo Magalhães",
        jobTitle: "Sócia Fundadora & Advogada",
      },
      {
        "@type": "Person",
        name: "Dr. Isaac Augusto de Carvalho",
        jobTitle: "Sócio Fundador & Advogado",
      },
    ],
    sameAs: [
      "https://instagram.com/carvalhoeperigolo/",
      "https://wa.me/5533998733957",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=cp1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=cp1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=cp1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=cp1" />
        <link rel="shortcut icon" href="/favicon.ico?v=cp1" />
        <meta name="theme-color" content="#0b0708" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0b0708] font-sans text-[#fbf6f4] antialiased selection:bg-[#c96a56] selection:text-[#0b0708]">
        {children}
      </body>
    </html>
  );
}
