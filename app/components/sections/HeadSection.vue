<template>
    <nav class="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
        <div class="flex justify-between px-24 py-1">
            <nuxt-link to="/">
                <img src="/og-image.png" alt="logo" class="h-12 w-12"/>
            </nuxt-link>
            <div class="flex justify-between items-center gap-4">
                <NuxtLink
                    v-for="(item, index) in navItems"
                    :key="index"
                    :to="item.path"
                    :class="['text-sm transition-colors duration-200 py-3', $route.path === item.path ? 'text-green-600' : 'text-white hover:text-green-600']"
                >
                    {{ item.name }}
                </NuxtLink>
                <Button as-child>
                    <NuxtLink to="/auth/login" class="text-white">
                        Connexion
                    </NuxtLink>
                </Button>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
    import { Button } from "@/components/ui/button"
    const navItems = [
        { name: 'Accueil', path: '/' },
        { name: 'CV', path: '/cv' },
        { name: 'Projet', path: '/projects' },
        { name: 'Blog', path: '/posts' },
        { name: 'Contact', path: '/contact' },
        // { name: 'login', path: '/auth/login' },
        // { name: 'register', path: '/auth/register' },
    ]
</script>

<style scoped>
    
</style>