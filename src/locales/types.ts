export type Messages = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    features: string;
    pricing: string;
    privacy: string;
    cta: string;
    tagline: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    chips: string[];
    card: {
      title: string;
      bonus: string;
      firstTask: {
        title: string;
        reward: string;
        status: string;
      };
      secondTask: {
        title: string;
        reward: string;
        status: string;
      };
      info: string;
    };
  };
  features: {
    badge: string;
    heading: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  store: {
    googleSubtitle: string;
    googleTitle: string;
    appleSubtitle: string;
    appleTitle: string;
  };
  waitlist: {
    placeholder: string;
    submit: string;
    success: string;
    error: string;
    invalidEmail: string;
    loading: string;
  };
  cta: {
    heading: string;
    description: string;
  };
  footer: {
    rights: string;
    privacy: string;
    pricing: string;
    support: string;
    localeLabel: string;
    localeOptions: Array<{
      value: string;
      label: string;
    }>;
  };
  pricing: {
    badge: string;
    heading: string;
    description: string;
    back: string;
  };
  privacy: {
    title: string;
    intro: string;
    dataHeading: string;
    dataDescription: string;
    contactHeading: string;
    contactDescription: string;
  };
};
