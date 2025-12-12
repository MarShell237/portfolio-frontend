<template>
    <main class="bg-background text-xs">
        <HeadSection/>
        <div class="mx-3 lg:mx-24">
            <slot/>
        </div>
        <FooterSection/>
    </main>
</template>

<script lang="ts" setup>
    import HeadSection from '~/components/sections/HeadSection.vue';
    import FooterSection from '~/components/sections/FooterSection.vue';
</script>

<style scoped>

</style>