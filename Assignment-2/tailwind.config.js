/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/Image/bg-image1.jpg')",
        footer1: "url('/src/Image/Shape_footer.png')",
        footer2: "url('/src/Image/Background_footer2.jpg')",
      },
      fontFamily: {
        roboto: "Roboto",
        estonia: "Estonia",
      },
      backgroundColor: {
        utama: "#FE8C12",
      },
      textColor: {
        utama: "#FE8C12",
      },
      colors: {
        utama: "#FE8C12",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
