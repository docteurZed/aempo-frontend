<script setup>
import { FormWrapper, TextInput } from '@/components'
import { addToast } from '@/composables'
import { getSettings, updateSettings } from '@/services'
import { onMounted, ref } from 'vue'

const group = 'finance'
const settings = ref(null)
const form = ref({
    membership_fee: { id: null, key: 'name', value: '', type: '', group: group },
    currency: { id: null, key: 'full_name', value: '', type: '', group: group },
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
    const updates = Object.values(form.value)

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
                <TextInput v-model="form.membership_fee.value" label="Frais d'adhésion" />
                <TextInput v-model="form.currency.value" label="Monnaie" />
            </div>
        </FormWrapper>
    </div>
</template>