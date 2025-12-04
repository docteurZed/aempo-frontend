<script setup>
import { FormWrapper, PasswordInput, Select, TextInput } from '@/components'
import { PublicWrapper, Section, SectionTitle } from '@/modules/public/components'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
    last_name: '',
    first_name: '',
    email: '',
    phone: '',
    date_of_birth: null,
    filiere: '',
    level: '',
    password: '',
    password_confirmation: '',
})

const errors = ref({})

function submitForm() {
    console.log('message')

    router.push({ name: 'adhesionPayement' })
}
</script>

<template>
    <PublicWrapper>
        <Section>
            <SectionTitle title="Adhésion" subtitle="Rejoignez notre association pour ensemble continuez l'aventure." />

            <div class="max-w-4xl mx-auto">

                <FormWrapper :submit-handler="submitForm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextInput label="Nom" v-model="form.last_name" id="last_name" :error="errors.last_name"
                            required />
                        <TextInput label="Prénoms" v-model="form.first_name" id="first_name" :error="errors.first_name"
                            required />
                        <TextInput label="Téléphone" type="tel" v-model="form.phone" id="phone" :error="errors.phone"
                            required />
                        <TextInput label="Email" type="email" v-model="form.email" id="email" :error="errors.email"
                            required />
                        <TextInput label="Date de naissance" type="date" id="date_of_birth" v-model="form.date_of_birth"
                            :error="errors.date_of_birth" required />

                        <Select label="Filière" v-model="form.filiere" :error="errors.filiere" id="filiere" :options="[
                            { label: 'Médecine', value: 'medecine' },
                            { label: 'Pharmacie', value: 'pharmacie' },
                            { label: 'Odontostomatologie', value: 'odonto' },
                        ]" required />

                        <Select label="Niveau" v-model="form.level" :error="errors.level" id="level" :options="[
                            { label: '1ère année', value: 'l1' },
                            { label: '2ème année', value: 'l2' },
                            { label: '3ème année', value: 'l3' },
                            { label: '4ème année', value: 'm1' },
                            { label: '5ème année', value: 'm2' },
                            { label: '6ème année', value: 'd1' },
                            { label: 'Internat', value: 'd2' },
                            { label: 'Année de thèse', value: 'd3' },
                            { label: 'Autre', value: 'other' },
                        ]" required />

                        <!-- <PasswordInput label="Mot de passe" :error="errors.password" v-model="form.password" required
                            id="password" />
                        <PasswordInput label="Confirmer le mot de passe" :error="errors.password_confirmation"
                            v-model="form.password_confirmation" required id="password_confirmation" /> -->
                    </div>
                </FormWrapper>
            </div>
        </Section>
    </PublicWrapper>
</template>
