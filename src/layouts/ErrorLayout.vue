<script setup>
import { Button } from '@/components'

const props = defineProps({
    code: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 class="text-8xl font-extrabold text-secondary mb-4 animate-pulse">{{ code }}</h1>
        <p class="text-xl font-bold mb-2 text-default">{{ title }}</p>
        <p v-if="subtitle" class="text-muted font-semibold">
            {{ subtitle }}
        </p>

        <Button variant="primary" size="lg" as="router-link" :to="{ name: 'home' }" class="mt-6">
            Retour à l'accueil
        </Button>
    </div>
</template>
