<script setup>
import { onMounted, ref } from 'vue'
import { FormWrapper, Textarea, TextInput } from '@/components'
import { getSettings, updateSettings } from '@/services'
import { addToast } from '@/composables'

const group = 'general'
const settings = ref(null)
const form = ref({
    name: { id: null, key: 'name', value: '', type: '', group: group },
    full_name: { id: null, key: 'full_name', value: '', type: '', group: group },
    email: { id: null, key: 'email', value: '', type: '', group: group },
    phone: { id: null, key: 'phone', value: '', type: '', group: group },
    address: { id: null, key: 'address', value: '', type: '', group: group },
    description: { id: null, key: 'description', value: '', type: '', group: group }
})

onMounted(async () => {
    settings.value = await getSettings(group)

    for (const item of settings.value) {
        form.value[item.key] = {
            id: item.id,
            key: item.key,
            value: item.value,
            type: item.type,
            group: item.group
        }
    }
})

async function submit() {
    const updates = Object.values(form.value).filter(s => s.id != null)

    for (const setting of updates) {
        await updateSettings(setting.id, setting)
    }

    addToast({message: 'Paramètres mis à jour avec succès', variant: 'success'})
}
</script>

<template>
    <div class="space-y-4">
        <FormWrapper :submitHandler="submit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput name="name" v-model="form.name.value" label="Nom" required />

                <TextInput name="full_name" v-model="form.full_name.value" label="Nom complet" />

                <TextInput name="email" v-model="form.email.value" type="email" label="Email" required />

                <TextInput name="phone" v-model="form.phone.value" type="tel" label="Téléphone" />

                <div class="md:col-span-2">
                    <Textarea name="address" v-model="form.address.value" label="Adresse" />
                </div>

                <div class="md:col-span-2">
                    <Textarea name="description" v-model="form.description.value" label="Description" />
                </div>
            </div>
        </FormWrapper>
    </div>
</template>
