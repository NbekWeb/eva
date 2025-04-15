/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#0F172A",
          180: "#18181B",
          200: "#222222",
        },
        blue: {
          100: "#1D4ED8",
          200: "#2563EB",
          300: "#312f62",
          400: "#444363",
          500: "#5661F6",
          600: "#584DAD",
          900: "#9393E8",
        },
        gray: {
          100: "#A1A1AA",
          200: "#F1F5F9",
          300: "#EFEFEF",
          400: "#475569",
          500: "#56565A",
          600: "#64748B",
        },
        whiting: "#FEFEFF",
      },
      spacing: {
        15: "60px",
        18: "72px",
        22: "88px",
        25: "100px",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1" }], // 12px
        sm: ["0.875rem", { lineHeight: "1" }], // 14px
        base: ["1rem", { lineHeight: "1" }], // 16px
        lg: ["1.125rem", { lineHeight: "1" }], // 18px
        xl: ["1.25rem", { lineHeight: "1" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
      },
    },
  },
  plugins: [],
};
