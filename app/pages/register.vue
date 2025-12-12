<template>
    <section class="flex justify-center items-center my-8">
        <Card class="w-full max-w-md border-border/10 bg-background-footer">
            <CardHeader class="text-center">
                <CardTitle class="text-xl">Inscription</CardTitle>
                <CardDescription>
                    Créez votre compte MarShell
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="submit">
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="name" class="flex gap-0"><span>Nom complet</span><span class="text-red-500">*</span></Label>
                            <Input id="name" required type="text" v-model="credentials.name" placeholder="Atangana Alexandre" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="email" class="flex gap-0"><span>Email</span><span class="text-red-500">*</span></Label>
                            <Input id="email" required type="email" v-model="credentials.email" placeholder="atango.legrand@gmail.com" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="photo">Photo de profil</Label>
                            <Input id="photo" type="file" accept="image/*" @change="onFileChange"/>
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="password" class="flex gap-0"><span>Mot de passe</span><span class="text-red-500">*</span></Label>
                            <Input id="password" required type="password" v-model="credentials.password" placeholder="••••••••"/>
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="confirmPassword" class="flex gap-0"><span>Confirmer le mot de passe</span><span class="text-red-500">*</span></Label>
                            <Input id="confirmPassword" required type="password" v-model="credentials.password_confirmation" placeholder="••••••••"/>
                        </div>
                        <div class="flex gap-2">
                            <Checkbox id="remember_me" v-model="credentials.remember_me" class="cursor-pointer"/>
                            <Label for="remember_me" class="cursor-pointer">Se souvenir de moi</Label>
                        </div>
                        <p class="text-gray-500">
                            En créant un compte, vous acceptez notre
                            <NuxtLink to="/policy" class="text-green-500">Politique de confidentialité</NuxtLink>
                            et nos
                            <NuxtLink to="/condition" class="text-green-500">Conditions générales d'utilisation</NuxtLink>.
                        </p>
                        <Button :disabled="isLoading" class="flex-1 cursor-pointer">
                            <Spinner v-show="isLoading"/>S'inscrire
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
                <span>Déjà un compte ?</span>
                <NuxtLink to="/login" class="text-primary">
                    Se connecter
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
    import { Spinner } from '@/components/ui/spinner'
    import GoogleIcon from '@/components/icons/GoogleIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
    import { useAuth } from '@/composables/useAuth'
    import { toast } from 'vue-sonner'

    definePageMeta({
        middleware: ['guest']
    })

    const { setUser } = useAuth()

    const credentials = ref<{
        name: string
        email: string
        photo: File | null
        password: string
        password_confirmation: string
        remember_me: boolean
    }>({
        name: '',
        email: '',
        photo: null,
        password: '',
        password_confirmation: '',
        remember_me: false,
    })

    const onFileChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        if (target.files && target.files[0]) {
            credentials.value.photo = target.files[0]
        }
    }
    const isLoading = ref<boolean>(false)

    async function submit() {
        try{
            isLoading.value = true

            await useFetch('/sanctum/csrf-cookie', {
                baseURL: useRuntimeConfig().public.apiUrl,
                credentials: 'include',
                server: false,
            })

            const formData = new FormData()
            Object.entries(credentials.value).forEach(([key, value]) => {
                if (key === 'remember_me') {
                    formData.append('remember_me', value ? '1' : '0')
                } else if (value !== null) {
                    formData.append(key, value as any)
                }
            })

            const res:any = await $fetch('/api/v1/users/register-cookie', {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'POST',
                body: formData,
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
            }

            setUser(user, credentials.value.remember_me)

            navigateTo('/')
            toast.success(res.message)
        } catch (err: any) {
            toast.error(err.data?.message || 'Echec de la connexion')
            isLoading.value = !isLoading.value
        } finally {
            isLoading.value = false
        }
    }
</script>

<style scoped>
    
</style>