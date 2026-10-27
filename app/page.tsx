"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
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
  FileText,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais da Morato Advocacia
const WHATSAPP_NUMBER = "553125682738";
const PHONE_DISPLAY = "(31) 2568-2738";
const EMAIL_CONTACT = "contato@moratoadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/michellemoratoadvogada/";
const INSTAGRAM_HANDLE = "@michellemoratoadvogada";
const FIRM_NAME = "Morato Advocacia";
const LAWYER_NAME = "Dra. Michelle Morato";

const ADDRESS_TEXT = "Av. João César de Oliveira, 1730 - Sl 104 - Eldorado, Contagem - MG, 32310-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Morato+Advocacia+Av+Joao+Cesar+de+Oliveira+1730+Eldorado+Contagem+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Morato+Advocacia%0AContagem+%C2%B7+MG%0A&sourceid=chrome&ie=UTF-8#";

const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_MICHELLE_SRC = "/dra-michelle.jpg";
const FOTO_MICHELLE_SEATED_SRC = "/dra-michelle-seated.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Michelle Morato! Gostaria de consultar sobre atendimento jurídico na Morato Advocacia.";
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
    id: "divorcio-consensual-litigioso",
    title: "Divórcio Consensual & Litigioso",
    icon: Scale,
    tag: "Divórcio em Cartório Rápido · Judicial · Pacificação de Conflitos",
    summary:
      "Resolução célere e humanizada para o encerramento do matrimônio. Prioridade ao divórcio consensual extrajudicial em cartório e defesa técnica e firme em processos litigiosos complexos.",
    details:
      "O divórcio marca uma transição profunda na vida de uma família. Dra. Michelle Morato atua com escuta atenta e estratégia personalizada, buscando sempre o caminho mais rápido e pacífico — quando há consenso, o divórcio pode ser homologado diretamente em cartório em poucos dias. Em casos litigiosos, a atuação combina rigor jurídico para salvaguardar seus direitos com mediação acolhedora para preservar a estabilidade emocional e dos filhos.",
    topics: [
      "Divórcio Extrajudicial em Cartório de Notas: procedimento ágil, sigiloso e sem burocracia desnecessária",
      "Divórcio Judicial Consensual ou Litigioso com partilha estratégica de bens e fixação de acordos",
      "Dissolução de União Estável com apuração detalhada de direitos patrimoniais e convivência",
      "Medidas cautelares urgentes de afastamento do lar, arrolamento e bloqueio protetivo de bens",
      "Orientação preventiva sobre alteração de nome, registros civis e averbação em cartório",
      "Mediação construtiva de conflitos para reduzir desgaste emocional e custos financeiros",
    ],
    whatsAppText:
      "Olá, Dra. Michelle Morato! Gostaria de consultar sobre Divórcio na Morato Advocacia.",
  },
  {
    id: "pensao-alimenticia-alimentos",
    title: "Pensão Alimentícia (Alimentos)",
    icon: HeartHandshake,
    tag: "Fixação Justa · Revisão · Execução de Atrasados · Exoneração",
    summary:
      "Garantia do sustento digno e do melhor interesse dos filhos. Ações rápidas para fixação, revisão de valores defasados, cobrança de débitos em atraso e exoneração de pensão.",
    details:
      "A pensão alimentícia deve equilibrar com precisão o binômio necessidade de quem recebe e possibilidade de quem paga. A Morato Advocacia analisa detalhadamente a renda real, gastos essenciais da criança ou adolescente e evolução patrimonial para fixar um valor justo, cobrar com agilidade pensões em atraso (sob rito de prisão ou penhora) ou readequar valores diante de mudanças financeiras.",
    topics: [
      "Ação de Fixação de Alimentos Provisórios urgentes para suprir despesas imediatas dos filhos",
      "Ação Revisional de Alimentos para majoração (aumento) ou redução comprovada dos valores",
      "Execução e cobrança de pensão em atraso sob rito de prisão civil ou penhora de bens e contas",
      "Ação de Exoneração de Alimentos quando atingida a maioridade ou independência financeira",
      "Alimentos gravídicos em favor da gestante durante o período gestacional",
      "Pensão alimentícia entre cônjuges ou companheiros em caso de vulnerabilidade transitória",
    ],
    whatsAppText:
      "Olá, Dra. Michelle Morato! Gostaria de orientações sobre Pensão Alimentícia com o escritório.",
  },
  {
    id: "guarda-regime-convivencia-visitas",
    title: "Guarda & Regime de Convivência (Visitas)",
    icon: Users,
    tag: "Guarda Compartilhada · Convivência Saudável · Melhor Interesse da Criança",
    summary:
      "Construção de planos de convivência sólidos e afetuosos. Proteção integral do vínculo entre pais e filhos com regras claras para férias, feriados, rotinas escolares e visitas.",
    details:
      "Nas disputas de guarda, a prioridade absoluta deve ser sempre a segurança psicológica e o bem-estar dos filhos. Dra. Michelle Morato atua para estabelecer a guarda compartilhada de forma equilibrada e harmoniosa, elaborar planos detalhados de convivência familiar e agir com firmeza perante o Judiciário em casos de alienação parental, negligência ou necessidade de guarda unilateral.",
    topics: [
      "Definição e regulamentação de Guarda Compartilhada e fixação da residência principal",
      "Guarda Unilateral fundamentada na proteção e no superior interesse do menor",
      "Estruturação de Plano de Convivência Parental minucioso (férias, datas festivas e finais de semana)",
      "Combate à Alienação Parental e medidas judiciais de proteção ao vínculo afetivo",
      "Autorização judicial para viagens nacionais e internacionais de menores desacompanhados",
      "Ações de modificação de guarda decorrentes de mudança de cidade ou contexto familiar",
    ],
    whatsAppText:
      "Olá, Dra. Michelle Morato! Gostaria de consultar sobre Guarda e Regime de Convivência dos filhos.",
  },
  {
    id: "partilha-bens-protecao-patrimonial",
    title: "Partilha de Bens & Proteção Patrimonial",
    icon: ShieldCheck,
    tag: "Divisão Equitativa · Imóveis & Empresas · Prevenção de Prejuízos",
    summary:
      "Divisão transparente e justa do patrimônio construído durante o casamento ou união estável. Avaliação minuciosa de imóveis, investimentos, participações societárias e veículos.",
    details:
      "A partilha de bens exige rigor técnico, clareza contábil e estratégia jurídica para evitar que um dos cônjuges seja prejudicado ou tenha bens ocultados. A Morato Advocacia atua na apuração de acervo patrimonial em regimes de comunhão parcial, universal ou separação de bens, intermediando acordos justos ou postulando em juízo a divisão correta de patrimônios urbanos, rurais e empresariais.",
    topics: [
      "Apuração e divisão de imóveis financiados, quitados, veículos e investimentos bancários",
      "Partilha de cotas societárias, empresas familiares e apuração de haveres conjugais",
      "Investigação patrimonial em casos de ocultação, dissimulação ou fraude de bens na separação",
      "Sobrepartilha de bens sonegados ou não incluídos no divórcio originário",
      "Assessoria jurídica na compensação financeira e meação com foco na preservação patrimonial",
      "Pactos antenupciais e consultoria pré-matrimonial sobre escolha de regime de bens",
    ],
    whatsAppText:
      "Olá, Dra. Michelle Morato! Gostaria de orientação sobre Partilha de Bens e Patrimônio.",
  },
  {
    id: "uniao-estavel-planejamento",
    title: "União Estável: Reconhecimento & Dissolução",
    icon: FileText,
    tag: "Escritura Pública · Contrato de Convivência · Direitos Patrimoniais",
    summary:
      "Segurança jurídica para casais que convivem em união estável. Elaboração de contratos de convivência, reconhecimento formal perante a lei e dissolução com justa partilha.",
    details:
      "A união estável é uma realidade para milhões de famílias, mas a ausência de documentação formal pode gerar severos conflitos patrimoniais e sucessórios. Dra. Michelle Morato auxilia casais a redigirem contratos de convivência sob medida e atua judicial ou extrajudicialmente no reconhecimento e dissolução da união, garantindo todos os direitos meatórios e previdenciários.",
    topics: [
      "Elaboração de Escritura Pública de Reconhecimento de União Estável em Cartório",
      "Contrato de Convivência com estipulação clara do regime de bens adotado pelo casal",
      "Ação Declaratória de Reconhecimento e Dissolução cumulada com partilha de bens e alimentos",
      "Reconhecimento Post Mortem de união estável para fins sucessórios e pensão por morte",
      "Conversão formal de União Estável em Casamento Civil",
      "Defesa de meação contra execuções e dívidas exclusivas do companheiro",
    ],
    whatsAppText:
      "Olá, Dra. Michelle Morato! Gostaria de consultar sobre Reconhecimento ou Dissolução de União Estável.",
  },
  {
    id: "inventario-familiar-planejamento-sucessorio",
    title: "Inventário Familiar & Sucessões",
    icon: Award,
    tag: "Inventário em Cartório Ágil · Partilha Amigável · Menor Custo Tributário",
    summary:
      "Condução sensível e célere para transmitir o patrimônio da família aos herdeiros. Inventários extrajudiciais descomplicados em cartório e partilhas judiciais com pacificação.",
    details:
      "Após a perda de um ente querido, lidar com burocracias fiscais e partilhas pode se tornar um fardo pesado. A Morato Advocacia prioriza a via extrajudicial direta em cartório para que o inventário seja concluído com agilidade e harmonia entre os herdeiros, além de atuar em inventários judiciais com foco na proteção dos quinhões e otimização do ITCMD.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: resolução célere e simplificada havendo consenso",
      "Inventário Judicial quando houver menores, incapazes ou testamento registrado",
      "Partilha amigável de bens móveis, imóveis, contas bancárias e cotas empresariais",
      "Planejamento Sucessório Familiar: doação em vida com reserva de usufruto e cláusulas restritivas",
      "Alvarás judiciais para levantamento de valores, FGTS e saldos de contas de falecidos",
      "Mediação ativa entre herdeiros para prevenir disputas prolongadas e desgastes no Judiciário",
    ],
    whatsAppText:
      "Olá, Dra. Michelle Morato! Gostaria de orientações sobre Inventário Familiar e Sucessão.",
  },
];

