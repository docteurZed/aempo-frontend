<script setup>
import { ref, provide } from 'vue'
import { addToast } from '@/composables'
import { Button } from '@/components'

const props = defineProps({
    submitHandler: { type: Function, required: true },
})

const loading = ref(false)
const fieldErrors = ref({})

provide('formErrors', fieldErrors)

function clearErrors() {
    fieldErrors.value = {}
}

function normalizeErrors(err) {
    if (err?.response?.data?.errors) {
        const apiErrors = err.response.data.errors
        const flat = {}

        for (const key in apiErrors) {
            flat[key] = apiErrors[key][0]
        }

        return flat
    }

    return {}
}

async function onSubmit(e) {
    e.preventDefault()
    clearErrors()
    loading.value = true

    const fd = new FormData(e.target)
    const data = Object.fromEntries(fd.entries())

    try {
        await props.submitHandler(data)
    } catch (err) {
        const errors = err?.response?.data?.errors || null

        if (errors) {
            console.table(errors)

            Object.values(errors).forEach(messages => {
                messages.forEach(msg => {
                    addToast({ message: msg, variant: 'error' })
                })
            })

            fieldErrors.value = normalizeErrors(err)
        } else {
            const message = err?.response?.data?.message || err?.message || 'Une erreur est survenue.'
            addToast({ message, variant: 'error' })
        }
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <form @submit="onSubmit" class="space-y-4">
        <slot />

        <div class="mt-4">
            <slot name="actions">
                <Button variant="primary" type="submit" :disabled="loading">
                    {{ loading ? 'Chargement...' : 'Envoyer' }}
                </Button>
            </slot>
        </div>
    </form>
</template>
