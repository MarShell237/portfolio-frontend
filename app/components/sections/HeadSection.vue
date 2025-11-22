<template>
    <nav class="sticky top-0 z-50 w-full border-b border-border/10 backdrop-blur text-xs">
        <div class="flex justify-between items-center px-4 lg:px-24 py-1">
            <NuxtLink to="/">
                <img src="/logo.png" alt="logo" class="h-12 w-12"/>
            </NuxtLink>
            <div class="hidden lg:flex justify-between items-center gap-4">
                <ModeToggle/>
                <div class="flex justify-between items-center gap-4">
                    <NuxtLink
                        v-for="(item, index) in navItems"
                        :key="index"
                        :to="item.path"
                        :class="['transition-colors duration-200 py-3', $route.path === item.path ? 'text-green-600' : 'text-gray-500 hover:text-green-600']"
                    >
                        {{ item.name }}
                    </NuxtLink>
                    <Button as-child>
                        <NuxtLink to="/auth/login" class="text-xs">
                            Connexion
                        </NuxtLink>
                    </Button>
                </div>
            </div>
            <Button
                variant="outline"
                size="icon"
                @click="mobileMenuIsOpen = !mobileMenuIsOpen"
                class="lg:hidden"
            >
                <Transition
                    mode="out-in"
                    enter-active-class="transition duration-200 ease-out"
                    leave-active-class="transition duration-150 ease-in"
                    enter-from-class="opacity-0 scale-75 rotate-45"
                    enter-to-class="opacity-100 scale-100 rotate-0"
                    leave-from-class="opacity-100 scale-100 rotate-0"
                    leave-to-class="opacity-0 scale-75 -rotate-45"
                >
                    <component
                        :is="mobileMenuIsOpen ? X : TextAlignJustify"
                        class="w-5 h-5"
                        :key="mobileMenuIsOpen"
                    />
                </Transition>
            </Button>

        </div>
        <Transition
            @enter="enter"
            @leave="leave"
        >
            <div class="overflow-hidden" v-if="mobileMenuIsOpen">
                <div class="flex flex-col px-4">
                    <NuxtLink
                        v-for="(item, index) in navItems"
                        :key="index"
                        :to="item.path"
                        :class="['transition-colors duration-200 py-1', $route.path === item.path ? 'text-green-600' : 'text-gray-500 hover:text-green-600']"
                    >
                        {{ item.name }}
                    </NuxtLink>
                    <div class="flex items-center gap-4 py-3">
                        <Button as-child class="flex-1 text-center">
                            <NuxtLink to="/auth/login" class="text-xs">
                                Connexion
                            </NuxtLink>
                        </Button>
                        <ModeToggle/>
                    </div>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script lang="ts" setup>
    import { Button } from "@/components/ui/button"
    import ModeToggle from "@/components/ModeToggle.vue"
    import { TextAlignJustify } from 'lucide-vue-next';
    import { X } from 'lucide-vue-next';

    const mobileMenuIsOpen = ref(false);
    const navItems = [
        { name: 'Accueil', path: '/' },
        { name: 'CV', path: '/cv' },
        { name: 'Projet', path: '/projects' },
        { name: 'Blog', path: '/posts' },
        { name: 'Contact', path: '/contact' },
    ]

    const enter = (el: HTMLElement) => {
        el.style.height = '0px'
        el.style.opacity = "0"
        el.style.overflow = 'hidden'

        requestAnimationFrame(() => {
            el.style.transition = "height 0.3s ease, opacity 0.3s ease"
            el.style.height = el.scrollHeight + 'px'
            el.style.opacity = "1"
        })
    }

    const leave = (el: HTMLElement) => {
        el.style.height = el.scrollHeight + 'px'
        el.style.opacity = "1"
        el.style.overflow = 'hidden'

        requestAnimationFrame(() => {
            el.style.transition = "height 0.3s ease, opacity 0.2s ease"
            el.style.height = '0px'
            el.style.opacity = "0"
        })
    }

</script>

<style scoped>
    
</style>