interface ClientReview {
  name: string;
  reviewerTag: string;
  badge: string;
  rating: number;
  content: string;
  timeAgo?: string;
}

const clientReviews: ClientReview[] = [
  {
    name: "Dias Oliveira Housecleaning",
    reviewerTag: "2 avaliações no Google",
    badge: "Luta Pelo Meu Filho",
    rating: 5,
    timeAgo: "Recente",
    content:
      "Quero agradecer de coração pelo excelente trabalho, pela dedicação e pelo profissionalismo. Sua competência, atenção e empenho fizeram toda a diferença. Sou muito grata por todo o suporte, cuidado e compromisso demonstrados. Michelle vc fez muita diferença nesse momento complicado da minha vida, obrigada por lutar pelo meu filho e por mim ⚖️🙏🏻❤️",
  },
  {
    name: "Wanderson Oliveira Almeida",
    reviewerTag: "5 avaliações no Google",
    badge: "Excelente Mediadora & Preço Justo",
    rating: 5,
    timeAgo: "1 ano atrás",
    content:
      "Dra Michele é uma excelente profissional, sensata, ponderada, ágil, eficiente, educada, cortês, boa mediadora e preço justo, conduziu de forma excelente a minha demanda.",
  },
  {
    name: "Jessica Fontoura",
    reviewerTag: "Local Guide · 24 avaliações · 5 fotos",
    badge: "Simplifica a Linguagem do Direito",
    rating: 5,
    timeAgo: "4 anos atrás",
    content:
      "Profissional extremamente qualificada. Se preocupa em atender de forma individualizada, cuidando do cliente com muita excelência. Faz questão de simplificar a linguagem complexa do direito, para que o cliente leigo no assunto se sinta de fato seguro com relação ao seu processo. Super indico!",
  },
  {
    name: "Doraci Rocha",
    reviewerTag: "1 avaliação no Google",
    badge: "Rápida e Atenciosa",
    rating: 5,
    timeAgo: "2 anos atrás",
    content:
      "Muito satisfeito com o trabalho da advogada. Rápida e atenciosa, conseguiu em dias o que pensei que levaria meses, e a um preço justo.",
  },
  {
    name: "Frederico Luiz",
    reviewerTag: "3 avaliações no Google",
    badge: "Transparência e Profissionalismo",
    rating: 5,
    timeAgo: "7 meses atrás",
    content:
      "Excelente escritório de advocacia. Está conduzindo o caso do meu irmão e também o meu com transparência, responsabilidade e profissionalismo. Atendimento claro e seguro. Recomendo.",
  },
  {
    name: "Kelly Sene",
    reviewerTag: "Local Guide · 53 avaliações",
    badge: "Atendimento Maravilhoso",
    rating: 5,
    timeAgo: "3 anos atrás",
    content:
      "Michelle Morato foi extremamente atenciosa, tirou todas as dúvidas. Atendimento maravilhoso. Eu queria inclusive pagar pela consulta que não foi curta. Muito obrigada, Michelle. ❤️",
  },
  {
    name: "Lucas Nunes",
    reviewerTag: "Local Guide · 10 avaliações · 24 fotos",
    badge: "Competência e Eficácia",
    rating: 5,
    timeAgo: "4 anos atrás",
    content:
      "A Michele é, além de um ser humano inigualável, uma profissional de altíssimo gabarito, extremamente competente e eficaz! Indico a que todos conheçam o trabalho incrível dela.",
  },
  {
    name: "Karoline Nayara",
    reviewerTag: "5 avaliações no Google",
    badge: "Carinho e Humanidade",
    rating: 5,
    timeAgo: "4 anos atrás",
    content:
      "O que falar dessa advogada gigante, excelente profissional, com uma sabedoria fora de série, trata as pessoas com muito carinho e humanidade. Não conheço ninguém melhor nesta área! Michele ❣️",
  },
  {
    name: "Tais Miranda",
    reviewerTag: "6 avaliações no Google",
    badge: "Atenção a Cada Detalhe",
    rating: 5,
    timeAgo: "4 anos atrás",
    content:
      "Uma excelente profissional, tem uma dedicação com o cliente formidável, uma atenção a cada detalhe, te orienta a cada passo, eu não só indico como eu recomendo!!!",
  },
  {
    name: "Ana Clara Faustino",
    reviewerTag: "3 avaliações no Google",
    badge: "Resolvido em Poucos Dias",
    rating: 5,
    timeAgo: "3 anos atrás",
    content:
      "Ótima experiência. Michele muito competente e atenciosa! Resolveu meu problema em poucos dias! Muita gratidão a ela!",
  },
  {
    name: "Leonardo Patrick",
    reviewerTag: "Nutricionista · 2 avaliações no Google",
    badge: "Criteriosa e Competente",
    rating: 5,
    timeAgo: "3 anos atrás",
    content:
      "Recomendo 100%. A Dra. Michelle é extremamente competente, criteriosa e profissional.",
  },
  {
    name: "Welter Campos",
    reviewerTag: "Local Guide · 12 avaliações · 2 fotos",
    badge: "Dedicada e Competente",
    rating: 5,
    timeAgo: "2 anos atrás",
    content:
      "Excelente profissional, dedicada e competente, indico sem medo.",
  },
  {
    name: "Alysson Santos",
    reviewerTag: "1 avaliação no Google",
    badge: "Tranquilidade e Confiança",
    rating: 5,
    timeAgo: "3 anos atrás",
    content:
      "Atendimento perfeito, muita atenção, interesse e conhecimento. Soluções rápidas que me passaram tranquilidade e confiança.",
  },
  {
    name: "Tatiana Gibim",
    reviewerTag: "Local Guide · 17 avaliações · 10 fotos",
    badge: "Honesta e Preço Justo",
    rating: 5,
    timeAgo: "6 anos atrás",
    content:
      "Excelente profissional, competente, comprometida, honesta e com um preço justo. Quer uma excelente Advogada? Procure a Morato Advocacia. Recomendo.",
  },
  {
    name: "Felipe Couto",
    reviewerTag: "4 avaliações no Google",
    badge: "Do Início ao Fim",
    rating: 5,
    timeAgo: "1 ano atrás",
    content:
      "Excelente profissional do início ao fim do processo, sempre me prestando esclarecimentos. Recomendo.",
  },
  {
    name: "Luana Tatiane",
    reviewerTag: "4 avaliações · 3 fotos",
    badge: "A Melhor Sem Dúvidas",
    rating: 5,
    timeAgo: "4 anos atrás",
    content:
      "Advogada muito atenciosa e criteriosa, profissional dedicada e comprometida em ajudar, super indico seu trabalho... A melhor sem dúvidas!",
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
          isLight ? "text-[#071510]" : "text-[#fbfaf6]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            isLight ? "text-[#3f4f46]" : "text-[#ded9cf]"
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
      <main className="relative min-h-screen overflow-x-clip bg-[#071510] text-[#fbfaf6]">
        {/* Header / Navbar com Brasão Morato e Dourado Imperial */}
        <header className="sticky top-0 z-40 border-b border-[#c59a3f]/25 bg-[#071510]/95 backdrop-blur-xl transition-all">
          <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[92px] lg:h-[98px] xl:h-[102px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Morato Advocacia - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[38px] w-[170px] sm:h-[46px] sm:w-[210px] lg:h-[52px] lg:w-[240px] xl:h-[56px] xl:w-[260px]">
                <Image
                  src={LOGO_HORIZONTAL_SRC}
                  alt="Morato Advocacia — Advogada de Família"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 170px, (max-width: 1024px) 240px, 260px"
                  className="object-contain object-left drop-shadow-[0_2px_14px_rgba(212,175,55,0.3)]"
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
                Dra. Michelle Morato
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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Michelle Morato"
                className="flex size-10 items-center justify-center rounded-lg border border-[#c59a3f]/40 bg-[#0d211a] text-[#dfba6a] transition-all hover:border-[#dfba6a] hover:bg-[#122b22] hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Michelle Morato! Gostaria de agendar um atendimento na Morato Advocacia."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={15} className="text-[#071510]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-11 items-center justify-center rounded-lg border border-[#c59a3f]/40 bg-[#0d211a] text-[#dfba6a] transition-colors hover:border-[#dfba6a] hover:text-white lg:hidden cursor-pointer"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-[#c59a3f]/25 bg-[#071510]/98 px-5 py-6 backdrop-blur-2xl sm:px-8 lg:hidden"
              >
                <div className="flex flex-col gap-3.5 text-xs font-semibold uppercase tracking-[0.12em]">
                  <a
                    className="py-2 text-[#ded9cf] hover:text-[#dfba6a]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-2 text-[#ded9cf] hover:text-[#dfba6a]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Dra. Michelle Morato
                  </a>
                  <a
                    className="py-2 text-[#ded9cf] hover:text-[#dfba6a]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="py-2 text-[#ded9cf] hover:text-[#dfba6a]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Diferenciais
                  </a>
                  <a
                    className="py-2 text-[#ded9cf] hover:text-[#dfba6a]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5,0 ★)
                  </a>
                  <a
                    className="py-2 text-[#ded9cf] hover:text-[#dfba6a]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Contato & Sede
                  </a>
                  <div className="mt-3 flex flex-col gap-2.5 pt-3 border-t border-[#c59a3f]/25">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Michelle Morato! Gostaria de atendimento no WhatsApp."
                      )}
                      target="_blank"
                      size="md"
                      variant="gold"
                      className="w-full justify-center rounded-lg"
                    >
                      <WhatsAppIcon size={16} className="text-[#071510]" /> Falar no WhatsApp
                    </GlowingButton>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c59a3f]/40 bg-[#0d211a] py-3 text-[11px] font-bold uppercase tracking-wider text-[#dfba6a]"
                    >
                      <InstagramIcon size={15} /> Acessar Instagram Oficial
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1 [MODO ESCURO] - Hero Section - Imperial Emerald & Metallic Gold Aura */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c59a3f]/25 bg-gradient-to-b from-[#071510] via-[#0b1e17] to-[#071510]"
        >
          {/* Luzes ambiente sutis em esmeralda e dourado */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#17573d]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#dfba6a]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[750px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c59a3f]/50 bg-[#0d211a]/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfba6a] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfba6a] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#f5e3b5]"></span>
                </span>
                <span>ADVOCACIA DE FAMÍLIA · CONTAGEM & ATENDIMENTO ONLINE</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#fbfaf6] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Estratégia jurídica com acolhimento para proteger{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfba6a] via-[#f5e3b5] to-[#c59a3f]">
                  sua família, seus filhos e seu patrimônio.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#ded9cf] sm:text-base sm:leading-8"
              >
                Comandada pela <strong className="font-semibold text-white">{LAWYER_NAME}</strong>, a <strong className="font-semibold text-white">{FIRM_NAME}</strong> oferece atuação especializada em <strong className="font-semibold text-white">Divórcio, Pensão Alimentícia, Guarda, Visitas e Partilha de Bens</strong>, combinando rigor técnico, postura mediadora e linguagem clara para que você se sinta 100% seguro. Atendimento presencial no Eldorado (Contagem - MG) e online para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michelle Morato! Gostaria de conversar com a senhora no WhatsApp sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#071510]" /> Falar com a Dra. Michelle
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c59a3f]/45 bg-[#0d211a]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fbfaf6] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#f5e3b5] hover:bg-[#122b22] hover:text-white"
                >
                  Conhecer Especialidades{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#dfba6a]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#c59a3f]/25 pt-5 text-xs text-[#9e978c]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf6] transition-colors hover:text-[#dfba6a]"
                >
                  <Star size={14} className="fill-[#dfba6a] text-[#dfba6a]" /> 5,0 ★ no Google (41 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf6]">
                  <Award size={14} className="text-[#dfba6a]" /> Especialista em Direito de Família
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf6] transition-colors hover:text-[#dfba6a]"
                >
                  <MapPin size={14} className="text-[#dfba6a]" /> Eldorado · Contagem - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Michelle Morato Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[390px] sm:max-w-[430px] lg:max-w-[460px] xl:max-w-[480px] lg:ml-auto lg:mr-0"
            >
              {/* Moldura de Alta Joalheria Esmeralda & Ouro */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#c59a3f]/60 bg-[#0d211a] p-3 shadow-2xl ring-1 ring-[#dfba6a]/35">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#c59a3f]/40 bg-[#071510]">
                  <Image
                    src={FOTO_MICHELLE_SRC}
                    alt="Dra. Michelle Morato — Advogada de Família em Contagem - MG"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071510] via-[#071510]/80 to-transparent" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute top-3 right-3 rounded-md border border-[#c59a3f]/60 bg-[#071510]/85 px-2.5 py-1 backdrop-blur-md shadow-md">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#dfba6a]">
                      <BadgeCheck size={13} className="text-[#dfba6a]" /> OAB/MG
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-serif text-base sm:text-lg font-bold text-white">
                      Dra. Michelle Morato
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[#dfba6a] font-semibold">
                      Advogada Fundadora · Especialista em Família
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[#c59a3f]/25 px-2 pt-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 text-[#dfba6a]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={12} className="fill-[#dfba6a] text-[#dfba6a]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-white">
                      5,0 ★ (41 avaliações)
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#dfba6a]">
                    Google Meu Negócio
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Barra de Credibilidade & Números de Destaque */}
        <section className="border-b border-[#c59a3f]/25 bg-[#0b1e17] py-8 text-[#fbfaf6]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            <div className="border-l-2 border-[#dfba6a] pl-4">
              <p className="font-serif text-2xl font-bold sm:text-3xl text-white">
                5,0 ★
              </p>
              <p className="mt-0.5 text-xs text-[#ded9cf]">
                Nota máxima no Google
              </p>
            </div>
            <div className="border-l-2 border-[#dfba6a] pl-4">
              <p className="font-serif text-2xl font-bold sm:text-3xl text-white">
                41+
              </p>
              <p className="mt-0.5 text-xs text-[#ded9cf]">
                Depoimentos reais e verificados
              </p>
            </div>
            <div className="border-l-2 border-[#dfba6a] pl-4">
              <p className="font-serif text-2xl font-bold sm:text-3xl text-white">
                100%
              </p>
              <p className="mt-0.5 text-xs text-[#ded9cf]">
                Acolhimento e dedicação integral
              </p>
            </div>
            <div className="border-l-2 border-[#dfba6a] pl-4">
              <p className="font-serif text-2xl font-bold sm:text-3xl text-white">
                Híbrido
              </p>
              <p className="mt-0.5 text-xs text-[#ded9cf]">
                Presencial em Contagem & Online
              </p>
            </div>
          </div>
        </section>

        {/* DOBRA 2 [MODO CLARO] - Sobre a Dra. Michelle Morato - Alabaster & Esmeralda Nobre */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#dfba6a]/40 bg-[#fbf9f4] py-20 text-[#071510] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c59a3f]/50 bg-[#f5f0e6] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#17573d] shadow-xs">
                <span className="size-2 shrink-0 rounded-full bg-[#17573d]" />
                <span>ADVOCACIA DE FAMÍLIA COM ALTO GABARITO</span>
              </div>
              <h2 className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#071510] sm:text-4xl lg:text-[3.25rem]">
                Estratégia jurídica, sensibilidade humana e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#17573d] via-[#2b8a62] to-[#705018]">
                  resolução ágil para o seu momento.
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#3f4f46]">
                Conheça os pilares de atuação da <strong className="font-bold text-[#071510]">{LAWYER_NAME}</strong> à frente da <strong className="font-bold text-[#071510]">{FIRM_NAME}</strong>, onde cada cliente é ouvido com atenção genuína e cada demanda é tratada com discrição absoluta e excelência técnica.
              </p>
            </motion.div>

            {/* Profile Presentation Card */}
            <div className="mt-14 max-w-5xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className="group flex flex-col justify-between rounded-2xl border-2 border-[#dfba6a]/60 bg-white p-7 shadow-xl transition-all duration-300 hover:border-[#17573d] sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-center">
                  <div className="relative aspect-[3.8/5] w-full shrink-0 overflow-hidden rounded-xl border-2 border-[#dfba6a]/50 bg-[#f5f0e6] shadow-md">
                    <Image
                      src={FOTO_MICHELLE_SEATED_SRC}
                      alt="Dra. Michelle Morato — Atendimento Humanizado e Estratégico"
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                      <p className="font-serif text-sm font-bold">Dra. Michelle Morato</p>
                      <p className="text-[10px] text-amber-200 uppercase tracking-wider">Atendimento Presencial no Eldorado · Contagem</p>
                    </div>
                  </div>

                  <div>
                    <span className="inline-block rounded-md border border-[#dfba6a] bg-[#f5f0e6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#17573d]">
                      Advogada Fundadora
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#071510] sm:text-[1.85rem]">
                      Dra. Michelle Morato
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#17573d]">
                      Especialista em Direito de Família e Sucessões
                    </p>

                    <p className="mt-4 text-[14px] leading-relaxed text-[#3f4f46]">
                      Com vasta experiência prática em Direito de Família, Dra. Michelle é descrita por seus clientes como uma profissional ponderada, cortês, extremamente competente e ágil. Seu trabalho se diferencia pela capacidade de traduzir a linguagem complexa do direito para termos claros e compreensíveis, dando a você segurança e discernimento para tomar as melhores decisões em relação aos seus filhos e ao seu patrimônio.
                    </p>

                    <div className="mt-5 space-y-2 text-xs text-[#2b3a32]">
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#17573d] shrink-0" />
                        <span><strong>Estratégia com Acolhimento:</strong> Mediação equilibrada para evitar desgastes desnecessários.</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#17573d] shrink-0" />
                        <span><strong>Celeridade Comprovada:</strong> Conclusão de demandas em dias através de acordos bem estruturados.</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#17573d] shrink-0" />
                        <span><strong>Preço Justo e Transparência:</strong> Honorários éticos, contratação clara e acompanhamento direto.</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#17573d] shrink-0" />
                        <span><strong>Atendimento Híbrido:</strong> Presencial em Contagem (MG) ou 100% online por videoconferência e WhatsApp.</span>
                      </p>
                    </div>

                    <blockquote className="mt-6 rounded-xl border-l-4 border-[#17573d] bg-[#f5f0e6] p-4 text-[13px] italic leading-relaxed text-[#071510]">
                      &ldquo;O Direito de Família não trata apenas de leis e patrimônio, trata de vidas, sentimentos e recomeços. Por isso, nossa missão é unir <strong>estratégia jurídica de alta precisão com um acolhimento profundamente humano</strong>.&rdquo;
                      <footer className="mt-2 font-sans text-[11px] font-bold not-italic uppercase tracking-wider text-[#17573d]">
                        — Dra. Michelle Morato
                      </footer>
                    </blockquote>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#dfba6a]/40 pt-5">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Michelle Morato! Gostaria de uma consulta com a senhora sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfba6a] bg-[#f5f0e6] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#071510] transition-all hover:border-[#17573d] hover:bg-[#071510] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <WhatsAppIcon size={16} /> Conversar Diretamente com a Dra. Michelle Morato
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* DOBRA 3 [MODO ESCURO] - Áreas de Atuação Especializadas com Modais Interativos */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#c59a3f]/25 bg-[#071510] py-20 text-[#fbfaf6] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILAREs DE ATUAÇÃO · DIREITO DE FAMÍLIA"
                description="Soluções jurídicas estruturadas para proteger o que é mais valioso: sua dignidade, seus filhos e os bens construídos pela sua família."
              >
                Especialidades dedicadas a{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfba6a] via-[#f5e3b5] to-[#c59a3f]">
                  pacificar conflitos e assegurar seus direitos.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Michelle! Gostaria de consultar sobre uma área de atuação da Morato Advocacia."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#071510]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onClick={() => setActiveArea(area)}
                    className="group relative flex flex-col justify-between rounded-xl border border-[#c59a3f]/30 bg-[#0d211a] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#dfba6a] hover:bg-[#122b22] hover:shadow-xl cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-[#c59a3f]/40 bg-[#071510] text-[#dfba6a] transition-colors group-hover:border-[#dfba6a] group-hover:bg-[#17573d] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e978c] group-hover:text-[#dfba6a]">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 font-serif text-xl font-bold leading-snug text-white group-hover:text-[#f5e3b5]">
                        {area.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-semibold text-[#dfba6a]">
                        {area.tag}
                      </p>
                      <p className="mt-3 text-xs leading-6 text-[#ded9cf]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#c59a3f]/20 pt-4 text-xs font-semibold text-[#dfba6a]">
                      <span>Ver detalhes do serviço</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DOBRA 4 [MODO CLARO] - Diferenciais + Instagram Spotlight */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#dfba6a]/40 bg-[#f5f0e6] py-20 text-[#071510] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="POR QUE ESCOLHER A MORATO ADVOCACIA"
                description="Quando o futuro dos seus filhos e a sua paz de espírito estão em jogo, você merece uma advogada que combine capacidade técnica de ponta com respeito e empatia."
              >
                Diferenciais que geram{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#17573d] via-[#2b8a62] to-[#705018]">
                  segurança, agilidade e alívio para você.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Michelle! Gostaria de conversar com a senhora sobre o meu caso."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#071510]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Estratégia Jurídica com Acolhimento */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dfba6a]/70 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#17573d] hover:shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfba6a] bg-[#fbf9f4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#17573d]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#17573d]">
                      Estratégia com Acolhimento
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#071510] sm:text-[1.75rem]">
                    Compreensão Real do Seu Momento
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#3f4f46]">
                    Questões de família exigem uma abordagem que vai muito além de petições e prazos processuais. Na Morato Advocacia, cada caso é acolhido com empatia e respeito. Nosso foco é proteger a integridade emocional dos envolvidos, resguardar os interesses das crianças e buscar soluções equilibradas, sem alimentar desgastes desnecessários.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#1c2822]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#17573d]" />
                      <span>Escuta atenta e individualizada em cada etapa da demanda</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#17573d]" />
                      <span>Postura mediadora e sensata para viabilizar acordos rápidos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#17573d]" />
                      <span>Firmeza técnica inegociável na defesa dos seus direitos e filhos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfba6a]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Michelle! Gostaria de conversar com a senhora sobre o meu momento familiar."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfba6a] bg-[#fbf9f4] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#071510] transition-all hover:border-[#17573d] hover:bg-[#071510] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Michelle Morato
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Clareza, Agilidade & Preço Justo */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dfba6a]/70 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#17573d] hover:shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfba6a] bg-[#fbf9f4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#17573d]">
                      <Scale size={14} /> Linguagem Clara & Preço Justo
                    </span>
                    <span className="text-xs font-semibold text-[#17573d]">
                      5,0 ★ no Google (41 Avaliações)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#071510] sm:text-[1.75rem]">
                    Transparência e Resolução sem Juridiquês
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#3f4f46]">
                    Como destacado nos depoimentos dos clientes, a Dra. Michelle faz questão de simplificar a linguagem complexa do direito, explicando cada fase do processo com total clareza. Além disso, atua com agilidade resolutiva — conseguindo em dias o que muitos pensavam levar meses — sempre com honorários transparentes e preço justo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#1c2822]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#17573d]" />
                      <span>Comunicação direta e constante pelo WhatsApp sobre o processo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#17573d]" />
                      <span>Agilidade e proatividade para destravar procedimentos cartorários e judiciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#17573d]" />
                      <span>Contratação ética, sem surpresas e com facilidades de pagamento</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dfba6a]/40 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Michelle! Gostaria de consultar sobre valores e procedimentos do meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfba6a] bg-[#fbf9f4] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#071510] transition-all hover:border-[#17573d] hover:bg-[#071510] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Solicitar Análise do Meu Caso
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
              className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#dfba6a] bg-white p-6 shadow-md sm:p-8 md:flex-row"
            >
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="relative size-16 shrink-0 rounded-full border-2 border-[#17573d] p-0.5 shadow-md">
                  <div className="relative size-full overflow-hidden rounded-full bg-[#071510]">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Morato Advocacia no Instagram"
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <span className="font-serif text-lg font-bold text-[#071510]">{INSTAGRAM_HANDLE}</span>
                    <span className="rounded-full border border-[#dfba6a] bg-[#f5f0e6] px-2.5 py-0.5 text-[10px] font-bold text-[#17573d]">
                      Canal Oficial no Instagram
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#071510]">
                    Divórcio • Alimentos • Guarda • Visitas • Partilha de Bens
                  </p>
                  <p className="mt-1 text-xs text-[#3f4f46]">
                    Acompanhe orientações práticas, esclarecimentos sobre direitos familiares, guarda e pensão alimentícia diretamente com a Dra. Michelle Morato.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-[#f5e3b5]/85 bg-gradient-to-r from-[#705018] via-[#dfba6a] to-[#705018] px-6 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#071510] shadow-[0_4px_16px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:scale-105 active:scale-100"
              >
                <InstagramIcon size={16} className="text-[#071510]" /> Seguir no Instagram <ArrowUpRight size={14} className="text-[#071510]" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 5 [MODO ESCURO] - Método de Atendimento em 3 Etapas */}
        <section className="relative overflow-hidden border-t border-[#c59a3f]/25 bg-[#071510] py-20 text-[#fbfaf6] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#17573d]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#dfba6a]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO FUNCIONA O ATENDIMENTO"
                description="Um processo seguro, confidencial e acolhedor para que você recupere sua tranquilidade desde o primeiro contato."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfba6a] via-[#f5e3b5] to-[#c59a3f]">
                  solucionar sua demanda com segurança e dignidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#c59a3f]/35 bg-[#0d211a] p-6 font-serif text-base italic leading-7 text-[#fbfaf6] shadow-card">
                &ldquo;Trabalhamos com acolhimento, transparência e responsabilidade ética. Nosso compromisso é encontrar a rota mais justa, rápida e segura para sua família recomeçar em paz.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfba6a]">
                  — Dra. Michelle Morato
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#c59a3f]/25"
            >
              {[
                [
                  "01",
                  "Acolhimento Inicial & Escuta Atenta",
                  "Envie uma mensagem pelo WhatsApp ou agende uma reunião presencial em Contagem. Conversamos reservadamente sobre sua situação, analisamos documentos iniciais e compreendemos seus objetivos e preocupações.",
                ],
                [
                  "02",
                  "Diagnóstico Estratégico & Plano de Ação",
                  "Apresentamos com clareza os caminhos viáveis — priorizando acordos consensuais em cartório ou estruturando uma atuação judicial vigorosa —, indicando prazos realistas e investimentos envolvidos.",
                ],
                [
                  "03",
                  "Condução Diligente & Comunicação Contínua",
                  "Acompanhamento direto junto aos cartórios e Varas de Família, com atualizações periódicas no WhatsApp para que você nunca fique sem respostas sobre o andamento do seu processo.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfba6a]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#ded9cf]">
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
          className="scroll-mt-24 border-t border-[#dfba6a]/40 bg-[#fbf9f4] py-20 text-[#071510] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja os relatos espontâneos de clientes que confiaram suas causas familiares à Morato Advocacia em Contagem - MG e em todo o Brasil."
              >
                Nota máxima 5,0 ★ com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#17573d] via-[#2b8a62] to-[#705018]">
                  41 avaliações no Google pela competência, ética e humanidade.
                </span>
              </Heading>

              {/* Verified Google Badge Card in Light Mode */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#dfba6a] bg-white p-5 shadow-md sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#dfba6a]/80 bg-[#f5f0e6] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#071510]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c59a3f]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c59a3f] text-[#c59a3f]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#3f4f46]">
                    41 avaliações verificadas no Google
                  </p>
                  <p className="text-[10px] text-[#17573d] font-bold">
                    Classificação Máxima Unânime
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Grid with authentic reviews */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review, i) => (
                <motion.article
                  key={review.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="flex flex-col justify-between rounded-xl border border-[#dfba6a]/70 bg-white p-6 shadow-sm transition-all hover:border-[#17573d] hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-md border border-[#dfba6a] bg-[#f5f0e6] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#17573d]">
                        {review.badge}
                      </span>
                      <div className="flex gap-0.5 text-[#c59a3f]">
                        {Array.from({ length: review.rating }, (_, j) => (
                          <Star
                            key={j}
                            size={12}
                            className="fill-[#c59a3f] text-[#c59a3f]"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-[13px] leading-relaxed text-[#2b3a32]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#dfba6a]/40 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-sm font-bold text-[#071510]">
                          {review.name}
                        </p>
                        <p className="text-[10px] text-[#55695f]">
                          {review.reviewerTag}
                        </p>
                      </div>
                      {review.timeAgo && (
                        <span className="text-[10px] text-[#705018] font-medium">
                          {review.timeAgo}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#17573d] hover:text-[#071510] hover:underline"
              >
                <span>Ver todas as 41 avaliações no perfil do Google</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7 [MODO ESCURO] - Contato & Localização da Sede em Contagem - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c59a3f]/25 bg-[#071510] py-20 text-[#fbfaf6] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="CONTATO & AGENDAMENTO DE CONSULTA"
                description="Entre em contato diretamente pelo WhatsApp para agendar um atendimento presencial na sede em Contagem (Eldorado) ou uma consulta jurídica online com sigilo e rapidez."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfba6a] via-[#f5e3b5] to-[#c59a3f]">
                  acolher sua demanda com atenção e excelência técnica.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michelle Morato! Gostaria de agendar um atendimento na Morato Advocacia."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#071510]" /> Falar no WhatsApp com o Escritório
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#ded9cf]">
                  Telefone e WhatsApp:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#ded9cf]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dfba6a]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#dfba6a] font-bold">
                      Segunda a Sexta-feira: 08:30 às 18:00
                    </p>
                    <p className="text-[11px] text-[#9e978c]">
                      Atendimento presencial no Eldorado (Contagem - MG) e consultas agendadas via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#dfba6a]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#dfba6a]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#dfba6a]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#dfba6a] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#dfba6a]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#dfba6a] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dfba6a]"
                  />
                  <div>
                    <span className="text-white">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#dfba6a] hover:underline"
                    >
                      Abrir no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#c59a3f]/35 bg-[#0d211a] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#17573d] via-[#dfba6a] to-[#c59a3f]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#dfba6a]">
                  Sede no Eldorado · Contagem - MG
                </p>
                <div className="relative h-[42px] w-[190px] sm:h-[48px] sm:w-[220px]">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Morato Advocacia — Advogada de Família"
                    fill
                    unoptimized
                    sizes="220px"
                    className="object-contain object-left drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]"
                  />
                </div>
              </div>

              {/* Office presentation visual */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#c59a3f]/30 bg-[#071510] shadow-xs">
                <Image
                  src={FOTO_MICHELLE_SEATED_SRC}
                  alt="Dra. Michelle Morato no escritório em Contagem"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Acolhedor, Moderno e Reservado</p>
                  <p className="text-[10px] text-stone-300">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#ded9cf]">
                <strong className="font-semibold text-white">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} — Especialista em Direito de Família
                <br />
                Atendimento presencial em Contagem, Betim, Belo Horizonte e consultoria online em todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#c59a3f]/25 bg-[#071510] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#dfba6a]">
                  Atendimento & Localização
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#ded9cf]">
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-[#dfba6a]">
                    Segunda a Sexta (08:30 às 18:00)
                  </span>
                  <span>WhatsApp & Consultas</span>
                  <span className="text-right font-medium text-[#c59a3f]">
                    {PHONE_DISPLAY}
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-white">Av. João César de Oliveira, 1730 - Sl 104</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#dfba6a]">5,0 ★ (41 avaliações)</span>
                  <span>Atuação</span>
                  <span className="text-right text-white">Contagem, Grande BH & Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#c59a3f]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#9e978c]">
                  Atendimento sob estrito sigilo profissional e conformidade ética da OAB
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michelle! Gostaria de agendar um atendimento na Morato Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c59a3f]/50 bg-[#122b22] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#dfba6a] hover:bg-[#c59a3f] hover:text-[#071510]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c59a3f]/25 bg-gradient-to-r from-[#071510] via-[#0f261e] to-[#071510] px-5 py-14 text-[#fbfaf6] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfba6a]">
                <Sparkles size={13} /> MORATO ADVOCACIA · DRA. MICHELLE MORATO
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica especializada para seu divórcio, pensão, guarda ou partilha?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Michelle! Gostaria de uma consulta jurídica com a senhora sobre o meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#f5e3b5]/85 bg-gradient-to-r from-[#705018] via-[#dfba6a] to-[#705018] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#071510] shadow-[0_8px_24px_-4px_rgba(212,175,55,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#c59a3f] hover:via-[#fff8e7] hover:to-[#c59a3f] hover:shadow-[0_12px_32px_rgba(223,186,106,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#071510]" /> Iniciar Atendimento{" "}
              <ArrowUpRight size={15} className="text-[#071510]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Emerald Noir */}
        <footer className="border-t border-[#c59a3f]/25 bg-[#071510] px-5 py-14 text-[#fbfaf6] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Morato Advocacia"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[46px] w-[215px] sm:h-[52px] sm:w-[245px] lg:h-[58px] lg:w-[270px]">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Morato Advocacia"
                    fill
                    unoptimized
                    sizes="270px"
                    className="object-contain object-left drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9e978c]">
                ⚖️ Estratégia jurídica com acolhimento. Especialista em Direito de Família, Divórcio, Alimentos, Guarda, Visitas e Partilha de Bens. Dra. Michelle Morato em Contagem - MG e com consultoria online para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#dfba6a]">
                Dra. Michelle Morato · Advogada de Família
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfba6a]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#ded9cf]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Michelle Morato
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfba6a]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#ded9cf]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michelle! Gostaria de atendimento com a Morato Advocacia."
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#dfba6a] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#c59a3f]" /> Segunda a Sexta, 08:30 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c59a3f]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} MORATO ADVOCACIA · DRA. MICHELLE MORATO. Todos os direitos reservados.
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
              "Olá, Dra. Michelle! Gostaria de conversar com a senhora pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Michelle Morato"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#dfba6a]/80 bg-gradient-to-b from-[#122b22] via-[#0d211a] to-[#071510] text-[#f5e3b5] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#ffffff] hover:shadow-[0_10px_35px_rgba(223,186,106,0.6)] focus:outline-none focus:ring-4 focus:ring-[#dfba6a]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfba6a] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#071510] bg-[#f5e3b5]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#f5e3b5] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#c59a3f]/60 bg-[#071510]/95 px-3.5 py-1.5 text-xs font-semibold text-[#fbfaf6] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#dfba6a]">Atendimento no WhatsApp</span> · Dra. Michelle Morato
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c59a3f]/40 bg-[#0d211a] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#fbfaf6]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c59a3f]/30 bg-[#122b22] text-[#fbfaf6] transition-colors hover:border-[#dfba6a] hover:text-[#dfba6a] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c59a3f]/40 bg-[#071510] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Brasão Morato Advocacia"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ADVOCACIA DE FAMÍLIA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#c59a3f] uppercase">
                      {FIRM_NAME} · Contagem - MG
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#ded9cf]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c59a3f]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfba6a]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#ded9cf]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfba6a]" />
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
                    <WhatsAppIcon size={16} className="text-[#071510]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#9e978c] transition-colors hover:text-white cursor-pointer"
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
