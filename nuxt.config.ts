// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [{ src: 'https://accounts.google.com/gsi/client' }],
        },
    },
})
