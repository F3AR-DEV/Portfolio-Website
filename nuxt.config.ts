// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/shared/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/icon'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: 'swap',
    download: true,
    inject: true,
  }
})
