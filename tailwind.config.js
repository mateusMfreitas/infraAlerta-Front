module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 300: "#dcd9e2", 600: "#716c7f", 900: "#050a24" },
        white: { A700: "#ffffff" },
        indigo: { A400: "#3563e9" },
        blue_gray: { 900: "#332b4a" },
        black: { "900_7f": "#0000007f" },
      },
      boxShadow: { xs: "0px 4px 20px 0px #00000014", sm: "0px 1px 4px 0px #00000028" },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans", dmsans: "DM Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
