/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: "#0f1524",
          surface: "rgba(18,26,44,0.55)",
          chip: "rgba(125,211,252,0.05)",
          text: "#e7eef7",
          muted: "#8ca0be",
          accent: "#7dd3fc",
          line: "rgba(125,211,252,0.16)",
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
