<template>
    <section class="flex flex-col items-center my-24">
        <h2 class="text-3xl font-bold text-balance">Stack Technologique</h2>
        <p class="lg:text-base text-justify py-6">Technologies que j'utilise pour créer des applications web, mobile et desktop performantes, élégantes et évolutives.</p>
        <div class="flex flex-wrap justify-center gap-8 p-6">
            <TooltipProvider v-for="(techno, index) in technoItems">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <NuxtLink
                            :key="index"
                            :to="techno.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
                        >
                            <img :src="techno.image" :alt="techno.name" class="h-16 w-16"/>
                            <span class="text-sm font-medium">{{ techno.name }}</span>
                        </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{{techno.tooltip}}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            
        </div>
    </section>
</template>

<script lang="ts" setup>
    import {
        Tooltip,
        TooltipContent,
        TooltipProvider,
        TooltipTrigger,
    } from '@/components/ui/tooltip'

    const technoItems = [
        { name: "Laravel", image: "assets/images/laravel.svg", link: "https://laravel.com/" , tooltip: "Pour les APIs RESTful"},
        { name: "Nuxt", image: "assets/images/nuxtjs.svg", link: "https://nuxt.com/", tooltip: "Pour les interfaces web avec un bon SEO et les UIs Mobiles et Desktop via Tauri"},
        { name: "Tauri", image: "assets/images/tauri.svg", link: "https://tauri.app/", tooltip: "Pour les applications Mobiles et Desktop légères, sécurisées et cross-plateformes"},
        { name: "Rust", image: "assets/images/rust.svg", link: "https://www.rust-lang.org/", tooltip: "Pour les applications performantes et sécurisées (logique backend des apps Tauri)"},
        { name: "TypeScript", image: "assets/images/typescript.svg", link: "https://www.typescriptlang.org/", tooltip: "Pour un code JavaScript typé, plus sûr et maintenable"},
        { name: "Tailwind", image: "assets/images/tailwindcss.svg", link: "https://tailwindcss.com/", tooltip: "Pour un design moderne, réactif et personnalisable"},
    ]
</script>

<style scoped>
    
</style>