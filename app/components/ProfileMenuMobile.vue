<template>
    <div class="flex flex-col w-full">
        <div class="flex gap-2 py-2 border-y border-border/10">
            <Avatar class="cursor-pointer">
                <AvatarImage :src="user?.photo || ''" />
                <AvatarFallback>{{ getInitials(user?.name, user?.email) }}</AvatarFallback>
            </Avatar>
            <div class="flex flex-col">
                <span class="text-xs text-gray-500">Connecté en tant que</span>
                {{ user?.email }}
            </div>
        </div>
        <div class="flex flex-col">
            <NuxtLink to="/profile" class="flex items-center gap-2 my-2">
                <CircleUserRound /> Profile
            </NuxtLink>
            <div class="flex gap-2">
                <Button @click="logout" variant="outline" class="flex flex-1 gap-2 border text-red-500 focus:text-red-500 cursor-pointer">
                    <LogOut /> <span>Déconnexion</span>
                </Button>
                <ModeToggle/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ModeToggle from '@/components/ModeToggle.vue'
    import { useInitials } from '~/composables/useInitials'
    import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
    import { useAuth } from '@/composables/useAuth'
    import { LogOut } from 'lucide-vue-next';
    import { CircleUserRound } from 'lucide-vue-next';
    import { toast } from "vue-sonner";
    import { Button } from "@/components/ui/button"

    const { user, isLoggedIn, clearUser, loadUser } = useAuth()
    const { getInitials } = useInitials()

        const logout = async () => {
        try{
            const res:any = await $fetch('/api/v1/users/logout-cookie', {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value || '',
                    Accept: 'application/json',
                },
            })
            clearUser()
            navigateTo('/')
        } catch (err: any) {
            toast.error(err.data?.message)
        }
    }
</script>

<style scoped>
    
</style>