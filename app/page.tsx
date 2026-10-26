"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  FileCheck2,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Users,
  Wheat,
  Sprout,
  Home as HomeIcon,
  ShieldCheck,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531982582001";
const PHONE_DISPLAY = "(31) 98258-2001";
const EMAIL_CONTACT = "contato@daianapaiva.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/dra_daiana_paiva/";
const INSTAGRAM_HANDLE = "@dra_daiana_paiva";
const LAWYER_NAME = "Dra. Daiana Paiva";
const LAWYER_TITLE = "Advogada (OAB/MG 211.743) & Engenheira Agrônoma";

const ADDRESS_TEXT = "R. José de Oliveira, 40 - Raul Soares, MG, 35350-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Daiana+Paiva+Advocacia+Especializada+R+Jose+de+Oliveira+40+Raul+Soares+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Daiana+Paiva+%E2%80%94+Advocacia+Especializada%0ARaul+Soares+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/daiana-paiva.jpg";
const FOTO_SOBRE_SRC = "/sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Daiana Paiva! Gostaria de consultar sobre atendimento jurídico especializado.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-agronegocio-contratos-rurais",
    title: "Direito do Agronegócio & Contratos Rurais",
    icon: Wheat,
    tag: "Produtores Rurais · Arrendamento & Parceria · Crédito Rural",
    summary:
      "Assessoria jurídica estratégica para produtores e pecuaristas com a autoridade de quem é advogada e agrônoma. Contratos rurais blindados, renegociação de dívidas agrícolas e segurança patrimonial da terra.",
    details:
      "O setor rural possui particularidades técnicas, sazonais e de crédito que apenas quem domina a agronomia e o direito consegue compreender a fundo. A Dra. Daiana Paiva elabora e revisa contratos agrários de alto nível (arrendamento, parceria, comodato, compra e venda de lavouras e fazendas), atua na renegociação de financiamentos agrícolas e protege o produtor rural contra cobranças abusivas e perdas de propriedade.",
    topics: [
      "Elaboração e revisão de Contratos de Arrendamento Rural e Parceria Agrícola em estrita conformidade com o Estatuto da Terra",
      "Contratos de compra e venda de imóveis rurais, penhor agrícola, alienação fiduciária e garantias da safra",
      "Defesa e renegociação de Cédulas de Produto Rural (CPR), Cédulas de Crédito Rural (CCR) e dívidas bancárias do agro",
      "Planejamento jurídico para sucessão de propriedades produtivas e continuidade do negócio familiar no campo",
      "Auditoria jurídica e documental prévia em aquisições de propriedades rurais (Due Diligence fundiária)",
      "Atuação preventiva em conflitos entre vizinhos confinantes, passagem forçada e servidões rurais",
    ],
    whatsAppText:
      "Olá, Dra. Daiana Paiva! Gostaria de consultar sobre assessoria jurídica para o Agronegócio e Contratos Rurais.",
  },
  {
    id: "direito-ambiental-rural",
    title: "Direito Ambiental Rural & Regularização",
    icon: Sprout,
    tag: "Defesa em Autos de Infração · IEF & IBAMA · Desembargo & CAR",
    summary:
      "Descomplico o Direito Ambiental: defesas técnicas em autos de infração do IEF, IBAMA, SEMAD e Polícia Militar de Meio Ambiente, termos de compromisso (TAC), desembargo de áreas produtivas e regularização do CAR.",
    details:
      "Uma autuação ambiental indevida ou desproporcional pode paralisar as atividades de uma propriedade e gerar multas astronômicas. Como engenheira agrônoma e advogada, a Dra. Daiana Paiva analisa laudos técnicos periciais com olhar técnico-científico, identifica nulidades nas fiscalizações e formula defesas administrativas e judiciais contundentes para desembargar terras e regularizar licenças e outorgas.",
    topics: [
      "Defesas administrativas e recursos contra autos de infração ambiental lavrados por IEF, IBAMA, SEMAD e Polícia de Meio Ambiente",
      "Ações judiciais para anulação de multas ambientais arbitrárias e desproporcionais",
      "Pedidos de desembargo imediato de áreas rurais e suspensão de sanções restritivas de direitos",
      "Negociação e formalização de Termos de Ajustamento de Conduta (TAC) e planos de recuperação ambiental viáveis",
      "Consultoria técnica e jurídica para Cadastro Ambiental Rural (CAR), Reserva Legal e Áreas de Preservação Permanente (APP)",
      "Processos de licenciamento ambiental e pedidos de outorga de uso de recursos hídricos para irrigação e pecuária",
    ],
    whatsAppText:
      "Olá, Dra. Daiana Paiva! Preciso de defesa ou orientação para uma demanda de Direito Ambiental Rural.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Inventário Judicial & Extrajudicial · Planejamento Sucessório · Divórcio",
    summary:
      "Atendimento acolhedor e seguro para proteger seus bens e pacificar relações familiares. Inventários rápidos em cartório ou judiciais, planejamento sucessório para preservação do patrimônio familiar e divórcios.",
    details:
      "Momentos de luto ou separação exigem sensibilidade humana ímpar combinada a uma técnica jurídica apurada para evitar conflitos destrutivos e proteger o patrimônio construído ao longo de uma vida inteira. A Dra. Daiana Paiva atua em inventários com foco na agilidade e na menor tributação lícita, bem como em planejamentos sucessórios para famílias e produtores rurais.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas célere e descomplicado quando há consenso entre os herdeiros",
      "Inventário Judicial e partilha de bens com resolução estratégica de impasses e avaliação correta do acervo patrimonial",
      "Planejamento Sucessório Familiar: doações com reserva de usufruto, testamentos e holdings familiares",
      "Divórcio Consensual ou Litigioso com partilha justa de bens, imóveis e cotas empresariais/rurais",
      "Fixação, revisão e execução de pensão alimentícia, guarda compartilhada e regime de convivência familiar",
      "Reconhecimento e dissolução de união estável com proteção de meação e direitos hereditários",
    ],
    whatsAppText:
      "Olá, Dra. Daiana Paiva! Gostaria de orientações sobre Inventário, Partilha de Bens ou Direito de Família.",
  },
  {
    id: "beneficios-inss-previdenciario",
    title: "Benefícios do INSS · Rural & Urbano",
    icon: FileCheck2,
    tag: "Aposentadoria Rural · Tempo de Contribuição · Auxílio-Doença & BPC/LOAS",
    summary:
      "Garantia dos direitos previdenciários de quem trabalhou a vida inteira. Aposentadoria rural do segurado especial, aposentadoria urbana, averbação de tempo de roça, auxílio por incapacidade e BPC/LOAS.",
    details:
      "O trabalhador do campo e da cidade frequentemente enfrenta exigências burocráticas injustas do INSS para ter sua aposentadoria ou benefício concedido. A Dra. Daiana Paiva reúne toda a documentação histórica, notas de produtor, certidões e testemunhas para comprovar o labor rural e assegurar o melhor benefício possível na via administrativa ou por meio de ação judicial.",
    topics: [
      "Aposentadoria por Idade Rural para o segurado especial (agricultores familiares, meeiros, arrendatários e diaristas)",
      "Averbação e contagem de tempo de serviço rural antigo para antecipar a Aposentadoria Urbana",
      "Aposentadoria por Idade Urbana, tempo de contribuição, aposentadoria especial e da pessoa com deficiência",
      "Requerimento e restabelecimento de Auxílio por Incapacidade Temporária (auxílio-doença) e aposentadoria por invalidez",
      "Pensão por Morte e Salário-Maternidade rural e urbano concedidos sem atrasos indevidos",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos a partir de 65 anos e pessoas com deficiência em vulnerabilidade",
    ],
    whatsAppText:
      "Olá, Dra. Daiana Paiva! Gostaria de consultar sobre a concessão de um benefício ou aposentadoria do INSS.",
  },
  {
    id: "regularizacao-fundiaria-imobiliaria",
    title: "Regularização Fundiária & Propriedade",
    icon: HomeIcon,
    tag: "Usucapião Rural e Urbano · Demarcação · Retificação de Escritura",
    summary:
      "Transforme a posse em propriedade legítima com registro em cartório. Ações e procedimentos de usucapião extrajudicial, retificação de área, demarcação de divisas e defesa da posse contra invasões.",
    details:
      "Ter apenas contrato de gaveta ou posse antiga sem escritura registrada diminui o valor de mercado do imóvel e impede financiamentos bancários e transferências seguras aos herdeiros. Unindo conhecimento agronômico de georreferenciamento e perícia jurídica, a Dra. Daiana Paiva promove a regularização registral completa do seu imóvel rural ou urbano.",
    topics: [
      "Usucapião Extrajudicial direto em Cartório de Registro de Imóveis: rapidez e segurança sem processo judicial",
      "Usucapião Especial Rural (Art. 191 da CF) e Usucapião Urbano por posse mansa, pacífica e ininterrupta",
      "Ações de retificação de área e inserção de medidas perimetrais no Cartório de Registro",
      "Ações de demarcação e divisão de terras particulares para estremar divisas confusas ou litigiosas",
      "Ações possessórias: reintegração de posse, manutenção de posse e interdito proibitório",
      "Regularização de títulos de posse, contratos de cessão de direitos hereditários e escrituras pendentes",
    ],
    whatsAppText:
      "Olá, Dra. Daiana Paiva! Gostaria de orientações sobre regularização de imóvel ou usucapião.",
  },
  {
    id: "consultoria-preventiva-resolucao-conflitos",
    title: "Consultoria Preventiva & Acordos",
    icon: ShieldCheck,
    tag: "Assessoria Contínua · Prevenção de Litígios · Mediação Extrajudicial",
    summary:
      "Soluções jurídicas preventivas para você, sua família ou sua empresa rural tomarem decisões com total clareza e tranquilidade, evitando processos demorados e custos desnecessários.",
    details:
      "A melhor advocacia é aquela que previne litígios antes que eles se instalem e consumam tempo, recursos e a paz da sua família. A Dra. Daiana Paiva oferece consultoria jurídica próxima e descomplicada, atuando em mediações, redação de termos de acordo com validade de título executivo e orientação contínua com canal direto pelo WhatsApp.",
    topics: [
      "Consultoria jurídica consultiva para tomada de decisões financeiras, patrimoniais e contratuais",
      "Mediação e condução de negociações amigáveis entre familiares, herdeiros ou sócios rurais",
      "Elaboração de acordos extrajudiciais seguros homologados perante o Poder Judiciário",
      "Pareceres jurídicos detalhados sobre viabilidade de demandas e riscos processuais",
      "Canal de comunicação ágil e direto pelo WhatsApp sem intermediários ou termos herméticos",
      "Atendimento presencial em Raul Soares - MG e consultas digitais estruturadas para clientes de todo o país",
    ],
    whatsAppText:
      "Olá, Dra. Daiana Paiva! Gostaria de agendar uma consulta preventiva para analisar minha situação jurídica.",
  },
];

