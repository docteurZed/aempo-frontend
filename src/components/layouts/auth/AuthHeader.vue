<script setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue'

const props = defineProps({
  heading: String,
  subheading: String,
})
</script>

<template>
  <div class="flex justify-center">
    <ApplicationLogo />
  </div>

  <div class="text-center">
    <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-200">
      {{ heading }}
    </h2>
    <p v-if="subheading" class="text-zinc-600 dark:text-zinc-500 mt-1">
      {{ subheading }}
    </p>
  </div>
</template>
