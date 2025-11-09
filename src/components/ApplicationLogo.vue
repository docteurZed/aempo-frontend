<script setup>
import Link from './ui/link/Link.vue'
</script>

<template>
    <h1 class="text-2xl uppercase font-bold text-primary-600 tracking-wide">
        <Link as="router-link" :to="{ name: 'home' }">
        <img src="../../public/img/logo.png" alt="Logo" class="w-24" />
        </Link>
    </h1>
</template>
