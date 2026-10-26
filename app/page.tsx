"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Users,
  ShieldCheck,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533998733957";
const PHONE_DISPLAY = "(33) 99873-3957";
const EMAIL_CONTACT = "contato@carvalhoeperigolo.adv.br";
const INSTAGRAM_URL = "https://instagram.com/carvalhoeperigolo/";
const INSTAGRAM_HANDLE = "@carvalhoeperigolo";
const FIRM_NAME = "Carvalho & Perígolo Advogados";

const ADDRESS_TEXT = "Av. Gov. Valadares, 151 - Centro, Simonésia - MG, 36930-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Carvalho+%26+Per%C3%ADgolo+Advogados+Av+Gov+Valadares+151+Simonesia+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Carvalho+%26+Per%C3%ADgolo+Advogados%0ASimon%C3%A9sia+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_MONICA_SRC = "/dra-monica.jpg";
const FOTO_ISAAC_SRC = "/dr-isaac.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de consultar sobre atendimento jurídico na Carvalho & Perígolo Advogados.";
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
    id: "direito-notarial-registral-imobiliario",
    title: "Direito Notarial, Registral & Regularização Imobiliária",
    icon: Building2,
    tag: "Usucapião Extrajudicial · Regularização de Imóveis · Escrituras & Registros",
    summary:
      "Segurança jurídica definitiva para o seu patrimônio imobiliário rural e urbano. Regularização fundiária, usucapião direto em cartório, retificação de área, escrituras públicas e adjudicação compulsória.",
    details:
      "Com sólida pós-graduação e especialização pela FGV e pela FADILESTE em Direito Notarial e Registral, os sócios fundadores Dra. Mônica Perígolo e Dr. Isaac Carvalho dominam a fundo os trâmites dos Cartórios de Registro de Imóveis e de Notas. Transformamos a posse irregular em propriedade titulada com matrícula e registro definitivo, agregando valor e garantindo tranquilidade jurídica aos proprietários.",
    topics: [
      "Usucapião Extrajudicial direto em Cartório de Registro de Imóveis (célere, sem necessidade de processo judicial)",
      "Usucapião Judicial para imóveis rurais e urbanos com histórico documental complexo",
      "Retificação administrativa e judicial de áreas, metragens e inserção de confrontações perimetrais",
      "Regularização de loteamentos, desmembramentos, certidões e cancelamento de gravames/hipotecas",
      "Adjudicação Compulsória Extrajudicial para contratos particulares de gaveta com quitação comprovada",
      "Due Diligence imobiliária e auditoria registral preventiva na compra e venda de fazendas e imóveis",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a Carvalho & Perígolo Advogados sobre Regularização de Imóvel, Usucapião ou Direito Notarial e Registral.",
  },
  {
    id: "inventarios-partilha-sucessoes",
    title: "Inventários, Partilha de Bens & Sucessões",
    icon: Users,
    tag: "Inventário em Cartório & Judicial · Planejamento Familiar · Testamentos",
    summary:
      "Agilidade e sensibilidade para resolver inventários e proteger o patrimônio que sua família construiu. Inventários extrajudiciais rápidos em cartório, partilhas judiciais estratégicas e planejamento sucessório.",
    details:
      "O inventário não precisa ser um processo demorado e desgastante. A Carvalho & Perígolo Advogados prioriza a via extrajudicial em cartório quando há consenso entre os herdeiros, e conduz inventários judiciais com rigor técnico, mediação humanizada e inteligência tributária para minimizar os custos com ITCMD e preservar os vínculos familiares.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: procedimento rápido, descomplicado e seguro",
      "Inventário Judicial e partilha de bens com composição amigável ou defesa firme do quinhão hereditário",
      "Planejamento Sucessório Familiar: doações em vida com reserva de usufruto e cláusulas protetivas",
      "Elaboração de testamentos públicos e estruturas societárias para proteção patrimonial de famílias e produtores",
      "Sobrepartilha de bens sonegados ou descobertos após o encerramento do inventário",
      "Alinhamento estratégico e mediação preventiva de conflitos sucessórios entre herdeiros",
    ],
    whatsAppText:
      "Olá! Gostaria de orientações sobre Inventário, Partilha de Bens ou Planejamento Sucessório com o escritório Carvalho & Perígolo.",
  },
  {
    id: "direito-publico-defesas-administrativas",
    title: "Direito Público & Defesas Administrativas",
    icon: Scale,
    tag: "Especialização FGV · Concursos · Licitações · Servidores Públicos",
    summary:
      "Assessoria especializada com a chancela FGV em Direito Público. Atuação técnica em defesas administrativas, concursos públicos, licitações, improbidade e defesa de direitos de servidores e cidadãos.",
    details:
      "Com a pós-graduação e especialização da Dra. Mônica Perígolo Magalhães pela Fundação Getúlio Vargas (FGV) em Direito Público, o escritório oferece uma defesa estratégica contra atos arbitrários ou desproporcionais da Administração Pública, atuando perante prefeituras, câmaras, secretarias e autarquias com precisão técnica e recursos eficazes.",
    topics: [
      "Defesas e recursos administrativos contra sanções, autuações e notificações de órgãos públicos",
      "Ações judiciais e Mandados de Segurança contra ilegalidades em concursos públicos e nomeações",
      "Defesa de servidores públicos civis e militares em Processos Administrativos Disciplinares (PAD)",
      "Consultoria jurídica e acompanhamento técnico em licitações e contratos com o poder público",
      "Ações ordinárias para concessão, reenquadramento e cobrança de direitos remuneratórios de servidores",
      "Análise de constitucionalidade, improbidade administrativa e consultoria regulatória municipal",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a Carvalho & Perígolo Advogados sobre uma demanda de Direito Público ou Administrativo.",
  },
  {
    id: "direito-familia-solucoes-humanizadas",
    title: "Direito de Família & Soluções Patrimoniais",
    icon: HeartHandshake,
    tag: "Divórcio Ágil · Pensão Alimentícia · Guarda · Dissolução de União Estável",
    summary:
      "Acolhimento empático e discrição absoluta para proteger o que mais importa. Divórcios em cartório ou judiciais, união estável, partilha de bens conjugais, pensão alimentícia e guarda de filhos.",
    details:
      "Questões familiares exigem equilíbrio entre firmeza jurídica e respeito à dignidade de cada pessoa. A equipe da Carvalho & Perígolo Advogados atua para pacificar conflitos, garantir a justa partilha dos bens acumulados no matrimônio ou união estável, e resguardar o bem-estar e o sustento dos filhos menores com soluções rápidas e humanizadas.",
    topics: [
      "Divórcio Extrajudicial em Cartório de Notas: solução ágil, sigilosa e amigável",
      "Divórcio Judicial consensual ou litigioso com partilha equilibrada de imóveis, veículos e negócios",
      "Reconhecimento e dissolução de união estável com resguardo da meação e direitos patrimoniais",
      "Ação de alimentos: fixação justa, revisão, exoneração e execução de pensão alimentícia",
      "Definição de guarda compartilhada, plano de convivência parental e proteção integral dos filhos",
      "Pacto antenupcial, contrato de convivência e assessoria preventiva sobre regimes de bens",
    ],
    whatsAppText:
      "Olá! Gostaria de atendimento reservado com a Carvalho & Perígolo Advogados sobre Divórcio, Guarda ou Família.",
  },
  {
    id: "direito-previdenciario-inss-rural-urbano",
    title: "Direito Previdenciário · INSS Rural & Urbano",
    icon: Award,
    tag: "Aposentadoria Rural · Tempo de Roça · Auxílio-Doença & BPC/LOAS",
    summary:
      "Garantia do benefício merecido a quem trabalhou e contribuiu uma vida inteira. Aposentadorias do trabalhador rural (segurado especial), averbação de tempo de lavoura, benefícios por incapacidade e LOAS.",
    details:
      "No Leste de Minas Gerais, muitos trabalhadores rurais e urbanos têm seus direitos negados ou postergados pelo INSS por falhas na comprovação documental histórica. A equipe reúne certidões de nascimento, notas fiscais de produtor, contratos rurais e testemunhas para comprovar o direito e obter a concessão com recebimento dos retroativos.",
    topics: [
      "Aposentadoria por Idade Rural do segurado especial (pequenos agricultores, meeiros, diaristas e arrendatários)",
      "Averbação e contagem de tempo de serviço rural antigo para antecipar a Aposentadoria Urbana",
      "Aposentadoria por Idade Urbana, por Tempo de Contribuição, Especial e da Pessoa com Deficiência",
      "Concessão e restabelecimento judicial de Auxílio por Incapacidade Temporária (auxílio-doença) e Invalidez",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos com 65+ anos e pessoas com deficiência em vulnerabilidade",
      "Pensão por morte urbana e rural, salário-maternidade e planejamento previdenciário completo",
    ],
    whatsAppText:
      "Olá! Gostaria de uma análise previdenciária com a Carvalho & Perígolo Advogados sobre aposentadoria ou benefício do INSS.",
  },
  {
    id: "consultoria-civel-contratos-prevencao",
    title: "Consultoria Cível, Contratos & Mediação",
    icon: ShieldCheck,
    tag: "Advocacia Preventiva · Contratos Blindados · Mediação Extrajudicial",
    summary:
      "Segurança jurídica contínua para prevenir litígios e proteger seus negócios. Elaboração de contratos seguros, cobranças estratégicas, mediações amigáveis e assessoria cível personalizada.",
    details:
      "Evitar um litígio custoso é sempre mais inteligente do que remediar um processo arrastado por anos. O Dr. Isaac Carvalho e a Dra. Mônica Perígolo oferecem consultoria preventiva para pessoas físicas e empresas, blindando instrumentos contratuais e intermediando negociações com diplomacia, autoridade jurídica e foco no resultado.",
    topics: [
      "Elaboração e revisão detalhada de contratos civis, comerciais, agrários e imobiliários de alto padrão",
      "Mediação de conflitos e formalização de acordos extrajudiciais com força de título executivo",
      "Ações possessórias: reintegração de posse, manutenção e defesa contra turbação de divisas",
      "Cobrança extrajudicial e judicial estratégica de títulos, cheques, notas promissórias e dívidas",
      "Ações indenizatórias por danos materiais, danos morais e descumprimento de obrigações contratuais",
      "Assessoria jurídica consultiva mensal para empresários, comerciantes e produtores locais",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a Carvalho & Perígolo Advogados sobre elaboração de contrato ou consultoria cível preventiva.",
  },
];

interface ClientReview {
  name: string;
  reviewerTag: string;
  badge: string;
  rating: number;
  content: string;
  response?: string;
}

const clientReviews: ClientReview[] = [
  {
    name: "Pollyana Fileno",
    reviewerTag: "7 avaliações no Google",
    badge: "Competência e Atenção",
    rating: 5,
    content:
      "Excelente escritório de advocacia! Fui muito bem atendida desde o primeiro contato. A equipe demonstrou profissionalismo, competência e atenção em todas as etapas.. Recomendo pelos serviços prestados e pelo compromisso com seus clientes.",
    response:
      "Olá, Pollyana! Ficamos satisfeitos em saber que o atendimento prestado por nossa equipe correspondeu às suas expectativas. Trabalhamos com dedicação, responsabilidade e respeito. Estamos à disposição.",
  },
  {
    name: "Bruno Falcão",
    reviewerTag: "10 avaliações · 2 fotos no Google",
    badge: "Advogado Mais Atualizado",
    rating: 5,
    content:
      "O Dr. Isaac é o advogado mais atualizado da região. Atendimento com ética e respeito.",
    response:
      "Olá, Bruno! Agradecemos sua avaliação e as palavras de reconhecimento. Reafirmamos o nosso compromisso em prestar um atendimento pautado pela ética, respeito e constante aperfeiçoamento profissional. Somos gratos pela confiança em nossa equipe.",
  },
  {
    name: "Thaisa Bacellar",
    reviewerTag: "4 avaliações · 1 foto no Google",
    badge: "Advogado de Confiança",
    rating: 5,
    content:
      "Excelente escritório, atenciosos e com ótimo atendimento. Isaac é nosso advogado de confiança",
  },
  {
    name: "Stefane Paula",
    reviewerTag: "1 avaliação no Google",
    badge: "Educado e Eficaz",
    rating: 5,
    content:
      "Assistente muito educado e eficaz, Isaac é um ótimo advogado, nada a reclamar. Muito bom!!",
    response:
      "Olá, Stefane. Agradecemos por suas palavras e ficamos satisfeitos em saber que o atendimento prestado por nossa equipe atendeu às suas expectativas. Ficamos gratos pela confiança, e nos colocamos à disposição.",
  },
  {
    name: "Durcineia Neves",
    reviewerTag: "10 avaliações · 3 fotos no Google",
    badge: "Atenciosos e Simpáticos",
    rating: 5,
    content:
      "Sou cliente do escritório e estou satisfeita com o desempenho do trabalho dos profissionais que atendem são muito atenciosos e simpáticos!",
    response:
      "Olá, Durcinéia! Ficamos felizes em saber que você está satisfeita com nosso trabalho e com o atendimento prestado por nossa equipe. Somos gratos pela avaliação e por compartilhar sua experiência.",
  },
  {
    name: "Iandra Fileno",
    reviewerTag: "3 avaliações · 2 fotos no Google",
    badge: "Transparência e Dedicação",
    rating: 5,
    content:
      "Atendimento excelente, com transparência e dedicação. Super recomendo!",
  },
  {
    name: "Patricia Garcia",
    reviewerTag: "1 avaliação no Google",
    badge: "Profissionais Excelentes",
    rating: 5,
    content:
      "Profissionais excelentes! Atenciosos e competentes.",
  },
  {
    name: "Anne Maciel",
    reviewerTag: "4 avaliações no Google",
    badge: "Gratidão e Reconhecimento",
    rating: 5,
    content:
      "São ótimos, os melhores, isso falo com gratidão 🙏🏽",
  },
  {
    name: "Maria Eduarda Fileno Vieira Lopes",
    reviewerTag: "1 avaliação no Google",
    badge: "Ótimos Profissionais",
    rating: 5,
    content:
      "Ótimos profissionais 👏👏",
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
          isLight ? "text-[#1a1114]" : "text-[#fbf6f4]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            isLight ? "text-[#544349]" : "text-[#ded4cf]"
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
      <main className="overflow-hidden bg-[#0b0708] text-[#fbf6f4] selection:bg-[#c96a56] selection:text-[#0b0708]">
        {/* Navigation Bar - Warm Rose-Bronze, Metallic Copper & Deep Obsidian */}
        <header className="sticky top-0 z-40 border-b border-[#c96a56]/25 bg-[#0b0708]/95 backdrop-blur-xl shadow-card">
          <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[92px] lg:h-[98px] xl:h-[102px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Carvalho & Perígolo Advogados - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[34px] w-[160px] sm:h-[42px] sm:w-[196px] lg:h-[48px] lg:w-[224px] xl:h-[52px] xl:w-[244px]">
                <Image
                  src={LOGO_HORIZONTAL_SRC}
                  alt="Carvalho & Perígolo Advogados"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 244px"
                  className="object-contain object-left drop-shadow-[0_2px_14px_rgba(228,142,120,0.3)]"
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
              <a className="nav-link" href="#socios">
                Os Sócios
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
                aria-label="Avaliações da Carvalho & Perígolo Advogados no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#c96a56]/30 bg-[#130c0e] text-[#ded4cf] transition-all hover:border-[#e48e78] hover:bg-[#1a1013] hover:text-white shadow-xs"
                title="5,0 ★ no Google (19 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Carvalho & Perígolo Advogados"
                className="grid size-10 place-items-center rounded-lg border border-[#c96a56]/30 bg-[#130c0e] text-[#ded4cf] transition-all hover:border-[#e48e78] hover:bg-[#1a1013] hover:text-white shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Carvalho & Perígolo Advogados"
                className="grid size-10 place-items-center rounded-lg border border-[#c96a56]/30 bg-[#130c0e] text-[#ded4cf] transition-all hover:border-[#e48e78] hover:bg-[#1a1013] hover:text-white shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Carvalho & Perígolo Advogados"
                className="grid size-10 place-items-center rounded-lg border border-[#c96a56]/30 bg-[#130c0e] text-[#ded4cf] transition-all hover:border-[#e48e78] hover:bg-[#1a1013] hover:text-white shadow-xs"
                title="Fale no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de consultar sobre atendimento com a Carvalho & Perígolo Advogados."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Fale Conosco <ArrowUpRight size={14} className="text-[#0b0708]" />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#c96a56]/40 bg-[#130c0e] text-[#fbf6f4] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#c96a56]/25 bg-[#130c0e] px-6 text-[#fbf6f4] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Os Sócios Fundadores", "#socios"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#ded4cf] hover:text-[#fab599]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#fdeade]/85 bg-gradient-to-r from-[#964239] via-[#fab599] to-[#964239] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0b0708] shadow-[0_4px_16px_rgba(201,106,86,0.4),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá! Gostaria de consultar sobre um caso com a Carvalho & Perígolo Advogados."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} className="text-[#0b0708]" /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c96a56]/40 bg-[#1a1013] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fbf6f4] transition-all hover:border-[#e48e78]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (19 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1 [MODO ESCURO] - Hero Section - Warm Rose-Bronze Aura, Metallic Contrast & Authority */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c96a56]/25 bg-gradient-to-b from-[#0b0708] via-[#120a0d] to-[#0b0708]"
        >
          {/* Subtle warm rose-copper lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c96a56]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#e48e78]/8 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[750px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c96a56]/50 bg-[#1a1013]/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fab599] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e48e78] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#fdeade]"></span>
                </span>
                <span>ADVOCACIA ESPECIALIZADA · SIMONÉSIA & LESTE DE MINAS GERAIS</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#fbf6f4] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Rigor técnico, ética e dedicação para proteger sua família,{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fab599] via-[#e48e78] to-[#fff5f0]">
                  seu patrimônio e seus direitos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#ded4cf] sm:text-base sm:leading-8"
              >
                Fundada pela <strong className="font-semibold text-white">Dra. Mônica Perígolo Magalhães</strong> e pelo <strong className="font-semibold text-white">Dr. Isaac Augusto de Carvalho</strong>, a <strong className="font-semibold text-white">{FIRM_NAME}</strong> une alta especialização em <strong className="font-semibold text-white">Direito Notarial e Registral, Direito Público (FGV), Família, Sucessões e Previdenciário</strong> com atendimento humanizado, ágil e transparente. Sede em Simonésia - MG e consultoria jurídica para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a equipe da Carvalho & Perígolo Advogados no WhatsApp."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0b0708]" /> Falar no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c96a56]/45 bg-[#130c0e]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fbf6f4] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#fdeade] hover:bg-[#1a1013] hover:text-white"
                >
                  Conhecer Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#e48e78]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#c96a56]/25 pt-5 text-xs text-[#9c8e87]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbf6f4] transition-colors hover:text-[#fab599]"
                >
                  <Star size={14} className="fill-[#e48e78] text-[#e48e78]" /> 5,0 ★ no Google (19 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#fbf6f4]">
                  <Award size={14} className="text-[#e48e78]" /> Especialistas Notariais & Registrais
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbf6f4] transition-colors hover:text-[#fab599]"
                >
                  <MapPin size={14} className="text-[#e48e78]" /> Av. Gov. Valadares, 151 · Centro, Simonésia - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Duo Founders Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] xl:max-w-[510px] lg:ml-auto lg:mr-0"
            >
              {/* Composite Duo Card */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#c96a56]/50 bg-[#130c0e] p-3 shadow-2xl ring-1 ring-[#e48e78]/35">
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Dra. Mônica */}
                  <div className="group relative aspect-[4/5.4] overflow-hidden rounded-xl border border-[#c96a56]/40 bg-[#0b0708]">
                    <Image
                      src={FOTO_MONICA_SRC}
                      alt="Dra. Mônica Perígolo Magalhães — Sócia Fundadora"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0708] via-[#0b0708]/75 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <p className="font-serif text-xs sm:text-sm font-bold text-white">
                        Dra. Mônica Perígolo
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-[#fab599]">
                        Sócia Fundadora · FGV
                      </p>
                    </div>
                  </div>

                  {/* Dr. Isaac */}
                  <div className="group relative aspect-[4/5.4] overflow-hidden rounded-xl border border-[#c96a56]/40 bg-[#0b0708]">
                    <Image
                      src={FOTO_ISAAC_SRC}
                      alt="Dr. Isaac Augusto de Carvalho — Sócio Fundador"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0708] via-[#0b0708]/75 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <p className="font-serif text-xs sm:text-sm font-bold text-white">
                        Dr. Isaac Carvalho
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-[#fab599]">
                        Sócio Fundador · FADILESTE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[#c96a56]/25 px-2 pt-2.5">
                  <div className="flex items-center gap-2">
                    <div className="relative size-7 shrink-0 overflow-hidden rounded-md border border-[#c96a56]/40 bg-[#0b0708]">
                      <Image
                        src={LOGO_SYMBOL_SRC}
                        alt="Monograma Carvalho & Perígolo"
                        fill
                        unoptimized
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-xs font-bold text-white">
                        Carvalho & Perígolo Advogados
                      </p>
                      <p className="text-[9px] text-[#cfc1ba]">
                        Av. Gov. Valadares, 151 · Centro, Simonésia - MG
                      </p>
                    </div>
                  </div>
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#c96a56]/60 bg-[#0b0708] text-[#fab599]">
                    <Scale size={15} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#c96a56]/50 bg-[#0b0708]/92 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#fab599] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM SIMONÉSIA · ATENDIMENTO EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c96a56]/60 bg-[#130c0e]/95 p-3 shadow-xl backdrop-blur-md transition-all hover:border-[#e48e78] hover:bg-[#1a1013] sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#e48e78]">
                      <Star size={12} className="fill-[#e48e78] text-[#e48e78]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#fab599]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#ded4cf]">
                  19 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c96a56]/25 bg-[#130c0e]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima unânime em 19 avaliações reais reconhecendo ética e competência",
              ],
              [
                "Especialização FGV & FADILESTE",
                "domínio técnico e aprofundado em Direito Notarial, Registral e Público",
              ],
              [
                "Atendimento Humanizado",
                "atenção aos detalhes, escuta empática e acompanhamento próximo em cada fase",
              ],
              [
                "Simonésia • Leste de MG",
                "sede física estruturada no Centro e assessoria jurídica digital para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c96a56]/25"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#fab599] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#ded4cf]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* DOBRA 2 [MODO CLARO] - Os Sócios Fundadores - Alabaster Cream & Metallic Rose-Bronze */}
        <section
          id="socios"
          className="scroll-mt-24 border-y border-[#dfbeaa]/40 bg-[#fcf8f6] py-20 text-[#1a1114] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#dfbeaa] bg-[#f7ede6] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#964239] shadow-xs">
                <span className="size-2 shrink-0 rounded-full bg-[#964239]" />
                <span>OS SÓCIOS FUNDADORES</span>
              </div>
              <h2 className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#1a1114] sm:text-4xl lg:text-[3.25rem]">
                Excelência acadêmica, vocação para a justiça e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#964239] via-[#c96a56] to-[#6e2524]">
                  compromisso absoluto com cada cliente.
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#544349]">
                Conheça a trajetória e os princípios que movem a <strong className="font-bold text-[#1a1114]">{FIRM_NAME}</strong>, combinando especialização notarial de ponta com um atendimento pautado pelo respeito e pela transparência.
              </p>
            </motion.div>

            {/* Duo Founders Cards */}
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              {/* Dra. Mônica Perígolo Magalhães */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className="group flex flex-col justify-between rounded-2xl border-2 border-[#dfbeaa] bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c96a56] hover:shadow-2xl sm:p-9"
              >
                <div>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="relative aspect-[4/5] w-full sm:w-[190px] shrink-0 overflow-hidden rounded-xl border-2 border-[#c96a56]/30 bg-[#f7ede6] shadow-md">
                      <Image
                        src={FOTO_MONICA_SRC}
                        alt="Dra. Mônica Perígolo Magalhães"
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="inline-block rounded-md border border-[#dfbeaa] bg-[#f7ede6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#964239]">
                        Sócia Fundadora
                      </span>
                      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#1a1114] sm:text-[1.75rem]">
                        Dra. Mônica Perígolo Magalhães
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#964239]">
                        Especialista em Direito Público & Direito Notarial e Registral (FGV)
                      </p>
                      <div className="mt-3 space-y-1.5 text-xs text-[#544349]">
                        <p className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#964239] shrink-0" />
                          <span>Graduada em Direito pelo Instituto Vianna Jr (2014)</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#964239] shrink-0" />
                          <span>Pós-graduada pela Fundação Getúlio Vargas — FGV (2016)</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#964239] shrink-0" />
                          <span>Atuação em Direito Notarial, Sucessões e Família</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-6 rounded-xl border-l-4 border-[#c96a56] bg-[#fcf8f6] p-4 text-[13px] italic leading-relaxed text-[#2c1d22]">
                    &ldquo;Escolhi esta profissão quando cursava a 7ª série, estudando a divisão dos três poderes. Tamanho é o meu amor e prontidão em defesa das causas que acredito. Deus preparou para eu ser auxiliadora do direito dos homens. O pilar é que: <strong>&lsquo;Enquanto houver vontade de lutar haverá esperança de vencer&rsquo; (Santo Agostinho).</strong>&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 border-t border-[#dfbeaa]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Mônica Perígolo! Gostaria de consultar sobre um caso com a senhora."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfbeaa] bg-[#fcf8f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1114] transition-all hover:border-[#964239] hover:bg-[#1a1114] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Mônica Perígolo
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Dr. Isaac Augusto de Carvalho */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-2xl border-2 border-[#dfbeaa] bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c96a56] hover:shadow-2xl sm:p-9"
              >
                <div>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="relative aspect-[4/5] w-full sm:w-[190px] shrink-0 overflow-hidden rounded-xl border-2 border-[#c96a56]/30 bg-[#f7ede6] shadow-md">
                      <Image
                        src={FOTO_ISAAC_SRC}
                        alt="Dr. Isaac Augusto de Carvalho"
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="inline-block rounded-md border border-[#dfbeaa] bg-[#f7ede6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#964239]">
                        Sócio Fundador
                      </span>
                      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#1a1114] sm:text-[1.75rem]">
                        Dr. Isaac Augusto de Carvalho
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#964239]">
                        Especialista em Direito Notarial e Registral (FADILESTE)
                      </p>
                      <div className="mt-3 space-y-1.5 text-xs text-[#544349]">
                        <p className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#964239] shrink-0" />
                          <span>Graduado em Direito pela Doctum Manhuaçu (2014)</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#964239] shrink-0" />
                          <span>Pós-graduado pela FADILESTE (2020)</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#964239] shrink-0" />
                          <span>Apontado por clientes como o advogado mais atualizado da região</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-6 rounded-xl border-l-4 border-[#c96a56] bg-[#fcf8f6] p-4 text-[13px] italic leading-relaxed text-[#2c1d22]">
                    &ldquo;Cursar direito foi como um sonho. Além de dar continuidade ao legado do meu pai, sempre me vi defendendo o direito do próximo, podendo auxiliar a outrem a partir do meu conhecimento. É gratificante. <strong>Nenhuma outra profissão me realizaria tanto.</strong>&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 border-t border-[#dfbeaa]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Isaac Carvalho! Gostaria de consultar sobre um caso com o senhor."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfbeaa] bg-[#fcf8f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1114] transition-all hover:border-[#964239] hover:bg-[#1a1114] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com o Dr. Isaac Carvalho
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* DOBRA 3 [MODO ESCURO] - Pilares de Atuação / Serviços Especializados */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#c96a56]/25 bg-[#0f090c] py-20 sm:py-28 lg:py-32"
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
                description="Soluções preventivas e contenciosas com alto rigor técnico notarial, linguagem clara e foco na resolução prática do seu problema."
              >
                Áreas de especialidade para proteger seus direitos em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fab599] via-[#e48e78] to-[#fff5f0]">
                  Simonésia, Leste de Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[280px] pb-1 text-xs leading-6 text-[#9c8e87]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c96a56]/30 bg-[#150d10] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e48e78] hover:shadow-gold sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c96a56]/40 bg-[#0b0708] text-[#fab599] shadow-xs transition-colors group-hover:bg-[#c96a56] group-hover:text-[#0b0708] group-hover:border-[#fdeade]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c96a56]/40 group-hover:text-[#fab599]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c96a56]/30 bg-[#0b0708] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fab599] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.42rem] leading-tight text-white group-hover:text-[#fab599] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#ded4cf]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fab599] hover:text-white cursor-pointer"
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

        {/* DOBRA 4 [MODO CLARO] - Diferenciais + Instagram - Linen Rose Cream */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#dfbeaa]/40 bg-[#f7f0eb] py-20 text-[#1a1114] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="RIGOR TÉCNICO, ÉTICA & ATENDIMENTO PERSONALIZADO"
                description="Quando o seu patrimônio, sua família ou seus direitos estão em jogo, você merece advogados que combinem conhecimento acadêmico de excelência com escuta atenta e respeito."
              >
                Por que escolher a{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#964239] via-[#c96a56] to-[#6e2524]">
                  Carvalho & Perígolo Advogados?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de conversar com a equipe da Carvalho & Perígolo Advogados."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#0b0708]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Domínio Notarial e Registral de Ponta */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dfbeaa]/70 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c96a56] hover:shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfbeaa] bg-[#f7ede6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#964239]">
                      <Building2 size={14} /> Especialistas Notariais & Registrais
                    </span>
                    <span className="text-xs font-semibold text-[#964239]">
                      FGV & FADILESTE
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a1114] sm:text-[1.75rem]">
                    Especialização Cartorária & Imobiliária
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#544349]">
                    Regularizar um imóvel ou conduzir um inventário exige domínio minucioso das normas da Corregedoria e da Lei de Registros Públicos. Na Carvalho & Perígolo, os dois sócios possuem pós-graduação na área, permitindo destravar escrituras, usucapiões e partilhas com máxima celeridade e total segurança jurídica.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2c1d22]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#964239]" />
                      <span>Regularizações extrajudiciais ágeis direto em Cartório de Registro de Imóveis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#964239]" />
                      <span>Inventários rápidos em cartório e blindagem sucessória familiar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#964239]" />
                      <span>Assessoria em Direito Público com especialização pela FGV</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfbeaa]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar sobre Regularização de Imóveis ou Inventário na Carvalho & Perígolo."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfbeaa] bg-[#fcf8f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1114] transition-all hover:border-[#964239] hover:bg-[#1a1114] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar sobre Imóveis ou Inventário
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Ética, Atualização & Atendimento Humanizado */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dfbeaa]/70 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c96a56] hover:shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfbeaa] bg-[#f7ede6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#964239]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Confiável
                    </span>
                    <span className="text-xs font-semibold text-[#964239]">
                      5,0 ★ no Google
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a1114] sm:text-[1.75rem]">
                    Transparência, Respeito e Proximidade
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#544349]">
                    Avaliações espontâneas de clientes destacam a ética, o aperfeiçoamento contínuo e a simpatia de toda a equipe. Aqui seu caso é tratado com zelo pessoal pelos próprios sócios, sem juridiquês hermético e com canal de comunicação ágil pelo WhatsApp para você acompanhar cada etapa.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2c1d22]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#964239]" />
                      <span>Reconhecido no Google como o escritório mais atualizado da região</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#964239]" />
                      <span>Atendimento empático desde o primeiro contato até o desfecho</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#964239]" />
                      <span>Sede estruturada em Simonésia e consultoria online com segurança</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfbeaa]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar sobre atendimento jurídico com a Carvalho & Perígolo Advogados."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfbeaa] bg-[#fcf8f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1114] transition-all hover:border-[#964239] hover:bg-[#1a1114] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Falar no WhatsApp com a Equipe
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>

            {/* Instagram Spotlight Banner */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#dfbeaa] bg-white p-6 shadow-md sm:p-8 md:flex-row"
            >
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="relative size-16 shrink-0 rounded-full border-2 border-[#c96a56] p-0.5 shadow-md">
                  <div className="relative size-full overflow-hidden rounded-full bg-[#0b0708]">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Carvalho & Perígolo no Instagram"
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <span className="font-serif text-lg font-bold text-[#1a1114]">{INSTAGRAM_HANDLE}</span>
                    <span className="rounded-full border border-[#dfbeaa] bg-[#f7ede6] px-2.5 py-0.5 text-[10px] font-bold text-[#964239]">
                      Canal Oficial no Instagram
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#1a1114]">
                    Direito Notarial & Registral • Sucessões & Família • Direito Público • Previdenciário
                  </p>
                  <p className="mt-1 text-xs text-[#544349]">
                    Acompanhe publicações, esclarecimentos jurídicos práticos sobre regularização de imóveis, inventários, partilha de bens e decisões dos tribunais diretamente no perfil oficial.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-[#fdeade]/85 bg-gradient-to-r from-[#964239] via-[#fab599] to-[#964239] px-6 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0b0708] shadow-[0_4px_16px_rgba(201,106,86,0.35),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:scale-105 active:scale-100"
              >
                <InstagramIcon size={16} className="text-[#0b0708]" /> Seguir no Instagram <ArrowUpRight size={14} className="text-[#0b0708]" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 5 [MODO ESCURO] - Método de Atendimento em 3 Etapas */}
        <section className="relative overflow-hidden border-t border-[#c96a56]/25 bg-[#0b0708] py-20 text-[#fbf6f4] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c96a56]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#e48e78]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO FUNCIONA O ATENDIMENTO"
                description="Um processo transparente, sigiloso e eficiente para você ter tranquilidade do início à conclusão do seu caso."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fab599] via-[#e48e78] to-[#fff5f0]">
                  proteger seus direitos e o patrimônio da sua família.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#c96a56]/35 bg-[#150d10] p-6 font-serif text-base italic leading-7 text-[#fbf6f4] shadow-card">
                &ldquo;Trabalhamos com dedicação, responsabilidade e respeito. Nosso compromisso é prestar um atendimento pautado pela ética e pelo constante aperfeiçoamento profissional, buscando sempre a solução mais segura e justa para nossos clientes.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#fab599]">
                  — Dra. Mônica Perígolo & Dr. Isaac Carvalho
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#c96a56]/25"
            >
              {[
                [
                  "01",
                  "Contato Inicial & Escuta Atenta",
                  "Envie uma mensagem pelo WhatsApp ou agende um atendimento presencial em Simonésia. Ouvimos sua demanda com empatia, analisamos os documentos e compreendemos seus objetivos.",
                ],
                [
                  "02",
                  "Diagnóstico Registral & Estratégia sob Medida",
                  "Apresentamos um parecer objetivo com as melhores alternativas — seja pela via extrajudicial em cartório ou pela via judicial —, indicando prazos realistas e custos envolvidos.",
                ],
                [
                  "03",
                  "Atuação Diligente & Acompanhamento Contínuo",
                  "Execução vigorosa e acompanhamento direto junto aos cartórios, órgãos públicos ou tribunais, com informações regulares e canal direto no WhatsApp para sanar todas as suas dúvidas.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#fab599]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#ded4cf]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 6 [MODO CLARO] - Avaliações / Depoimentos Reais no Google Meu Negócio */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#dfbeaa]/40 bg-[#fcf8f6] py-20 text-[#1a1114] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja a opinião de quem confiou suas causas à Carvalho & Perígolo Advogados em Simonésia - MG e em todo o Leste de Minas Gerais."
              >
                Nota máxima 5,0 ★ com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#964239] via-[#c96a56] to-[#6e2524]">
                  19 avaliações no Google pela competência, ética e dedicação.
                </span>
              </Heading>

              {/* Verified Google Badge Card in Light Mode */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#dfbeaa] bg-white p-5 shadow-md sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#dfbeaa]/80 bg-[#f7ede6] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1a1114]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c96a56]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c96a56] text-[#c96a56]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#544349]">
                    Carvalho & Perígolo Advogados
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#964239] transition-colors hover:text-[#1a1114]"
                  >
                    19 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#dfbeaa]/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c96a56] hover:shadow-xl sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c96a56]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c96a56] text-[#c96a56]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#dfbeaa] bg-[#f7ede6] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#964239] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#2c1d22]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {/* Office response if exists */}
                    {review.response && (
                      <div className="mt-4 rounded-lg border-l-2 border-[#c96a56] bg-[#fcf8f6] p-3 text-[11px] leading-5 text-[#544349]">
                        <p className="font-semibold text-[#964239]">Resposta da Carvalho & Perígolo:</p>
                        <p className="mt-0.5 italic">{review.response}</p>
                      </div>
                    )}
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#dfbeaa]/40 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfbeaa] bg-[#f7ede6] font-serif text-sm font-bold text-[#964239] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-bold text-[#1a1114]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#857177]">
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
                  "Advogados em Simonésia - MG",
                  "Direito Notarial & Registral",
                  "Especialização FGV & FADILESTE",
                  "Regularização de Imóveis",
                  "Inventário em Cartório & Sucessões",
                  "Direito de Família & Previdenciário",
                  "Nota Máxima 5,0 ★ no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfbeaa] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#2c1d22] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#964239]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#964239] transition-colors hover:text-[#1a1114]"
              >
                Ver Todas as 19 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7 [MODO ESCURO] - Contato & Localização da Sede em Simonésia - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c96a56]/25 bg-[#0b0708] py-20 text-[#fbf6f4] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="CONTATO & AGENDAMENTO DE CONSULTA"
                description="Entre em contato diretamente pelo WhatsApp para agendar um atendimento presencial na sede em Simonésia ou uma consulta jurídica online com sigilo e rapidez."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fab599] via-[#e48e78] to-[#fff5f0]">
                  atender você com atenção e excelência técnica.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento na Carvalho & Perígolo Advogados."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#0b0708]" /> Falar no WhatsApp com o Escritório
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#ded4cf]">
                  Telefone e WhatsApp:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#ded4cf]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#fab599]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#fab599] font-bold">
                      Segunda a Sexta-feira: a partir das 08:30
                    </p>
                    <p className="text-[11px] text-[#9c8e87]">
                      Atendimento presencial em Simonésia - MG e consultas agendadas via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#fab599]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#fab599]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#fab599]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#fab599] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#fab599]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#fab599] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#fab599]"
                  />
                  <div>
                    <span className="text-white">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#fab599] hover:underline"
                    >
                      Abrir no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#c96a56]/35 bg-[#150d10] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#964239] via-[#fab599] to-[#e48e78]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fab599]">
                  Sede em Simonésia - MG
                </p>
                <div className="relative h-[40px] w-[185px] sm:h-[46px] sm:w-[215px]">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Carvalho & Perígolo Advogados"
                    fill
                    unoptimized
                    sizes="215px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(228,142,120,0.25)]"
                  />
                </div>
              </div>

              {/* Office presentation visual */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#c96a56]/30 bg-[#0b0708] shadow-xs">
                <div className="grid grid-cols-2 size-full">
                  <div className="relative size-full border-r border-[#c96a56]/20">
                    <Image
                      src={FOTO_MONICA_SRC}
                      alt="Dra. Mônica Perígolo Magalhães"
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="relative size-full">
                    <Image
                      src={FOTO_ISAAC_SRC}
                      alt="Dr. Isaac Augusto de Carvalho"
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Acolhedor, Moderno e Reservado</p>
                  <p className="text-[10px] text-stone-300">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#ded4cf]">
                <strong className="font-semibold text-white">
                  {FIRM_NAME}
                </strong>
                <br />
                Dra. Mônica Perígolo Magalhães & Dr. Isaac Augusto de Carvalho
                <br />
                Atendimento presencial em Simonésia, Manhuaçu, Leste de Minas e consultoria online em todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#c96a56]/25 bg-[#0b0708] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#fab599]">
                  Atendimento & Localização
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#ded4cf]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-[#fab599]">
                    Segunda a Sexta (a partir das 08:30)
                  </span>
                  <span>WhatsApp & Consultas</span>
                  <span className="text-right font-medium text-[#e48e78]">
                    {PHONE_DISPLAY}
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-white">Av. Gov. Valadares, 151</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#fab599]">5,0 ★ (19 avaliações)</span>
                  <span>Atuação Regional</span>
                  <span className="text-right text-white">Simonésia, Leste de MG & Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#c96a56]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#9c8e87]">
                  Atendimento sob estrito sigilo profissional e conformidade ética
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento na Carvalho & Perígolo Advogados."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c96a56]/50 bg-[#1a1013] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#e48e78] hover:bg-[#c96a56] hover:text-[#0b0708]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c96a56]/25 bg-gradient-to-r from-[#0b0708] via-[#150d10] to-[#0b0708] px-5 py-14 text-[#fbf6f4] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fab599]">
                <Sparkles size={13} /> CARVALHO & PERÍGOLO ADVOGADOS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica especializada para seu imóvel, sua família ou seu benefício?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de uma consulta jurídica com a Carvalho & Perígolo Advogados."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#fdeade]/85 bg-gradient-to-r from-[#964239] via-[#fab599] to-[#964239] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#0b0708] shadow-[0_8px_24px_-4px_rgba(201,106,86,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#c96a56] hover:via-[#fff5f0] hover:to-[#c96a56] hover:shadow-[0_12px_32px_rgba(228,142,120,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#0b0708]" /> Iniciar Atendimento{" "}
              <ArrowUpRight size={15} className="text-[#0b0708]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Noir */}
        <footer className="border-t border-[#c96a56]/25 bg-[#0b0708] px-5 py-14 text-[#fbf6f4] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Carvalho & Perígolo Advogados"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[44px] w-[205px] sm:h-[50px] sm:w-[235px] lg:h-[55px] lg:w-[255px]">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Carvalho & Perígolo Advogados"
                    fill
                    unoptimized
                    sizes="255px"
                    className="object-contain object-left drop-shadow-[0_2px_12px_rgba(228,142,120,0.3)]"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9c8e87]">
                ⚖️ Advocacia com rigor técnico notarial e registral, ética inabalável e atendimento humanizado. Dra. Mônica Perígolo Magalhães e Dr. Isaac Augusto de Carvalho em Simonésia - MG e com consultoria online para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#fab599]">
                Dra. Mônica Perígolo (FGV) & Dr. Isaac Carvalho (FADILESTE)
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fab599]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#ded4cf]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#socios">
                  Os Sócios Fundadores
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fab599]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#ded4cf]">
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de atendimento com a Carvalho & Perígolo Advogados."
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#fab599] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#e48e78]" /> Segunda a Sexta, a partir das 08:30
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c96a56]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} CARVALHO & PERÍGOLO ADVOGADOS. Todos os direitos reservados.
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
              "Olá! Gostaria de atendimento pelo WhatsApp com a Carvalho & Perígolo Advogados."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Carvalho & Perígolo Advogados"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#e48e78]/80 bg-gradient-to-b from-[#1a1013] via-[#130c0e] to-[#0b0708] text-[#fccfb1] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(201,106,86,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#fdeade] hover:shadow-[0_10px_35px_rgba(228,142,120,0.6)] focus:outline-none focus:ring-4 focus:ring-[#e48e78]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e48e78] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#0b0708] bg-[#fdeade]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#fdeade] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#c96a56]/60 bg-[#0b0708]/95 px-3.5 py-1.5 text-xs font-semibold text-[#fbf6f4] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#fab599]">Atendimento no WhatsApp</span> · Carvalho & Perígolo
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c96a56]/40 bg-[#130c0e] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#fbf6f4]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c96a56]/30 bg-[#1a1013] text-[#fbf6f4] transition-colors hover:border-[#e48e78] hover:text-[#fab599] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c96a56]/40 bg-[#0b0708] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Brasão Carvalho & Perígolo Advogados"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ADVOCACIA ESPECIALIZADA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#e48e78] uppercase">
                      {FIRM_NAME} · Simonésia - MG
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#ded4cf]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c96a56]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#fab599]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#ded4cf]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#e48e78]" />
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
                    <WhatsAppIcon size={16} className="text-[#0b0708]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#9c8e87] transition-colors hover:text-white cursor-pointer"
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
