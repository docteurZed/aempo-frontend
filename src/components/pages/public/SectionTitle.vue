<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Titre de la section',
  },
  subtitle: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'center',
    validator: (v) => ['left', 'center', 'right'].includes(v),
  },
})

const alignClasses = {
  center: 'text-center justify-center',
  left: 'text-left justify-start',
  right: 'text-right justify-end',
}
</script>

<template>
  <div :class="['mb-12', alignClasses[align]]">
    <h2 class="text-3xl md:text-4xl font-extrabold text-primary-500 dark:text-primary-500 mb-2">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="text-zinc-600 text-lg dark:text-zinc-400 mb-2">
      {{ subtitle }}
    </p>

    <div :class="['flex', alignClasses[align]]">
      <span class="w-32 h-2 bg-secondary-500 rounded-full"></span>
    </div>
  </div>
</template>
