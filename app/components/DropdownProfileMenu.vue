<template>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar class="cursor-pointer">
                <AvatarImage :src="user?.photo || ''" />
                <AvatarFallback>{{ getInitials(user?.name, user?.email) }}</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" class="bg-background-footer border-border/10 w-84">
            <DropdownMenuLabel class="flex flex-col">
                <span class="text-xs text-gray-500">Connecté en tant que</span> 
                {{ user?.email }}
            </DropdownMenuLabel>
            <div class="border-t border-border/10 w-full"></div>
            <DropdownMenuItem class="hover:bg-green-600 cursor-pointer">
                <NuxtLink to="/profile" class="flex items-center gap-2">
                    <CircleUserRound /> Profile
                </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem @click="logout" class="text-red-500 focus:text-red-500 cursor-pointer">
                <LogOut /> Déconnexion
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script lang="ts" setup>
    import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
        DropdownMenuLabel,
        DropdownMenuSeparator
    } from "@/components/ui/dropdown-menu"
    import { useAuth } from '@/composables/useAuth'
    import { toast } from "vue-sonner";
    import { LogOut } from 'lucide-vue-next';
    import { CircleUserRound } from 'lucide-vue-next';
    import { useInitials } from '~/composables/useInitials'


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