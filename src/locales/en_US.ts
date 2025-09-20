import type { Messages } from "@/locales/types";

export const enUS: Messages = {
  metadata: {
    title: "FamilyCoin — Turn chores into fun",
    description:
      "Gamify your family's routine with virtual coins, magical rewards, and plenty of fun."
  },
  navigation: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    privacy: "Privacy",
    cta: "Get started",
    tagline: "Magical coins for families"
  },
  hero: {
    badge: "Families' favorite chore app",
    title: "Turn chores into fun",
    description:
      "With FamilyCoin, your kids earn virtual coins by completing activities and trade them for family rewards.",
    chips: ["Gamified chores", "Fun savings", "Magical rewards"],
    card: {
      title: "Family week",
      bonus: "+420 coins",
      firstTask: {
        title: "Clean the bedroom",
        reward: "30 magic coins",
        status: "Completed"
      },
      secondTask: {
        title: "Homework",
        reward: "50 magic coins",
        status: "+50 coins"
      },
      info: "Create new quests and track every achievement."
    }
  },
  features: {
    badge: "Why families love it",
    heading: "Everything you need to engage your kids",
    description:
      "An experience designed for modern parents who want to build healthy habits with ease.",
    items: [
      {
        title: "Playful chores",
        description: "Make the home routine easier with organized activities."
      },
      {
        title: "Virtual coins",
        description: "Every completed task becomes magical coins for your kids."
      },
      {
        title: "Family rewards",
        description: "Trade coins for prizes you define together."
      }
    ]
  },
  store: {
    googleSubtitle: "Available on",
    googleTitle: "Google Play",
    appleSubtitle: "Available on",
    appleTitle: "App Store"
  },
  waitlist: {
    placeholder: "Enter your email to join the waitlist",
    submit: "Keep me posted",
    success: "All set! We'll reach out with updates soon.",
    error: "We couldn't send it right now. Please try again.",
    invalidEmail: "Enter a valid email",
    loading: "Sending..."
  },
  cta: {
    heading: "Download now and turn routines into magic moments.",
    description: "Create challenges, set rewards, and watch motivation grow with every milestone."
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy",
    pricing: "Pricing",
    support: "Support"
  },
  pricing: {
    badge: "Coming soon",
    heading: "Plans for the whole family",
    description:
      "We're polishing the final details. Leave your email on the main landing page to be notified first.",
    back: "Back to home"
  },
  privacy: {
    title: "Privacy Policy",
    intro:
      "FamilyCoin values your family's privacy. This page is a draft policy that will be updated for our official launch.",
    dataHeading: "Data collection",
    dataDescription:
      "We only collect the information needed to provide the best experience for parents and kids. Sensitive data is encrypted and we follow security best practices.",
    contactHeading: "Contact",
    contactDescription: "For questions, reach us at"
  }
};
