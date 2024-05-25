/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: "light",
    darkTheme: "light",
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        domine: "Domine",
        merriweather: "Merriweather",
        inter: "Inter",
        lato: "Lato",
      },
      colors: {
        lightBlue: "#204fcf",
        navy: "",
      },
    },
  },
};
