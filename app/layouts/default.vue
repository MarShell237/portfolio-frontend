<template>
    <div class="bg-[#030609] text-white">
        <HeadSection/>
        <slot/>
        <FooterSection/>
    </div>
</template>

<script lang="ts" setup>
    import HeadSection from '~/components/sections/HeadSection.vue';
    import FooterSection from '~/components/sections/FooterSection.vue';
</script>

<style scoped>


</style>