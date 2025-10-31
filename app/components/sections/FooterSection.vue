<template>
    <section class="bg-[#060A0E] border-t border-border/10 px-24 py-8 mt-12">
        <div class="flex justify-between py-8">
            <div class="">            
                <nuxt-link to="/">
                    <img src="/og-image.png" alt="logo" class="h-12 w-12"/>
                </nuxt-link>
                <p class="text-gray-500">Ingénieur logiciel full stack basé au Cameroun 🇨🇲</p>
            </div>
            <div>
                <h3 class="text-sm font-medium pb-2">Navigation</h3>
                <div class="flex flex-col gap-2 mt-2 text-gray-500">
                    <NuxtLink
                        v-for="(item, index) in navItems"
                        :key="index"
                        :to="item.path"
                        class="transition-colors duration-200 hover:text-green-600"
                    >
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-medium pb-2">Contact</h3>
                <div class="flex flex-col gap-2 mt-2">
                    <nuxt-link to="mailto:marcelj.djiofack@outlook.com" class="text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        Email
                    </nuxt-link>
                    <nuxt-link to="/contact" class="text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        Formulaire de contact
                    </nuxt-link>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-medium pb-2 ">Réseaux sociaux</h3>
                <div class="flex justify-between mt-2 transition-colors duration-700">
                    <nuxt-link to="https://wa.me/237697815095" class="transition-colors duration-200 text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        <WhatsappBusinessIcon class="w-6 h-6"/>
                    </nuxt-link>
                    <nuxt-link to="https://github.com/MarShell237" class="transition-colors duration-200 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
                        <GithubIcon class="w-6 h-6"/>
                    </nuxt-link>
                    <nuxt-link to="https://www.linkedin.com/in/marcel-j-djiofack-3b936b264/" class="transition-colors duration-200 text-gray-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon class="w-6 h-6"/>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <p class="text-center py-4 border-t border-border/10 text-gray-500">&copy; {{ new Date().getFullYear() }} Marcel J. DJIOFACK. Tous droits réservés.</p>
    </section>
</template>

<script lang="ts" setup>
    import WhatsappBusinessIcon from '@/components/icons/WhatsappBusinessIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
    import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
    const navItems = [
        { name: 'Accueil', path: '/' },
        { name: 'CV', path: '/cv' },
        { name: 'Projet', path: '/projects' },
        { name: 'Blog', path: '/posts' },
        // { name: 'login', path: '/auth/login' },
        // { name: 'register', path: '/auth/register' },
    ]
</script>

<style scoped>
    
</style>