import type { Messages } from "@/locales/types";

export const esES: Messages = {
  metadata: {
    title: "FamilyCoin — Convierte las tareas en diversión",
    description:
      "Gamifica la rutina de tu familia con monedas virtuales, recompensas mágicas y mucha diversión."
  },
  navigation: {
    home: "Inicio",
    features: "Funciones",
    pricing: "Precios",
    privacy: "Privacidad",
    cta: "Comenzar",
    tagline: "Monedas mágicas en familia"
  },
  hero: {
    badge: "La app favorita de las familias",
    title: "Convierte las tareas en diversión",
    description:
      "Con FamilyCoin, tus hijos ganan monedas virtuales al completar actividades y las canjean por recompensas en familia.",
    chips: ["Tareas gamificadas", "Ahorro divertido", "Recompensas mágicas"],
    card: {
      title: "Semana familiar",
      bonus: "+420 monedas",
      firstTask: {
        title: "Ordenar la habitación",
        reward: "30 monedas mágicas",
        status: "Completada"
      },
      secondTask: {
        title: "Deberes",
        reward: "50 monedas mágicas",
        status: "+50 monedas"
      },
      info: "Crea nuevas misiones y sigue cada logro."
    }
  },
  features: {
    badge: "Por qué las familias lo aman",
    heading: "Todo lo que necesitas para motivar a tus hijos",
    description:
      "Una experiencia pensada para padres modernos que quieren crear hábitos saludables con ligereza.",
    items: [
      {
        title: "Tareas divertidas",
        description: "Facilita la rutina del hogar con actividades organizadas."
      },
      {
        title: "Monedas virtuales",
        description: "Cada tarea completada se convierte en monedas mágicas para tus hijos."
      },
      {
        title: "Recompensas en familia",
        description: "Canjea monedas por premios definidos por ustedes."
      }
    ]
  },
  store: {
    googleSubtitle: "Disponible en",
    googleTitle: "Google Play",
    appleSubtitle: "Disponible en",
    appleTitle: "App Store"
  },
  waitlist: {
    placeholder: "Ingresa tu correo para unirte a la lista de espera",
    submit: "Quiero recibir novedades",
    success: "¡Listo! Pronto te enviaremos novedades.",
    error: "No pudimos enviar tu solicitud. Inténtalo otra vez.",
    invalidEmail: "Ingresa un correo válido",
    loading: "Enviando..."
  },
  cta: {
    heading: "Descárgala ahora y convierte la rutina en momentos mágicos.",
    description: "Crea desafíos, define recompensas y mira cómo crece la motivación en cada logro."
  },
  footer: {
    rights: "Todos los derechos reservados.",
    privacy: "Privacidad",
    pricing: "Precios",
    support: "Soporte",
    localeLabel: "Idioma",
    localeOptions: [
      { value: "es_ES", label: "Español (España)" },
      { value: "en_US", label: "Inglés (EE. UU.)" },
      { value: "pt_BR", label: "Portugués (Brasil)" }
    ]
  },
  pricing: {
    badge: "Muy pronto",
    heading: "Planes para toda la familia",
    description:
      "Estamos ultimando los detalles de los planes. Deja tu correo en la landing principal para recibir la novedad primero.",
    back: "Volver al inicio"
  },
  privacy: {
    title: "Política de Privacidad",
    intro:
      "FamilyCoin valora la privacidad de tu familia. Esta página es un borrador que se actualizará para el lanzamiento oficial.",
    dataHeading: "Recopilación de datos",
    dataDescription:
      "Recolectamos solo la información necesaria para ofrecer la mejor experiencia a padres e hijos. Los datos sensibles se protegen con cifrado y seguimos las mejores prácticas de seguridad.",
    contactHeading: "Contacto",
    contactDescription: "Para cualquier duda escríbenos a"
  }
};
