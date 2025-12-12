<template>
    <div>
        <NuxtLayout>
            <Toaster 
                :position="updateToasterPosition()" 
                :closeButton="true" 
                closeButtonPosition="top-right" 
                richColors 
                :duration="8000" 
            />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
    import 'vue-sonner/style.css'
    import { Toaster } from '@/components/ui/sonner'
    type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

    function updateToasterPosition(): Position {
        return window.innerWidth < 640 ? 'top-center' : 'bottom-right'
    }
</script>
