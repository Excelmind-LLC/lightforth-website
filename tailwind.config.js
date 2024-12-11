/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        4.5: "18px",
      },
      fontSize: {
        lg: [
          "18px",
          {
            letterSpacing: "0.18px",
            lineHeight: "30px",
          },
        ],
        // lg: ["18px", "30px", "0.18px"],
      },
      colors: {
        button: {
          disabled: "#C9C9C9",
          active: "#0094FC",
        },
        primary: {
          100: "#2B2B2B",
        },
        gray: {
          300: "#D0D5DD",
        },
      },
    },
    plugins: [],
  },
};
