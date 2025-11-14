<template>
    <section class="flex flex-col lg:flex-row gap-2 items-center">
        <div>
            <p class="lg:text-sm">👋 Bonjour, je suis</p>
            <h1 class="lg:text-4xl md:text-6xl font-bold text-balance">
                <span class="text-green-700">Marcel J. DJIOFACK</span>
                <br>
                <span class="mt-2">alias</span>
                <span class="text-green-700"> MarShell</span>
            </h1>
            <p class="lg:text-base">Je suis MarShell, ingénieur logiciel full stack passionné par la création d'expériences numériques performantes et élégantes, du web au mobile jusqu'au desktop.</p>
            <div class="flex items-center gap-2 my-4">
                <Button as-child>
                    <NuxtLink to="/projects" class="text-xs">Voir mes projets</NuxtLink>
                </Button>
                <Button as-child variant="outline">
                    <NuxtLink to="" class="text-xs"><Download /> Télécharger CV</NuxtLink>
                </Button>
            </div>
            <div class="flex gap-2 mt-2 transition-colors duration-700">
                <NuxtLink to="https://wa.me/237697815095" title="Whatsapp Business" target="_blank" rel="noopener noreferrer" class="transition-colors duration-200 text-gray-500 hover:text-green-600">
                    <WhatsappBusinessIcon class="w-6 h-6"/>
                </NuxtLink>
                <NuxtLink to="https://github.com/MarShell237" title="Github" target="_blank" rel="noopener noreferrer" class="transition-colors duration-200 text-gray-500 hover:text-black">
                    <GithubIcon class="w-6 h-6"/>
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/marcel-j-djiofack-3b936b264/" title="LinkedIn" target="_blank" rel="noopener noreferrer" class="transition-colors duration-200 text-gray-500 hover:text-blue-600">
                    <LinkedinIcon class="w-6 h-6"/>
                </NuxtLink>
            </div>
        </div>
        <ProfileSection/>
    </section>
</template>

<script lang="ts" setup>
    import { Button } from '@/components/ui/button';
    import { Download } from 'lucide-vue-next';
    import WhatsappBusinessIcon from '@/components/icons/WhatsappBusinessIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
    import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
    import ProfileSection from './ProfileSection.vue';

//     const config = useRuntimeConfig()
// const { data: data1 } = await useFetch(`${config.public.apiUrl}`)
// const { data: data2 } = await useFetch(`${config.public.apiUrl}/api/v1/tags`)

//     console.log(config.public.apiUrl)
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');    

    h1 {
        font-family: "Orbitron", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
</style>