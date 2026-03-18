/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",   // indigo
        accent: "#8b5cf6",    // purple
        background: "#f9fafb",
        success: "#10b981",
        danger: "#ef4444",
      },
    },
  },
  plugins: [],
};