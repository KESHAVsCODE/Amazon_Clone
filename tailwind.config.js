/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232f3e",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        lightGray: "#555",
        quantity_box: "#f0f2f2",
        footerBottom: "#131A22",
        amazonButton: "#0f1111",
        amazonBorder: "#d5d9d9",
        error: "#c40000",
      },
      backgroundColor: {
        hover_blue: "#1DA1F2",
        amazon_button: "#ffd814",
        amazon_button_hover: "#f7ca00",
      },
      boxShadow: {
        textShadow: "0 0 32px 1px rgba(199, 199, 199, 1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
        amazonButtonShadow: "0 3px 5px 0px rgba(213,217,217,.5)",
      },
      height: {
        headerHeight: "60px",
      },
    },
  },
  plugins: [],
};
