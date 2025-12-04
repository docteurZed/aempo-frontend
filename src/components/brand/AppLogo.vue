<script setup>
import { useConfigStore } from '@/stores/configStore'

const config = useConfigStore()
</script>

<template>
    <h1 class="text-2xl uppercase font-bold text-primary tracking-wide">
        <RouterLink :to="{ name: 'home' }">{{ config.state.name }}</RouterLink>
    </h1>
</template>
