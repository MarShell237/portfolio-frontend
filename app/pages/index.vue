<template>
    <div v-html="data" class="p-4"/>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig()
    const { data } = await useFetch(`${config.public.apiUrl}`)
</script>

<style scoped>


</style>