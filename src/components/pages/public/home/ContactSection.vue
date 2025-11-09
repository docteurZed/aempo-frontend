<script setup>
import Button from '@/components/ui/button/Button.vue'
import Section from '../Section.vue'

import { ref } from 'vue'
import Modal from '@/components/ui/modal/Modal.vue'
import TextInput from '@/components/form/input/TextInput.vue'
import Textarea from '@/components/form/input/Textarea.vue'

const name = ref('')
const email = ref('')
const message = ref('')

let contactModal = ref(null)

const submitForm = () => {
    console.log({ name: name.value, email: email.value, message: message.value })
    contactModal.value.hide()
    // ici tu peux ajouter ton API call
}
</script>

<template>
    <Section class="relative overflow-hidden text-center text-white py-12 md:py-16">
        <!-- Fond dégradé -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700"></div>
        <div class="absolute inset-0 bg-black/30"></div>

        <div class="relative max-w-3xl mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
                Contactez-nous
            </h2>
            <p class="text-lg md:text-xl text-zinc-200 mb-8">
                Vous avez une question, une suggestion ou souhaitez collaborer ? Écrivez-nous !
            </p>

            <Button variant="secondary" size="lg" @click="contactModal.show()">
                Envoyer un message
            </Button>
        </div>

        <!-- Dégradé bas -->
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>

        <!-- Modal Contact -->
        <Modal ref="contactModal" size="md">
            <template #header>
                Envoyer un message
            </template>

            <div class="space-y-4 text-left">
                <TextInput v-model="name" label="Nom complet" placeholder="Votre nom" required />
                <TextInput v-model="email" label="Email" type="email" placeholder="Votre email" required />
                <Textarea v-model="message" label="Message" placeholder="Votre message" required rows="5" />
            </div>

            <template #footer>
                <Button variant="primary" size="md" @click="submitForm">
                    Envoyer
                </Button>
            </template>
        </Modal>
    </Section>
</template>
