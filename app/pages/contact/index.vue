<template>
    <section class="flex flex-col items-center mt-24">
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
            <CardContent class="h-full">
                <form class="flex flex-col h-full gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <Label for="text">Nom</Label>
                        <Input id="text" type="text" placeholder="Votre nom" />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>
                    <div class="flex flex-col space-y-1.5 flex-1">
                        <Label for="text">Message</Label>
                        <Textarea placeholder="Votre message..." class="flex-1"/>
                    </div>
                </form>
            </CardContent>
            <CardFooter class="flex flex-col gap-2">
                <Button class="w-full">
                    Envoyer le message
                </Button>
            </CardFooter>
        </Card>
        <div class="flex-1 flex flex-col gap-4">
            <Card class="flex-1 bg-background-footer border-border/10">
                <CardHeader>
                    <CardTitle class="text-base">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent>
                    <template>
                        <div class="space-y-2">
                            <LinkCard
                                v-for="(item, index) in contactInfo"
                                :key="index"
                                :href="item.href"
                                :title="item.title"
                                :subtitle="item.subtitle"
                            >
                                <component :is="item.icon" class="text-primary block" />
                            </LinkCard>
                        </div>
                    </template>
                </CardContent>
            </Card>
            <Card class="flex-1 bg-background-footer border-border/10">
                <CardHeader>
                    <CardTitle class="text-base">Réseaux sociaux</CardTitle>
                </CardHeader>
                <CardContent>
                    <template>
                        <div class="space-y-2">
                            <LinkCard
                                v-for="(item, index) in socialNetwork"
                                :key="index"
                                :href="item.href"
                                :title="item.title"
                                :subtitle="item.subtitle"
                            >
                                <component :is="item.icon" class="text-primary block w-6 h-6" />
                            </LinkCard>
                        </div>
                    </template>
                </CardContent>
            </Card>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { Button } from '@/components/ui/button'
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'
    import { Textarea } from '@/components/ui/textarea'
    import LinkCard from '@/components/LinkCard.vue'
    import { Mail } from 'lucide-vue-next';
    import { MapPinned } from 'lucide-vue-next';
    import WhatsappBusinessIcon from '@/components/icons/WhatsappBusinessIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
    import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'

    const contactInfo = [
        {href: "mailto:marcelj.djiofack@outlook.com", title: "Email", subtitle: "marcelj.djiofack@outlook.com", icon: Mail},
        {href: "https://maps.app.goo.gl/fcqPmJsrndHLLYAQ7?g_st=awb", title: "Localisation", subtitle: "Dschang, Cameroun 🇨🇲", icon: MapPinned},
    ]

    const socialNetwork = [
        {href: "https://wa.me/237697815095", title: "Whatsapp", subtitle: "Marcel J. DJIOFACK", icon: WhatsappBusinessIcon},
        {href: "https://github.com/MarShell237", title: "Github", subtitle: "MarShell237", icon: GithubIcon},
        {href: "https://www.linkedin.com/in/marcel-j-djiofack-3b936b264/", title: "Linkedin", subtitle: "marcel-j-djiofack", icon: LinkedinIcon},
    ]

</script>

<style scoped>
    
</style>