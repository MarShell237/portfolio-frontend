<template>
    <section class="flex flex-col items-center lg:mt-24">
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
                <form @submit.prevent="handleSubmit" class="flex flex-col h-full gap-4">
                    <div class="flex flex-col gap-2">
                            <Label for="object" class="flex gap-0"><span>Objet</span><span class="text-red-500">*</span></Label>
                            <div class="flex gap-2">
                                <Input required @focus="handleFocus" v-model="contactData.object" id="object" type="text" placeholder="Ex: Demande de devis"/>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger as-child>
                                            <Label for="attachment" @click="handleFocus" class="border border-border/10 rounded-lg p-2 h-full cursor-pointer">
                                                <X v-if="contactData.attachment" class="w-4 h-4 text-red-500"/>
                                                <Paperclip v-else class="w-4 h-4 text-gray-500"/>
                                            </Label>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p v-if="contactData.attachment">Supprimez le fichier joint</p>
                                            <p v-else>Joignez un fichier si nécessaire</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <Input :key="fileKey" @click="resetAttachment" @change="onFileChange" id="attachment" type="file" class="hidden"/>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 flex-1">
                            <Label for="message" class="flex gap-0"><span>Message</span><span class="text-red-500">*</span></Label>
                            <Textarea required @focus="handleFocus" v-model="contactData.message" id="message" placeholder="Votre message..." class="flex-1 min-h-32"/> 
                        </div>               
                    <Button :disabled="isButtonDisabled" class="w-full cursor-pointer">
                        <Spinner v-show="isLoading"/>    
                        {{ isLoading ? 'Envoi en cours…' : 'Envoyer le message' }}
                    </Button>
                </form>
            </CardContent>
        </Card>
        <div class="flex-1 flex flex-col gap-4">
            <Card class="flex-1 bg-background-footer border-border/10">
                <CardHeader>
                    <CardTitle class="text-base">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
            </Card>
            <Card class="flex-1 bg-background-footer border-border/10">
                <CardHeader>
                    <CardTitle class="text-base">Réseaux sociaux</CardTitle>
                </CardHeader>
                <CardContent>
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
    import { Spinner } from '@/components/ui/spinner'
    import {
        Tooltip,
        TooltipContent,
        TooltipProvider,
        TooltipTrigger,
    } from '@/components/ui/tooltip'
    import LinkCard from '@/components/LinkCard.vue'
    import { Mail } from 'lucide-vue-next';
    import { MapPinned } from 'lucide-vue-next';
    import WhatsappBusinessIcon from '@/components/icons/WhatsappBusinessIcon.vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue'
    import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
    import { toast } from 'vue-sonner'
    import { useAuth } from '@/composables/useAuth'
    import { Paperclip } from 'lucide-vue-next';
    import { X } from 'lucide-vue-next';

    const { isLoggedIn } = useAuth()

    const contactInfo = [
        {href: "mailto:marcelj.djiofack@outlook.com", title: "Email", subtitle: "marcelj.djiofack@outlook.com", icon: Mail},
        {href: "https://maps.app.goo.gl/fcqPmJsrndHLLYAQ7?g_st=awb", title: "Localisation", subtitle: "Dschang, Cameroun 🇨🇲", icon: MapPinned},
    ]

    const socialNetwork = [
        {href: "https://wa.me/237697815095", title: "Whatsapp", subtitle: "Marcel J. DJIOFACK", icon: WhatsappBusinessIcon},
        {href: "https://github.com/MarShell237", title: "Github", subtitle: "MarShell237", icon: GithubIcon},
        {href: "https://www.linkedin.com/in/marcel-j-djiofack-3b936b264/", title: "Linkedin", subtitle: "marcel-j-djiofack", icon: LinkedinIcon},
    ]

    const isLoading = ref(false)
    const fileKey = ref(0)
    const mounted = ref(false)
    const contactData = ref<{
                                object: string,
                                attachment: File | null,
                                message: string,
                        }>({
                                object: '',
                                attachment: null,
                                message: '',
                        })

    const isButtonDisabled = computed(() => {
        if (!mounted.value) return false
        return !isLoggedIn.value || isLoading.value
    })

    onMounted(() => {
        mounted.value = true
    })

    const onFileChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        if (target.files && target.files[0]) {
            contactData.value.attachment = target.files[0]
        }
    }

    function handleFocus() {
        if (!isLoggedIn.value) {
            navigateTo('/login')
            toast.info("Vous devez être connecté pour contacter l'administrateur.")
        }
    }

    const resetForm = () => {
        fileKey.value++
        contactData.value.attachment = null
        contactData.value.object = ''
        contactData.value.message = ''
    }

    const resetAttachment = () => {
        if(contactData.value.attachment){
            contactData.value.attachment = null
            fileKey.value++
        }
    }

    async function handleSubmit(){
        try{
            isLoading.value = true

            const formData = new FormData()

            formData.append("object", contactData.value.object)
            formData.append("message", contactData.value.message)

            if (contactData.value.attachment) {
                formData.append("attachment", contactData.value.attachment)
            }

            const res:any = await $fetch('/api/v1/notifications', {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'POST',
                body: formData,
                credentials: 'include',
                headers: {
                    'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value || '',
                    Accept: 'application/json',
                },
            })

            resetForm()
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