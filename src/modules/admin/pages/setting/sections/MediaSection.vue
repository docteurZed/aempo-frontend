<script setup>
import { FormWrapper, TextInput } from '@/components'
import { addToast } from '@/composables'
import { getSettings, updateSettings } from '@/services'
import { onMounted, ref } from 'vue'

const group = 'media'
const settings = ref(null)
const form = ref({
    facebook: { id: null, key: 'name', value: '', type: '', group: group },
    instagram: { id: null, key: 'full_name', value: '', type: '', group: group },
    tiktok: { id: null, key: 'email', value: '', type: '', group: group },
    linkedin: { id: null, key: 'phone', value: '', type: '', group: group },
    x: { id: null, key: 'address', value: '', type: '', group: group },
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
                <TextInput v-model="form.facebook.value" label="Facebook" />
                <TextInput v-model="form.instagram.value" label="Instagram" />
                <TextInput v-model="form.tiktok.value" label="TikTok" />
                <TextInput v-model="form.linkedin.value" label="LinkedIn" />
                <TextInput v-model="form.x.value" label="Twitter (X)" />
            </div>
        </FormWrapper>
    </div>
</template>