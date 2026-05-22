import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        qbadoo: {
          terracotta: "#FF6B35",
          clay: "#D2691E",
          sand: "#F4A460",
          stone: "#8B4513",
          cobalt: "#0047AB",
          coral: "#FF5E6C",
          parchment: "#FFF4E0",
          brown: "#3B1F0F"
        }
      },
      boxShadow: {
        soft: "0 12px 28px rgba(59, 31, 15, 0.12)",
        card: "0 10px 24px rgba(139, 69, 19, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
