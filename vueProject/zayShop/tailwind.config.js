const colors = require("tailwindcss/colors");
module.exports = {
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuschia: colors.fuchsia,
        orang: colors.orange,
        teal: colors.teal,
        rose: colors.rose,
        dustywithe: "#fbfbfb",
        darkgray: "#404040",
        slidergray: "#efefef",
        slidergreen: "#59ab6e",
        slidergreenopacity: "#b3d3bb"
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    variants: {
      extend: {
        opacity: ['active'],

      },
      // extend: {padding: ['hover'],backgroundColor: ['active'],},
    },
    plugins: [],
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
};
