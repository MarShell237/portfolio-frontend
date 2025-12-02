<template>
    <section class="bg-background-footer dark:text-white border-t border-border/10 px-2 lg:px-24 py-8 mt-12">
        <div class="flex flex-col lg:flex-row justify-between py-8">
            <div class="">            
                <NuxtLink to="/">
                    <img src="/logo.png" alt="logo" class="h-12 w-12"/>
                </NuxtLink>
                <p class="pb-4 text-gray-500">Ingénieur logiciel full stack basé au Cameroun 🇨🇲</p>
            </div>
            <div>
                <h3 class="text-sm font-medium">Navigation</h3>
                <div class="flex flex-col gap-2 my-4 text-gray-500">
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
                <h3 class="text-sm font-medium">Contact</h3>
                <div class="flex flex-col gap-2 my-4">
                    <a href="mailto:marcelj.djiofack@outlook.com" class="text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                    <NuxtLink to="/contact" class="text-gray-500 hover:text-green-600" rel="noopener noreferrer">
                        Formulaire de contact
                    </NuxtLink>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-medium">Legal</h3>
                <div class="flex flex-col gap-2 my-4">
                    <NuxtLink to="/policy" class="text-gray-500 hover:text-green-600" rel="noopener noreferrer">
                        Politique de confidentialité
                    </NuxtLink>
                    <NuxtLink to="/condition" class="text-gray-500 hover:text-green-600" rel="noopener noreferrer">
                        Conditions générales d'utilisation
                    </NuxtLink>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-medium">Basculer le thème</h3>
                <div class="flex flex-col gap-2 my-4">
                    <p class="transition-colors duration-200 cursor-pointer text-gray-500 hover:text-green-600" @click="colorMode.preference = 'light'">Clair</p>
                    <p class="transition-colors duration-200 cursor-pointer text-gray-500 hover:text-green-600" @click="colorMode.preference = 'dark'">Sombre</p>
                    <p class="transition-colors duration-200 cursor-pointer text-gray-500 hover:text-green-600" @click="colorMode.preference = 'system'">Système</p>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-medium">Réseaux sociaux</h3>
                <div class="flex lg:justify-between gap-2 mt-4 transition-colors duration-700">
                    <a href="https://wa.me/237697815095" class="transition-colors duration-200 text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        <WhatsappBusinessIcon class="w-6 h-6"/>
                    </a>
                    <a href="https://github.com/MarShell237" class="transition-colors duration-200 text-gray-500 hover:text-black" target="_blank" rel="noopener noreferrer">
                        <GithubIcon class="w-6 h-6"/>
                    </a>
                    <a href="https://www.linkedin.com/in/marcel-j-djiofack-3b936b264/" class="transition-colors duration-200 text-gray-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon class="w-6 h-6"/>
                    </a>
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
    
    const colorMode = useColorMode()
    
    const navItems = [
        { name: 'Accueil', path: '/' },
        { name: 'CV', path: '/cv' },
        { name: 'Projet', path: '/projects' },
        { name: 'Blog', path: '/posts' },
    ]
</script>

<style scoped>

</style>