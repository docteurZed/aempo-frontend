<script setup>
import { inject } from 'vue'

const { toggle } = inject('dropdown')
</script>

<template>
    <div @click="toggle" class="cursor-pointer">
        <slot />
    </div>
</template>
