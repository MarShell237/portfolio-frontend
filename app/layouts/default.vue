<template>
    <div class="dark:bg-[#030609] text-xs">
        <HeadSection/>
        <div class="lg:mx-24">
            <slot/>
        </div>
        <FooterSection/>
    </div>
</template>

<script lang="ts" setup>
    import HeadSection from '~/components/sections/HeadSection.vue';
    import FooterSection from '~/components/sections/FooterSection.vue';
</script>

<style scoped>

</style>