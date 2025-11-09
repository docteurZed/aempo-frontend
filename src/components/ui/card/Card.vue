<script setup>
const props = defineProps({
  setPadding: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div
    :class="[
      'flex flex-col transition-all duration-200 rounded-lg shadow-sm border border-zinc-300 dark:border-zinc-700 bg-zinc-200/50 dark:bg-zinc-800/50 overflow-hidden text-zinc-800 dark:text-zinc-200',
    ]"
  >
    <div
      v-if="$slots.header"
      class="p-4 border-b border-zinc-300 dark:border-zinc-700 font-semibold"
    >
      <slot name="header" />
    </div>

    <div :class="['flex-1', setPadding ? 'p-4' : '']">
      <slot />
    </div>

    <div v-if="$slots.footer" class="p-4 border-t border-zinc-300 dark:border-zinc-700">
      <slot name="footer" />
    </div>
  </div>
</template>
