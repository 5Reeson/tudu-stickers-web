import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import Font from "vite-plugin-font";

export default defineConfig({
  site: "https://memes-abroad.example.com",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [
      Font.vite({
        scanFiles: ["src/**/*.{astro,html,js,jsx,json,ts,tsx}"],
        css: {
          fontFamily: "TuDu Smiley",
          fontDisplay: "swap",
          fontStyle: "normal",
          fontWeight: "400",
        },
      }),
      tailwindcss(),
    ],
  },
  image: {
    responsiveStyles: true,
  },
});
