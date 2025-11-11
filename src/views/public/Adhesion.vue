<script setup>
import { ref } from 'vue'
import TextInput from '@/components/form/input/TextInput.vue'
import Select from '@/components/form/select/Select.vue'
import SelectItem from '@/components/form/select/SelectItem.vue'
import ImageDropzone from '@/components/form/input/ImageDropzone.vue'
import Radio from '@/components/form/choice/Radio.vue'
import Button from '@/components/ui/button/Button.vue'
import { addToast } from '@/composables/ui/toastManager'
import { useRouter } from 'vue-router'
import Section from '@/components/pages/public/Section.vue'
import SectionTitle from '@/components/pages/public/SectionTitle.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

const router = useRouter()

const form = ref({
    nom: '',
    prenom: '',
    filiere: '',
    niveau: '',
    ville: '',
    personne: '',
    contact: '',
    photo: null,
})

function handlePhoto(file) {
    form.value.photo = file
}

function goToPaiement() {
    if (!form.value.nom || !form.value.prenom || !form.value.filiere || !form.value.niveau) {
        addToast('Veuillez remplir les champs obligatoires.', 'error')
        return
    }

    if (!form.value.ville) {
        addToast('Sélectionnez la ville d’adhésion.', 'warning')
        return
    }

    if (!form.value.photo) {
        addToast('Ajoutez une photo passeport.', 'warning')
        return
    }

    const params = new URLSearchParams(form.value).toString()

    addToast('Informations enregistrées !', 'success')

    setTimeout(() => {
        router.push(`/adhesion-payement?${params}`)
    }, 1000)
}
</script>

<template>
    <PublicLayout>
        <Section>
            <SectionTitle title="Adhésion" subtitle="Rejoignez notre association pour ensemble continuez l'aventure." />

            <div class="max-w-4xl mx-auto p-6">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <TextInput label="Nom" v-model="form.nom" required />
                    <TextInput label="Prénom" v-model="form.prenom" required />

                    <Select label="Filière" v-model="form.filiere" required>
                        <SelectItem label="Médecine" value="Médecine" />
                        <SelectItem label="Pharmacie" value="Pharmacie" />
                        <SelectItem label="Odontostomatologie" value="Odontostomatologie" />
                    </Select>

                    <Select label="Niveau" v-model="form.niveau" required>
                        <SelectItem label="1ère année" value="1ère année" />
                        <SelectItem label="2ème année" value="2ème année" />
                        <SelectItem label="3ème année" value="3ème année" />
                        <SelectItem label="4ème année" value="4ème année" />
                        <SelectItem label="5ème année" value="5ème année" />
                        <SelectItem label="6ème année" value="6ème année" />
                        <SelectItem label="Internat" value="Internat" />
                        <SelectItem label="Alumni" value="Alumni" />
                    </Select>

                    <div class="md:col-span-2">
                        <p class="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Ville d’adhésion</p>

                        <Radio id="lome" label="Lomé" name="ville" value="Lomé" v-model="form.ville" />
                        <Radio id="kara" label="Kara" name="ville" value="Kara" v-model="form.ville" />
                    </div>

                    <TextInput label="Personne à prévenir" v-model="form.personne" />
                    <TextInput label="Contact de la personne" v-model="form.contact" />

                    <div class="md:col-span-2">
                        <ImageDropzone label="Photo Passeport" @file-selected="handlePhoto" />
                    </div>

                </div>

                <div class="mt-6">
                    <Button as="router-link" :to="{ name: 'adhesionPayement' }" variant="primary" @click="goToPaiement" class="w-full">Continuer</Button>
                </div>
            </div>
        </Section>
    </PublicLayout>
</template>
