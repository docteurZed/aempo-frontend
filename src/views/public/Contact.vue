<script setup>
import { ref } from 'vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import Section from '@/components/pages/public/Section.vue'
import SectionTitle from '@/components/pages/public/SectionTitle.vue'
import TextInput from '@/components/form/input/TextInput.vue'
import Textarea from '@/components/form/input/Textarea.vue'
import Button from '@/components/ui/button/Button.vue'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import Card from '@/components/ui/card/Card.vue'
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue'

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const handleSubmit = () => {
    console.log('Formulaire soumis :', form.value)
    alert('Message envoyé !')
}

const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: '/contact' },
]
</script>

<template>
    <PublicLayout>
        <OtherHeroSection title="Contactez-nous"
            subtitle="Nous sommes à votre écoute pour toute question ou collaboration."
            :breadcrumbItems="breadcrumbItems" backgroundImage="/img/image-4.jpg" />

        <Section>

            <SectionTitle title="Contactez-nous"
                subtitle="Nous sommes à votre écoute pour toute question ou information" />

            <div
                class="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div class="flex flex-col items-center justify-start gap-3 p-6">
                    <div
                        class="p-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-500 dark:text-primary-500">
                        <EnvelopeIcon class="w-6 h-6" />
                    </div>
                    <h3 class="font-bold text-primary-500 dark:text-primary-500 uppercase text-sm">
                        Email
                    </h3>
                    <a href="mailto:contact@aempo.org"
                        class="text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition text-center">
                        contact@aempo.org
                    </a>
                </div>

                <div class="flex flex-col items-center justify-start gap-3 p-6">
                    <div
                        class="p-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-500 dark:text-primary-500">
                        <PhoneIcon class="w-6 h-6" />
                    </div>
                    <h3 class="font-bold text-primary-500 dark:text-primary-500 uppercase text-sm">
                        Téléphone
                    </h3>
                    <p class="text-zinc-700 dark:text-zinc-300 text-center">
                        +228 90 12 34 56
                    </p>
                </div>

                <div class="flex flex-col items-center justify-start gap-3 p-6">
                    <div
                        class="p-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-500 dark:text-primary-500">
                        <MapPinIcon class="w-6 h-6" />
                    </div>
                    <h3 class="font-bold text-primary-500 dark:text-primary-500 uppercase text-sm">
                        Adresse
                    </h3>
                    <p class="text-zinc-700 dark:text-zinc-300 text-center">
                        Université de Lomé
                    </p>
                </div>
            </div>


            <form @submit.prevent="handleSubmit" class="space-y-6 max-w-3xl mx-auto mt-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput label="Nom complet" v-model="form.name" placeholder="Entrez votre nom" required />

                    <TextInput type="email" label="Adresse email" v-model="form.email" placeholder="exemple@email.com"
                        required />
                </div>

                <TextInput label="Sujet" v-model="form.subject" placeholder="Sujet de votre message" />

                <Textarea label="Message" v-model="form.message" placeholder="Votre message..." rows="5" required />

                <Button type="submit" variant="primary" size="lg" class="w-full">
                    Envoyer le message
                </Button>
            </form>

        </Section>
    </PublicLayout>
</template>
