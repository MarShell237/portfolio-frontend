<template>
    <section class="flex justify-center items-center my-8">
        <Card class="w-full max-w-md border-border/10 bg-background-footer">
            <CardHeader class="text-center">
                <CardTitle class="text-xl">Connexion</CardTitle>
                <CardDescription>
                    Connectez-vous à votre compte MarShell
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="submit">
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="email" class="flex gap-0"><span>Email</span><span class="text-red-500">*</span></Label>
                            <Input id="email" required type="email" v-model="credentials.email" placeholder="kouamarie@gmail.com" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <div class="flex items-center">
                                <Label for="password" class="flex gap-0"><span>Mot de passe</span><span class="text-red-500">*</span></Label>
                                <NuxtLink
                                    to="/password-reset"
                                    class="ml-auto inline-block text-sm underline"
                                >
                                    Mot de passe oublié?
                                </NuxtLink>
                            </div>
                            <Input id="password" required type="password" v-model="credentials.password" placeholder="••••••••"/>
                        </div>
                        <div class="flex gap-2">
                            <Checkbox id="remember_me" class="cursor-pointer" v-model="credentials.remember_me"/>
                            <Label for="remember_me" class="cursor-pointer">Se souvenir de moi</Label>
                        </div>
                        <Button :disabled="isLoading" class="flex-1 cursor-pointer">
                            <Spinner v-show="isLoading"/>Se connecter
                        </Button>
                    </div>
                </form>
            </CardContent>
            <div class="flex gap-3 items-center w-full px-6">
                <span class="w-full flex-1 border-t border-border/10" />
                <p class="uppercase">Ou continuer avec</p>
                <span class="w-full flex-1 border-t border-border/10" />
            </div>
            <CardFooter class="flex gap-4">
                <Button variant="secondary" class="flex-1 hover:bg-gray-200 dark:hover:bg-gray-950 cursor-pointer">
                    <GoogleIcon />
                    Google
                </Button>
                <Button variant="secondary" class="flex-1 hover:bg-gray-200 dark:hover:bg-gray-950 cursor-pointer">
                    <GithubIcon />
                    GitHub
                </Button>
            </CardFooter>
            <CardAction class="w-full text-center text-sm">
                <span>Pas encore de compte ?</span>
                <NuxtLink to="/register" class="text-primary">
                    S'inscrire
                </NuxtLink>
            </CardAction>
        </Card>
    </section>
</template>

<script lang="ts" setup>
    import { Button } from '@/components/ui/button'
    import {
        Card,
        CardAction,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'
    import { Checkbox } from '@/components/ui/checkbox'
    import GoogleIcon from '@/components/icons/GoogleIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
    import { toast } from 'vue-sonner'
    import { useAuth } from '@/composables/useAuth'
    import { Spinner } from '@/components/ui/Spinner'

    definePageMeta({
        middleware: ['guest']
    })

    const { setUser } = useAuth()

    const credentials = ref({
        email: '',
        password: '',
        remember_me: false,
    })

    const isLoading = ref<boolean>(false)

    async function submit() {
        try{
            isLoading.value = true

            await useFetch('/sanctum/csrf-cookie', {
                baseURL: useRuntimeConfig().public.apiUrl,
                credentials: 'include',
                server: false,
            })

            const res:any = await $fetch('/api/v1/users/login-cookie', {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'POST',
                body: credentials.value,
                credentials: 'include',
                headers: {
                    'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value || '',
                    Accept: 'application/json',
                },
            })

            const user = {
                id: res.data.id,
                email: res.data.email,
                name: res.data.name,
                photo: res.data.photo,
                is_email_verified: !!res.data.email_verified_at,
                role: res.data.role,
            };

            setUser(user, credentials.value.remember_me)

            navigateTo('/')
            toast.success(res.message)
        } catch (err: any) {
            toast.error(err.data?.message)
            isLoading.value = !isLoading.value
        } finally {
            isLoading.value = false
        }
    }
</script>

<style scoped>
    
</style>