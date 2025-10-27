<template>
    <div v-html="data1" class="p-4"/>
    <div>{{ data2 }}</div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig()
const { data: data1 } = await useFetch(`${config.public.apiUrl}`)
const { data: data2 } = await useFetch(`${config.public.apiUrl}/api/v1/tags`)

    console.log(config.public.apiUrl)
</script>

<style scoped>


</style>