import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          50: "#E3F3FF",
          100: "#B8E0FF",
          200: "#8ECFFE",
          300: "#64BDFB",
          400: "#3AAAF6",
          500: "#1897F0",
          600: "#0E75C6",
          700: "#08569A",
          800: "#04386D",
          900: "#001B41"
        },
        coin: "#F9B844",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans]
      },
      boxShadow: {
        card: "0 24px 50px -24px rgba(14, 116, 144, 0.35)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
