<template>
    <section class="flex flex-col items-center my-24">
        <h2 class="text-3xl font-bold text-balance">Contactez-moi</h2>
        <p class="lg:text-base text-center py-6">Une question ? Un projet ? N'hésitez pas à me contacter</p>
    </section>
    <section class="flex flex-col lg:flex-row content-center gap-4 lg:px-32">
        <Card class="flex-1 bg-background-footer border-border/10">
            <CardHeader>
                <CardTitle class="text-base">Envoyez un message</CardTitle>
                <CardDescription>
                    Je vous répondrai dans les plus brefs délais
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a
                                href="#"
                                class="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </a>
                            </div>
                            <Input id="password" type="password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter class="flex flex-col gap-2">
                <Button class="w-full">
                    Login
                </Button>
                <Button variant="outline" class="w-full">
                    Login with Google
                </Button>
            </CardFooter>
        </Card>
        <div class="flex-1 flex flex-col gap-4">
            <Card class="flex-1 bg-background-footer border-border/10">
                <CardHeader>
                    <CardTitle class="text-base">Informations de contact</CardTitle>
                </CardHeader>
            </Card>
            <Card class="flex-1 bg-background-footer border-border/10">
                <CardHeader>
                    <CardTitle class="text-base">Réseaux sociaux</CardTitle>
                </CardHeader>
            </Card>
        </div>
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
</script>

<style scoped>
    
</style>