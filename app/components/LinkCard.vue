<template>
    <a
        :href="href"
        class="flex items-center gap-2 py-4 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
    >
        <slot />
        <p class="flex flex-col">
            <span class="text-base">{{ title }}</span>
            <span class="text-gray-500">{{ subtitle }}</span>
        </p>
    </a>
</template>

<script lang="ts" setup>
    defineProps({
        href: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            default: "",
        }
    });
</script>

<style scoped>
    
</style>