<script setup>
import { FormWrapper, Textarea, TextInput } from '@/components'
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
})
</script>

<template>
    <FormWrapper :submit-handler="console.log('OK')">
        <div class="space-y-6 max-w-4xl mx-auto mt-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextInput label="Nom complet" v-model="form.name" placeholder="Entrez votre nom" required />

                <TextInput type="email" label="Adresse email" v-model="form.email" placeholder="exemple@email.com"
                    required />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextInput label="Numéro de téléphone" type="tel" v-model="form.phone"
                    placeholder="Votre numéro de téléphone" />

                <TextInput label="Sujet" v-model="form.subject" placeholder="Sujet de votre message" />
            </div>

            <Textarea label="Message" v-model="form.message" placeholder="Votre message..." required />
        </div>
    </FormWrapper>
</template>
