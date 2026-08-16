/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: "rgb(var(--bp-bg) / <alpha-value>)",
          surface: "var(--bp-surface)",
          chip: "var(--bp-chip)",
          text: "rgb(var(--bp-text) / <alpha-value>)",
          muted: "rgb(var(--bp-muted) / <alpha-value>)",
          accent: "rgb(var(--bp-accent) / <alpha-value>)",
          label: "rgb(var(--bp-label) / <alpha-value>)",
          line: "var(--bp-line)",
        },
      },
      fontFamily: {
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          '"SF Mono"',
          "Consolas",
          '"Liberation Mono"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
