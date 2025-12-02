<template>
    <section class="flex justify-center items-center my-8">
        <Card class="w-full max-w-md border-border/10 bg-background-footer">
            <CardHeader class="text-center">
                <CardTitle class="text-xl">Mot de passe oublié ?</CardTitle>
                <CardDescription>
                    <NuxtLink to="/login" class="flex justify-center items-center pnpmgap-1 text-primary">
                        <MoveLeft class="w-4 h-4"/> retour à la connexion
                    </NuxtLink>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="email" class="flex gap-0"><span>Email</span><span class="text-red-500">*</span></Label>
                            <Input id="email" required type="email" placeholder="aurore.beaureal@gmail.com" />
                        </div>
                        <Button class="flex-1 cursor-pointer">
                            Envoyer l'email
                        </Button>
                    </div>
                </form>
            </CardContent>
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
    import { MoveLeft} from 'lucide-vue-next'
</script>

<style scoped>
    
</style>