const clientReviews = [
  {
    name: "Naiara Monteiro Damasceno",
    reviewerTag: "Local Guide · 3 avaliações · 53 fotos",
    badge: "Advogada & Agrônoma",
    rating: 5,
    content:
      "Super competente e dedicada. Resolveu de forma prática e rápida o meu problema. Além de ser advogada ainda é agrônoma. O que foi de suma importância para meu caso.",
  },
  {
    name: "Rodrigo Antonio Chaves da Silva",
    reviewerTag: "Prof. Rodrigo Chaves · 1 avaliação",
    badge: "Eficiência & Serviço Nota Dez",
    rating: 5,
    content:
      "Profissional dedicada, competente e eficiente! Serviço nota dez! Paz e Bem!",
  },
  {
    name: "Gesiana Silva",
    reviewerTag: "1 avaliação no Google",
    badge: "Ética & Zelo Incomparável",
    rating: 5,
    content:
      "É um prazer conhecer alguém tão comprometido com seu trabalho! Sua dedicação e ética profissional demonstram um alto nível de responsabilidade e zelo pelos clientes. Você é um exemplo de profissionalismo e integridade! Gratidão!",
  },
  {
    name: "Carlos Mariano da Silva",
    reviewerTag: "Local Guide · 12 avaliações",
    badge: "Competente e Justa",
    rating: 5,
    content:
      "Excelente profissional, competente e justa.",
  },
  {
    name: "Regi Oliveira",
    reviewerTag: "1 avaliação no Google",
    badge: "Fez Toda a Diferença",
    rating: 5,
    content:
      "Uma excelente profissional.. Muito obrigada por toda a dedicação! Seu trabalho fez toda a diferença.",
  },
  {
    name: "Rosana Santos",
    reviewerTag: "3 avaliações no Google",
    badge: "Atendimento Espetacular",
    rating: 5,
    content:
      "Profissional qualificada, atendimento espetacular, além de um coração enorme... super indico!",
  },
  {
    name: "Jessica Pereira",
    reviewerTag: "1 avaliação no Google",
    badge: "Melhor Advogada de Raul Soares",
    rating: 5,
    content:
      "Melhor advogada de Raul Soares! Atenciosa e com uma experiência incrível!!!",
  },
  {
    name: "Stephane Carvalho",
    reviewerTag: "2 avaliações no Google",
    badge: "Profissional de Qualidade",
    rating: 5,
    content:
      "Profissional de qualidade melhor advogada de Raul Soares super recomendo maravilhosa !!!",
  },
  {
    name: "Vagner Sousa",
    reviewerTag: "1 avaliação no Google",
    badge: "Compromisso com os Clientes",
    rating: 5,
    content:
      "Excelente profissional!. Dedicação e compromisso com seus clientes.",
  },
  {
    name: "Juliana Magalhães",
    reviewerTag: "1 avaliação no Google",
    badge: "Super Competente",
    rating: 5,
    content:
      "Advogada super competente. Recomendo muito!",
  },
  {
    name: "Giovana Parzzanini",
    reviewerTag: "2 avaliações no Google",
    badge: "Honestidade e Responsabilidade",
    rating: 5,
    content:
      "Competência, honestidade e responsabilidade.",
  },
  {
    name: "Ana Carla",
    reviewerTag: "3 avaliações · 2 fotos",
    badge: "Seriedade e Agilidade",
    rating: 5,
    content:
      "Seriedade, comprometimento, e agilidade, excelente profissional!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  theme = "dark",
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  return (
    <div>
      <p className={isLight ? "eyebrow-dark" : "eyebrow-gold"}>{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] sm:text-4xl lg:text-[3.15rem] ${
          isLight ? "text-[#18130f]" : "text-[#fbf8f5]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            isLight ? "text-[#4a4038]" : "text-[#dcd4ce]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#0a0908] text-[#fbf8f5] selection:bg-[#ce9568] selection:text-[#0a0908]">
        {/* Navigation Bar - Warm Rose-Gold, Champagne & Luxury Noir */}
        <header className="sticky top-0 z-40 border-b border-[#ce9568]/25 bg-[#0a0908]/95 backdrop-blur-xl shadow-card">
          <div className="mx-auto flex h-[98px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] lg:h-[114px] xl:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Daiana Paiva Advocacia Especializada - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[66px] w-[220px] sm:h-[76px] sm:w-[260px] lg:h-[86px] lg:w-[290px] xl:h-[92px] xl:w-[310px]">
                <Image
                  src={LOGO_SRC}
                  alt="Daiana Paiva Advocacia Especializada - OAB/MG 211.743"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 290px, 310px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-5 xl:gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Avaliações da Dra. Daiana Paiva no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#ce9568]/30 bg-[#12100e] text-[#dcd4ce] transition-all hover:border-[#dfa67b] hover:bg-[#1a1714] hover:text-white shadow-xs"
                title="5,0 ★ no Google (22 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Daiana Paiva"
                className="grid size-10 place-items-center rounded-lg border border-[#ce9568]/30 bg-[#12100e] text-[#dcd4ce] transition-all hover:border-[#dfa67b] hover:bg-[#1a1714] hover:text-white shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Daiana Paiva"
                className="grid size-10 place-items-center rounded-lg border border-[#ce9568]/30 bg-[#12100e] text-[#dcd4ce] transition-all hover:border-[#dfa67b] hover:bg-[#1a1714] hover:text-white shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Daiana Paiva"
                className="grid size-10 place-items-center rounded-lg border border-[#ce9568]/30 bg-[#12100e] text-[#dcd4ce] transition-all hover:border-[#dfa67b] hover:bg-[#1a1714] hover:text-white shadow-xs"
                title="Fale no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Daiana Paiva! Gostaria de uma consulta jurídica especializada."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Fale Comigo <ArrowUpRight size={14} className="text-[#0a0908]" />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#ce9568]/40 bg-[#12100e] text-[#fbf8f5] lg:hidden shadow-xs"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-[#ce9568]/25 bg-[#12100e] px-6 text-[#fbf8f5] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#dcd4ce] hover:text-[#dfa67b]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#f8e5d3]/85 bg-gradient-to-r from-[#b0764c] via-[#e4be9c] to-[#b0764c] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0a0908] shadow-[0_4px_16px_rgba(206,149,104,0.4),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Daiana Paiva! Gostaria de consultar sobre um caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} className="text-[#0a0908]" /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ce9568]/40 bg-[#1a1714] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fbf8f5] transition-all hover:border-[#dfa67b]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (22 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1 [MODO ESCURO] - Hero Section - Warm Rose-Gold Aura, Sophisticated Contrast & Authority */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#ce9568]/25 bg-gradient-to-b from-[#0a0908] via-[#100e0c] to-[#0a0908]"
        >
          {/* Subtle warm champagne lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#ce9568]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#dfa67b]/8 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#ce9568]/50 bg-[#1a1714]/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e4be9c] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfa67b] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#f8e5d3]"></span>
                </span>
                <span>ADVOGADA & ENGENHEIRA AGRÔNOMA · OAB/MG 211.743</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#fbf8f5] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Segurança jurídica e dedicação para proteger sua família,{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e4be9c] via-[#dfa67b] to-[#fef7f0]">
                  seu patrimônio e suas terras.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#dcd4ce] sm:text-base sm:leading-8"
              >
                Com a autoridade única de quem é <strong className="font-semibold text-white">advogada e engenheira agrônoma</strong>, a <strong className="font-semibold text-white">Dra. Daiana Paiva</strong> une rigor técnico, acolhimento humano e resolução prática em <strong className="font-semibold text-white">Direito do Agronegócio e Ambiental, Inventários e Família, e Benefícios Previdenciários do INSS</strong>. Sede em Raul Soares - MG e atendimento para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Daiana Paiva! Gostaria de conversar sobre o meu caso no WhatsApp."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0a0908]" /> Falar com a Dra. Daiana no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#ce9568]/45 bg-[#12100e]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fbf8f5] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#f8e5d3] hover:bg-[#1a1714] hover:text-white"
                >
                  Conhecer Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#dfa67b]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#ce9568]/25 pt-5 text-xs text-[#9e938a]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbf8f5] transition-colors hover:text-[#dfa67b]"
                >
                  <Star size={14} className="fill-[#dfa67b] text-[#dfa67b]" /> 5,0 ★ no Google (22 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#fbf8f5]">
                  <Award size={14} className="text-[#dfa67b]" /> Advogada & Agrônoma
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbf8f5] transition-colors hover:text-[#dfa67b]"
                >
                  <MapPin size={14} className="text-[#dfa67b]" /> R. José de Oliveira, 40 · Raul Soares - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Official Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[450px] xl:max-w-[470px] lg:ml-auto lg:mr-0"
            >
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-2xl border-2 border-[#ce9568]/50 bg-[#12100e] shadow-2xl ring-1 ring-[#dfa67b]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Daiana Paiva — Advogada Especializada e Agrônoma"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Daiana Paiva
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#e4be9c]">
                      Advogada · OAB/MG 211.743 & Agrônoma
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      R. José de Oliveira, 40 · Raul Soares - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#ce9568]/60 bg-[#0a0908]/85 text-[#dfa67b] backdrop-blur-sm shadow-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#ce9568]/50 bg-[#0a0908]/90 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#e4be9c] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM RAUL SOARES · ATENDIMENTO EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#ce9568]/60 bg-[#12100e]/95 p-3 shadow-xl backdrop-blur-md transition-all hover:border-[#dfa67b] hover:bg-[#1a1714] sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#dfa67b]">
                      <Star size={12} className="fill-[#dfa67b] text-[#dfa67b]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#e4be9c]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#dcd4ce]">
                  22 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#ce9568]/25 bg-[#12100e]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima em 22 avaliações reais reconhecendo competência, ética e dedicação",
              ],
              [
                "Advogada & Agrônoma",
                "domínio técnico e prático de questões agrárias, ambientais e fundiárias",
              ],
              [
                "Atendimento Humanizado",
                "atenção aos detalhes, linguagem clara e acolhimento em cada etapa",
              ],
              [
                "Raul Soares • MG • Brasil",
                "sede física estruturada e assessoria jurídica digital ágil para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#ce9568]/25"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#dfa67b] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#dcd4ce]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* DOBRA 2 [MODO CLARO] - Sobre a Dra. Daiana Paiva - Ivory Alabaster Luxury */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#dfbeaa]/40 bg-[#fcf9f6] py-20 text-[#18130f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Portrait Card in Light Mode */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#b0764c]/40 bg-[#ffffff] shadow-2xl ring-1 ring-[#b0764c]/20">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Daiana Paiva — Advocacia Especializada"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Authority badge card in Light Mode */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#dfbeaa] bg-white/95 backdrop-blur-md px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#8a4f25]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a4f25]">
                    Autoridade & Especialização
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#18130f] font-bold">
                  Dra. Daiana Paiva
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#8a4f25]">
                  Advogada (OAB/MG 211.743) & Engenheira Agrônoma
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#786b61]">
                  R. José de Oliveira, 40 · Raul Soares - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#b0764c]/30 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography in Light Mode */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#dfbeaa] bg-[#f4ebe1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a4f25] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8a4f25]" />
                <span>SOBRE A PROFISSIONAL</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#18130f] sm:text-4xl lg:text-[3.25rem]"
              >
                A união do conhecimento jurídico com a visão prática do campo:{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#91572c] via-[#b0764c] to-[#78431e]">
                  advocacia dedicada, ética e resolutiva.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a4038]"
              >
                Com escritório sediado em <strong className="font-bold text-[#18130f]">Raul Soares - MG</strong>, a <strong className="font-bold text-[#18130f]">Dra. Daiana Paiva</strong> destaca-se pela sua formação multidisciplinar rara e valorosa: é advogada e também <strong className="font-bold text-[#18130f]">engenheira agrônoma</strong>.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a4038]"
              >
                Essa combinação traz uma vantagem estratégica imensa para produtores rurais, famílias e clientes que necessitam de soluções no <strong className="font-bold text-[#18130f]">Direito do Agronegócio, Ambiental, Imobiliário/Fundiário, Família & Sucessões e Benefícios do INSS</strong>. Dra. Daiana compreende os laudos técnicos, as normas cartorárias, os ciclos do campo e os anseios familiares com a mesma profundidade técnica.
              </motion.p>

              {/* Client Quote Card in Light Mode */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#dfbeaa]/70 bg-white p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#18130f]">
                  &ldquo;Super competente e dedicada. Resolveu de forma prática e rápida o meu problema. Além de ser advogada ainda é agrônoma. O que foi de suma importância para meu caso.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8a4f25]">
                  — Naiara Monteiro Damasceno · Avaliação real 5,0 ★ no Google Meu Negócio
                </p>
              </motion.div>

              {/* Credentials / Pillars in Light Mode */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#dfbeaa]/60 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#18130f]">22 Avaliações 5,0 ★</p>
                  <p className="mt-0.5 text-[11px] text-[#786b61]">
                    100% de avaliações 5 estrelas no Google
                  </p>
                </div>
                <div className="rounded-lg border border-[#dfbeaa]/60 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#18130f]">Advogada & Agrônoma</p>
                  <p className="mt-0.5 text-[11px] text-[#786b61]">
                    Visão técnica integrada do Direito e do Campo
                  </p>
                </div>
                <div className="rounded-lg border border-[#dfbeaa]/60 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#18130f]">Atendimento Próximo</p>
                  <p className="mt-0.5 text-[11px] text-[#786b61]">
                    Comunicação direta, transparente e humanizada
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#28211b] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                  <span>Sede na R. José de Oliveira, 40 · Raul Soares - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                  <span>Nota 5,0 ★ unânime no Google com 22 avaliações reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                  <span>Contato direto pelo WhatsApp com a Dra. Daiana Paiva</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                  <span>Atendimento presencial em MG e digital em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Daiana Paiva! Gostaria de uma consulta para analisar meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0a0908]" /> Falar com a Dra. Daiana Paiva
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4a4038] transition-colors hover:text-[#8a4f25]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 3 [MODO ESCURO] - Pilares de Atuação / Serviços Especializados */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#ce9568]/25 bg-[#0e0c0b] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                theme="dark"
                eyebrow="PILARES DE ATUAÇÃO JURÍDICA ESPECIALIZADA"
                description="Soluções jurídicas preventivas e contenciosas com o mais alto rigor técnico, linguagem clara e foco na resolução eficiente do seu problema."
              >
                Áreas de especialidade para defender seus direitos em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e4be9c] via-[#dfa67b] to-[#fef7f0]">
                  Raul Soares, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#9e938a]">
                Clique em uma área de atuação abaixo para conferir o detalhamento completo dos serviços e solicitar atendimento no WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#ce9568]/30 bg-[#151310] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#dfa67b] hover:shadow-gold sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#ce9568]/40 bg-[#0a0908] text-[#dfa67b] shadow-xs transition-colors group-hover:bg-[#ce9568] group-hover:text-[#0a0908] group-hover:border-[#e4be9c]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#ce9568]/40 group-hover:text-[#dfa67b]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#ce9568]/30 bg-[#0a0908] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#e4be9c] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.42rem] leading-tight text-white group-hover:text-[#e4be9c] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#dcd4ce]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfa67b] hover:text-white"
                    >
                      Ver detalhes e atuação{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4 [MODO CLARO] - Por Que Escolher / Diferenciais + Instagram - Linen Cream */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#dfbeaa]/40 bg-[#f7f3ee] py-20 text-[#18130f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="DUPLA QUALIFICAÇÃO, ÉTICA & ATENDIMENTO PERSONALIZADO"
                description="Quando o seu patrimônio, sua família ou suas terras estão em jogo, você precisa de um atendimento técnico, transparente e que realmente se importa com o seu resultado."
              >
                Por que confiar suas causas à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#91572c] via-[#b0764c] to-[#78431e]">
                  Dra. Daiana Paiva?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Daiana Paiva! Gostaria de conversar para entender melhor como funciona o atendimento."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#0a0908]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Autoridade Única - Advogada e Agrônoma */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dfbeaa]/70 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#b0764c] hover:shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfbeaa] bg-[#f4ebe1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8a4f25]">
                      <Wheat size={14} /> Dupla Especialização Técnica
                    </span>
                    <span className="text-xs font-semibold text-[#8a4f25]">
                      Diferencial Exclusivo
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#18130f] sm:text-[1.75rem]">
                    Visão Agronômica e Jurídica Integrada
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a4038]">
                    A maioria dos advogados conhece as leis, mas desconhece a realidade física e prática das lavouras, das divisas rurais, do manejo ambiental e da documentação do produtor. A Dra. Daiana Paiva une o olhar de engenheira agrônoma com o domínio do direito, trazendo soluções precisas e sem intermediários para questões do campo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#28211b]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                      <span>Análise técnica aprofundada de perícias, laudos ambientais e mapas topográficos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                      <span>Defesas eficientes contra autuações ambientais e desembargos de áreas produtivas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                      <span>Contratos rurais e regularizações fundiárias estruturadas com respaldo técnico</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfbeaa]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Daiana Paiva! Gostaria de consultar sobre demandas de Agronegócio ou Direito Ambiental."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfbeaa] bg-[#fcfaf7] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#18130f] transition-all hover:border-[#8a4f25] hover:bg-[#18130f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar sobre Demandas Rurais & Ambientais
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Acolhimento, Clareza & Eficiência */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dfbeaa]/70 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#b0764c] hover:shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfbeaa] bg-[#f4ebe1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8a4f25]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Ágil
                    </span>
                    <span className="text-xs font-semibold text-[#8a4f25]">
                      5,0 ★ no Google
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#18130f] sm:text-[1.75rem]">
                    Linguagem Acessível, Sem Juridiquês e Foco em Resultados
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a4038]">
                    Como evidenciado nos depoimentos de clientes no Google, o atendimento da Dra. Daiana se destaca pela paciência em ouvir, clareza para explicar cada etapa e resolução rápida. Seja em um inventário familiar delicado ou na busca por uma aposentadoria justa no INSS, você recebe acolhimento sincero e firmeza profissional.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#28211b]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                      <span>Atendimento próximo e canal direto pelo WhatsApp com a advogada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                      <span>Inventários em cartório e judiciais conduzidos com total transparência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8a4f25]" />
                      <span>Comprovação rigorosa de tempo rural e concessão segura de benefícios no INSS</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfbeaa]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Daiana Paiva! Gostaria de consultar sobre Inventário, Família ou Benefício do INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfbeaa] bg-[#fcfaf7] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#18130f] transition-all hover:border-[#8a4f25] hover:bg-[#18130f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar sobre Inventário, Família ou INSS
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>

            {/* Instagram Spotlight & Creator Banner in Light Mode */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#dfbeaa] bg-white p-6 shadow-md sm:p-8 md:flex-row"
            >
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="relative size-16 shrink-0 rounded-full border-2 border-[#b0764c] p-0.5 shadow-md">
                  <div className="relative size-full overflow-hidden rounded-full">
                    <Image
                      src={FOTO_HERO_SRC}
                      alt="Dra. Daiana Paiva no Instagram"
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <span className="font-serif text-lg font-bold text-[#18130f]">@dra_daiana_paiva</span>
                    <span className="rounded-full border border-[#dfbeaa] bg-[#f4ebe1] px-2.5 py-0.5 text-[10px] font-bold text-[#8a4f25]">
                      Criadora de Conteúdo Digital
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#18130f]">
                    Descomplico o Direito Ambiental e o Agronegócio • Direito das Famílias • Benefícios INSS
                  </p>
                  <p className="mt-1 text-xs text-[#54483e]">
                    Acompanhe vídeos explicativos, orientações práticas sobre leis do campo, regularização de imóveis, partilha de bens e benefícios do INSS diretamente no perfil oficial.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-[#f8e5d3]/85 bg-gradient-to-r from-[#b0764c] via-[#e4be9c] to-[#b0764c] px-6 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0a0908] shadow-[0_4px_16px_rgba(206,149,104,0.35),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:scale-105 active:scale-100"
              >
                <InstagramIcon size={16} className="text-[#0a0908]" /> Seguir no Instagram <ArrowUpRight size={14} className="text-[#0a0908]" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 5 [MODO ESCURO] - Método de Atendimento em 3 Etapas */}
        <section className="relative overflow-hidden border-t border-[#ce9568]/25 bg-[#0a0908] py-20 text-[#fbf8f5] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#ce9568]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#dfa67b]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO FUNCIONA O ATENDIMENTO"
                description="Um processo claro, ético e organizado para você ter tranquilidade do início ao desfecho do seu caso."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e4be9c] via-[#dfa67b] to-[#fef7f0]">
                  proteger seus direitos e o patrimônio da sua família.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#ce9568]/35 bg-[#151310] p-6 font-serif text-base italic leading-7 text-[#fbf8f5] shadow-card">
                &ldquo;Nosso propósito é descomplicar o Direito e oferecer um atendimento com o máximo zelo, responsabilidade e empatia. Cuidamos do seu caso como se fosse nosso, buscando sempre a solução mais célere, segura e justa.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfa67b]">
                  — Dra. Daiana Paiva · OAB/MG 211.743
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#ce9568]/25"
            >
              {[
                [
                  "01",
                  "Contato Inicial & Escuta Atenta",
                  "Envie uma mensagem pelo WhatsApp ou agende uma reunião presencial. Analisamos detalhadamente seus documentos e a sua situação de forma acolhedora e sigilosa.",
                ],
                [
                  "02",
                  "Diagnóstico Jurídico & Estratégia Personalizada",
                  "Apresentamos um plano de ação claro, com estimativa realista de prazos, custos e as melhores alternativas extrajudiciais ou judiciais cabíveis.",
                ],
                [
                  "03",
                  "Execução Ágil & Acompanhamento Próximo",
                  "Condução técnica vigorosa perante cartórios, órgãos ambientais, INSS ou tribunais, com informações regulares e canal aberto para tirar todas as dúvidas.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfa67b]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#dcd4ce]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 6 [MODO CLARO] - Avaliações / Depoimentos Reais no Google Meu Negócio - Alabaster */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#dfbeaa]/40 bg-[#fcf9f6] py-20 text-[#18130f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira as opiniões de quem confiou suas causas à Dra. Daiana Paiva em Raul Soares - MG e em toda a região."
              >
                Nota máxima 5,0 ★ com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#91572c] via-[#b0764c] to-[#78431e]">
                  22 avaliações no Google pela competência, ética e dedicação.
                </span>
              </Heading>

              {/* Verified Google Badge Card in Light Mode */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#dfbeaa] bg-white p-5 shadow-md sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#dfbeaa]/80 bg-[#f7f2eb] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#18130f]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#d98236]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#d98236] text-[#d98236]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4a4038]">
                    Daiana Paiva - Advocacia Especializada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8a4f25] transition-colors hover:text-[#18130f]"
                  >
                    22 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid in Light Mode */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#dfbeaa]/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b0764c] hover:shadow-xl sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#d98236]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d98236] text-[#d98236]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#dfbeaa] bg-[#f7f2eb] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#8a4f25] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#2c241e]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#dfbeaa]/40 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfbeaa] bg-[#f7f2eb] font-serif text-sm font-bold text-[#8a4f25] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-bold text-[#18130f]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#786b61]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags in Light Mode */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#dfbeaa]/40 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Raul Soares - MG",
                  "Engenheira Agrônoma",
                  "Direito do Agronegócio",
                  "Direito Ambiental Rural",
                  "Inventário & Partilha de Bens",
                  "Benefícios do INSS & Aposentadoria",
                  "Nota Máxima 5,0 ★ no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfbeaa] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#2c241e] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#8a4f25]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8a4f25] transition-colors hover:text-[#18130f]"
              >
                Ver Todas as 22 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7 [MODO ESCURO] - Contato & Localização da Sede em Raul Soares - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#ce9568]/25 bg-[#0a0908] py-20 text-[#fbf8f5] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="CONTATO & AGENDAMENTO DE CONSULTA"
                description="Entre em contato diretamente pelo WhatsApp para agendar um atendimento presencial ou uma consulta jurídica online com sigilo e rapidez."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e4be9c] via-[#dfa67b] to-[#fef7f0]">
                  atender você com atenção e excelência técnica.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Daiana Paiva! Gostaria de agendar um atendimento com a senhora."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#0a0908]" /> Falar no WhatsApp com a Dra. Daiana
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#dcd4ce]">
                  Atendimento telefônico e WhatsApp:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#dcd4ce]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dfa67b]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Atendimento
                    </p>
                    <p className="mt-0.5 text-[#e4be9c] font-bold">
                      Segunda a Sexta-feira: 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#9e938a]">
                      Atendimento presencial em Raul Soares - MG e consultas agendadas via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#dfa67b]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#dfa67b]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#dfa67b]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#dfa67b] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#dfa67b]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#dfa67b] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dfa67b]"
                  />
                  <div>
                    <span className="text-white">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#dfa67b] hover:underline"
                    >
                      Abrir no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#ce9568]/35 bg-[#151310] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b0764c] via-[#dfa67b] to-[#e4be9c]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e4be9c]">
                  Escritório em Raul Soares - MG
                </p>
                <div className="relative h-[68px] w-[260px] sm:h-[78px] sm:w-[310px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Daiana Paiva - Advocacia Especializada"
                    fill
                    unoptimized
                    sizes="310px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office presentation photo */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#ce9568]/30 bg-[#0a0908] shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Daiana Paiva — Advocacia Especializada em Raul Soares - MG"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Acolhedor, Moderno e Reservado</p>
                  <p className="text-[10px] text-stone-300">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#dcd4ce]">
                <strong className="font-semibold text-white">
                  Daiana Paiva - Advocacia Especializada
                </strong>
                <br />
                {LAWYER_TITLE}
                <br />
                Atendimento presencial em Raul Soares, Zona da Mata, Rio Doce e todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#ce9568]/25 bg-[#0a0908] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e4be9c]">
                  Atendimento & Localização
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#dcd4ce]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-[#e4be9c]">
                    Segunda a Sexta (08h às 18h)
                  </span>
                  <span>WhatsApp & Consultas</span>
                  <span className="text-right font-medium text-[#dfa67b]">
                    (31) 98258-2001
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-white">R. José de Oliveira, 40</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#dfa67b]">5,0 ★ (22 avaliações)</span>
                  <span>Atuação Regional</span>
                  <span className="text-right text-white">MG & Atendimento Online Nacional</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#ce9568]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#9e938a]">
                  Atendimento sob estrito sigilo profissional e conformidade ética
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Daiana Paiva! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ce9568]/50 bg-[#1a1714] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#dfa67b] hover:bg-[#ce9568] hover:text-[#0a0908]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#ce9568]/25 bg-gradient-to-r from-[#0a0908] via-[#151310] to-[#0a0908] px-5 py-14 text-[#fbf8f5] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4be9c]">
                <Sparkles size={13} /> DAIANA PAIVA · ADVOCACIA ESPECIALIZADA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica especializada para suas terras, sua família ou seu benefício?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Daiana Paiva! Gostaria de uma consulta jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#f8e5d3]/85 bg-gradient-to-r from-[#b0764c] via-[#e4be9c] to-[#b0764c] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#0a0908] shadow-[0_8px_24px_-4px_rgba(206,149,104,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#ce9568] hover:via-[#f8e5d3] hover:to-[#ce9568] hover:shadow-[0_12px_32px_rgba(223,166,123,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#0a0908]" /> Iniciar Atendimento{" "}
              <ArrowUpRight size={15} className="text-[#0a0908]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Noir */}
        <footer className="border-t border-[#ce9568]/25 bg-[#0a0908] px-5 py-14 text-[#fbf8f5] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Daiana Paiva Advocacia Especializada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[270px] sm:h-[92px] sm:w-[320px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Daiana Paiva Advocacia Especializada"
                    fill
                    unoptimized
                    sizes="320px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9e938a]">
                ⚖️ Advocacia com rigor técnico, ética inabalável e atendimento humanizado. Foco especializado em Direito do Agronegócio e Ambiental, Família e Sucessões, e Benefícios Previdenciários (INSS) em Raul Soares - MG e para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#dfa67b]">
                Dra. Daiana Paiva — Advogada (OAB/MG 211.743) & Engenheira Agrônoma
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4be9c]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#dcd4ce]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4be9c]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#dcd4ce]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Daiana Paiva! Gostaria de atendimento."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-white"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#e4be9c] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#dfa67b]" /> Atendimento de Segunda a Sexta, 08h às 18h
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#ce9568]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DAIANA PAIVA ADVOCACIA ESPECIALIZADA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button - Luxury Concierge Jewel */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Daiana Paiva! Gostaria de atendimento pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Daiana Paiva"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#dfa67b]/80 bg-gradient-to-b from-[#1a1714] via-[#12100e] to-[#0a0908] text-[#eed2b9] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(206,149,104,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#f8e5d3] hover:shadow-[0_10px_35px_rgba(223,166,123,0.6)] focus:outline-none focus:ring-4 focus:ring-[#dfa67b]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfa67b] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#0a0908] bg-[#f8e5d3]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#f8e5d3] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#ce9568]/60 bg-[#0a0908]/95 px-3.5 py-1.5 text-xs font-semibold text-[#fbf8f5] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#e4be9c]">Atendimento no WhatsApp</span> · Dra. Daiana Paiva
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#ce9568]/40 bg-[#12100e] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#fbf8f5]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#ce9568]/30 bg-[#1a1714] text-[#fbf8f5] transition-colors hover:border-[#dfa67b] hover:text-[#e4be9c]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#ce9568]/40 bg-[#0a0908] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Brasão Daiana Paiva Advocacia"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ADVOCACIA ESPECIALIZADA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfa67b] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#dcd4ce]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#ce9568]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e4be9c]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#dcd4ce]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfa67b]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} className="text-[#0a0908]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#9e938a] transition-colors hover:text-white"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
