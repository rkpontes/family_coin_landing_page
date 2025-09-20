export const theme = {
  colors: {
    primary: "#3AAAF6",
    secondary: "#F9B844",
    accent: "#34D399",
    background: "#E3F3FF",
    foreground: "#0F172A"
  },
  gradients: {
    hero: "linear-gradient(135deg, #E3F3FF 0%, #FFFFFF 50%, #F9B844 100%)",
    cta: "linear-gradient(90deg, #3AAAF6 0%, #0E75C6 50%, #F9B844 100%)"
  }
};

export type ThemeConfig = typeof theme;
