// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    runtimeConfig: {
        apiSecret: process.env.API_SECRET,
        public: {
            apiUrl: process.env.API_URL, 
        },
    },
    css: ['~/assets/css/main.css'],
    modules: [
        'shadcn-nuxt',
        // '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: ''
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    app: {
        head: {
            title: 'Marcel J. DJIOFACK – Portfolio & Projets',
            titleTemplate: '%s | MarShell',
            meta: [
                { name: 'description', content: 'Portfolio de Marcel J. DJIOFACK (MarShell) – Ingénieur logiciel et créateur d’outils modernes pour l’Afrique.' },
                { name: 'keywords', content: 'MarShell, Marcel DJIOFACK, Ingénieur logiciel, Cameroun, Portfolio, Développeur, Laravel, Nuxt' },
                { name: 'author', content: 'MarShell' },

                // SEO et Open Graph
                { property: 'og:title', content: 'MarShell – Ingénieur Logiciel' },
                { property: 'og:description', content: 'Découvrez mes projets, mon CV et ma vision pour la tech africaine.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: process.env.FRONT_URL },
                { property: 'og:image', content: `${process.env.FRONT_URL}/preview.jpg` },

                // Twitter cards
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'MarShell – Ingénieur Logiciel' },
                { name: 'twitter:description', content: 'Portfolio de Marcel J. DJIOFACK, Ingénieur logiciel Camerounais.' },
                { name: 'twitter:image', content: `${process.env.FRONT_URL}/preview.jpg` },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/logo.png' },
            ],
            htmlAttrs: {
                lang: 'fr',
            },
        },
    },
})