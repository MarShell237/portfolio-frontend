<template>
    <section class="flex flex-col lg:flex-row gap-2 items-center pt-5">
        <div class="text-center lg:text-start lg:pr-12">
            <p class="lg:text-sm">👋 Bonjour, je suis</p>
            <h1 class="text-2xl md:text-6xl font-bold text-balance">
                <span class="text-green-700">Marcel J. DJIOFACK</span>
                <br>
                <span class="mt-2">alias</span>
                <span class="text-green-700"> MarShell</span>
            </h1>
            <p class="text-justify lg:text-start lg:px-0 pt-5 lg:text-base">Je suis MarShell, ingénieur logiciel full stack passionné par la création d'expériences numériques performantes et élégantes, du web au mobile jusqu'au desktop.</p>
            <div class="flex justify-between lg:justify-start items-center gap-2 my-4">
                <Button as-child>
                    <NuxtLink to="/projects" class="text-xs">Voir mes projets</NuxtLink>
                </Button>
                <Button as-child variant="outline">
                    <a href="/cv/Marcel.pdf" class="text-xs" target="_blank" rel="noopener noreferrer"><Download /> Télécharger CV</a>
                </Button>
            </div>
            <div class="flex lg:px-0 gap-2 mt-2 transition-colors duration-700">
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