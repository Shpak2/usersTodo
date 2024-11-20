export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@pinia/nuxt'
  ],
  devtools: {
    enabled: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "@/assets/styles/modules/mixins.sass" as *
          `,
        },
      },
    },
  },
  css: [
    'normalize.css',
    '@/assets/styles/main.sass',
  ],
})
