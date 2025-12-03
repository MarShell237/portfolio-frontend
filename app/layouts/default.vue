<template>
    <main class="bg-background text-xs">
        <HeadSection/>
        <div class="mx-3 lg:mx-24">
            <slot/>
        </div>
        <FooterSection/>
        <Toaster />
    </main>
</template>

<script lang="ts" setup>
    import HeadSection from '~/components/sections/HeadSection.vue';
    import FooterSection from '~/components/sections/FooterSection.vue';
    import 'vue-sonner/style.css'
    import { Toaster } from '@/components/ui/sonner'
</script>

<style scoped>

</style>