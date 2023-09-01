import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";
import autoprefixer from "autoprefixer";
export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
  theme: {
    extend: {
      colors: {
        rectangleColor: "#293462",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  variants: {
    extend: {},
  },
};
