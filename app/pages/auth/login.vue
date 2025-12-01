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
                <form>
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" placeholder="kouamarie@gmail.com" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <div class="flex items-center">
                                <Label for="password">Mot de passe</Label>
                                <a
                                    href="#"
                                    class="ml-auto inline-block text-sm underline"
                                >
                                    Mot de passe oublié?
                                </a>
                            </div>
                            <Input id="password" type="password" placeholder="••••••••"/>
                        </div>
                        <Button class="flex-1">
                            Se connecter
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
                <Button variant="secondary" class="flex-1 hover:bg-gray-200 dark:hover:bg-gray-950">
                    <GoogleIcon />
                    Google
                </Button>
                <Button variant="secondary" class="flex-1 hover:bg-gray-200 dark:hover:bg-gray-950">
                    <GithubIcon />
                    GitHub
                </Button>
            </CardFooter>
            <CardAction class="w-full text-center text-sm">
                <span>Pas encore de compte ?</span>
                <NuxtLink to="/auth/register" class="text-primary">
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
    import GoogleIcon from '@/components/icons/GoogleIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
</script>

<style scoped>
    
</style>