import type { Messages } from "@/locales/types";

export const ptBR: Messages = {
  metadata: {
    title: "FamilyCoin — Transforme tarefas em diversão",
    description:
      "Gamifique a rotina da sua família com moedas virtuais, recompensas mágicas e muita diversão."
  },
  navigation: {
    home: "Início",
    features: "Recursos",
    pricing: "Preços",
    privacy: "Privacidade",
    cta: "Começar agora",
    tagline: "Moedas mágicas em família"
  },
  hero: {
    badge: "O app favorito das famílias brasileiras",
    title: "Transforme tarefas em diversão",
    description:
      "Com FamilyCoin, seus filhos ganham moedas virtuais ao completar atividades e trocam por recompensas em família.",
    chips: ["Tarefas gamificadas", "Economia divertida", "Recompensas mágicas"],
    card: {
      title: "Semana da família",
      bonus: "+420 moedas",
      firstTask: {
        title: "Arrumar o quarto",
        reward: "30 moedas mágicas",
        status: "Concluída"
      },
      secondTask: {
        title: "Dever de casa",
        reward: "50 moedas mágicas",
        status: "+50 moedas"
      },
      info: "Crie novas missões e acompanhe cada conquista."
    }
  },
  features: {
    badge: "Por que as famílias amam",
    heading: "Tudo o que você precisa para engajar seus filhos",
    description:
      "Uma experiência pensada para pais modernos que querem criar hábitos saudáveis com leveza.",
    items: [
      {
        title: "Tarefas divertidas",
        description: "Facilite a rotina de casa com atividades organizadas."
      },
      {
        title: "Moedas virtuais",
        description: "Cada tarefa concluída vira moedas mágicas para seus filhos."
      },
      {
        title: "Recompensas em família",
        description: "Troque moedas por prêmios definidos por vocês."
      }
    ]
  },
  store: {
    googleSubtitle: "Disponível no",
    googleTitle: "Google Play",
    appleSubtitle: "Disponível na",
    appleTitle: "App Store"
  },
  waitlist: {
    placeholder: "Digite seu e-mail para entrar na lista de espera",
    submit: "Quero receber novidades",
    success: "Tudo certo! Você receberá novidades em breve.",
    error: "Não foi possível enviar agora. Tente novamente.",
    invalidEmail: "Informe um e-mail válido",
    loading: "Enviando..."
  },
  cta: {
    heading: "Baixe agora e transforme a rotina em momentos mágicos.",
    description: "Crie desafios, defina recompensas e veja a motivação crescer a cada conquista."
  },
  footer: {
    rights: "Todos os direitos reservados.",
    privacy: "Privacidade",
    pricing: "Preços",
    support: "Suporte",
    localeLabel: "Idioma",
    localeOptions: [
      { value: "pt_BR", label: "Português (Brasil)" },
      { value: "en_US", label: "Inglês (EUA)" },
      { value: "es_ES", label: "Espanhol (Espanha)" }
    ]
  },
  pricing: {
    badge: "Em breve",
    heading: "Planos para toda a família",
    description:
      "Estamos finalizando os detalhes dos planos. Deixe seu e-mail na landing principal para ser avisado em primeira mão.",
    back: "Voltar para a home"
  },
  privacy: {
    title: "Política de Privacidade",
    intro:
      "A FamilyCoin valoriza a privacidade da sua família. Esta página é um rascunho da política que será personalizada para o lançamento oficial.",
    dataHeading: "Coleta de dados",
    dataDescription:
      "Coletamos apenas as informações necessárias para oferecer a melhor experiência possível para pais e filhos. Informações sensíveis são protegidas com criptografia e seguimos as melhores práticas de segurança.",
    contactHeading: "Contato",
    contactDescription: "Para qualquer dúvida, entre em contato pelo e-mail"
  }
};
