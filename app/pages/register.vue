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
                <form>
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="fullName" class="flex gap-0"><span>Nom complet</span><span class="text-red-500">*</span></Label>
                            <Input id="fullName" required type="text" placeholder="Atangana Alexandre" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="email" class="flex gap-0"><span>Email</span><span class="text-red-500">*</span></Label>
                            <Input id="email" required type="email" placeholder="atango.legrand@gmail.com" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="photo">Photo de profil</Label>
                            <Input id="photo" type="file" accept="image/*" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="password" class="flex gap-0"><span>Mot de passe</span><span class="text-red-500">*</span></Label>
                            <Input id="password" required type="password" placeholder="••••••••"/>
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="confirmPassword" class="flex gap-0"><span>Confirmer le mot de passe</span><span class="text-red-500">*</span></Label>
                            <Input id="confirmPassword" required type="password" placeholder="••••••••"/>
                        </div>
                        <div class="flex gap-2">
                            <Checkbox id="remember_me" class="cursor-pointer"/>
                            <Label for="remember_me" class="cursor-pointer">Se souvenir de moi</Label>
                        </div>
                        <p class="text-gray-500">
                            En créant un compte, vous acceptez notre
                            <NuxtLink to="/policy" class="text-green-500">Politique de confidentialité</NuxtLink>
                            et nos
                            <NuxtLink to="/condition" class="text-green-500">Conditions générales d'utilisation</NuxtLink>.
                        </p>
                        <Button class="flex-1 cursor-pointer">
                            S'inscrire
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
    import GoogleIcon from '@/components/icons/GoogleIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
</script>

<style scoped>
    
</style>