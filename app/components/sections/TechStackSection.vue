<template>
    <section class="flex flex-col items-center my-24">
        <h2 class="text-3xl font-bold text-balance">Stack Technologique</h2>
        <p class="lg:text-base text-justify py-6">Technologies que j'utilise pour créer des applications web, mobile et desktop performantes, élégantes et évolutives.</p>
        <div class="flex flex-wrap justify-center gap-8 p-6">
            <NuxtLink
                v-for="(techno, index) in technoItems"
                :key="index"
                :to="techno.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
            >
                <img :src="techno.image" :alt="techno.name" class="h-16 w-16"/>
                <span class="text-sm font-medium">{{ techno.name }}</span>
            </NuxtLink>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const technoItems = [
        { name: "Laravel", image: "/images/laravel.svg", link: "https://laravel.com/"},
        { name: "Nuxt", image: "/images/nuxtjs.svg", link: "https://nuxt.com/"},
        { name: "Tauri", image: "/images/tauri.svg", link: "https://tauri.app/"},
        { name: "Rust", image: "/images/rust.svg", link: "https://www.rust-lang.org/"},
        { name: "TypeScript", image: "/images/typescript.svg", link: "https://www.typescriptlang.org/"},
        { name: "Tailwind", image: "/images/tailwindcss.svg", link: "https://tailwindcss.com/"},
    ]
</script>

<style scoped>
    
</style>