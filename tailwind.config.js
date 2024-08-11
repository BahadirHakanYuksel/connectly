/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        second: "var(--second)",
        third: "var(--third)",
        fourth: "var(--fourth)",
        myGray: "var(--myGray)",
        textColor: "var(--textColor)",
      },
    },
  },
  plugins: [],
};
