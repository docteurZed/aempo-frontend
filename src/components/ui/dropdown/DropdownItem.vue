<script setup>
import { inject } from 'vue'

const props = defineProps({
  divider: { type: Boolean, default: false },
})

const closeDropdown = inject('closeDropdown', null)
</script>

<template>
  <div>
    <div
      v-if="!divider"
      @click="closeDropdown?.()"
      class="px-4 py-2 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer rounded-sm"
    >
      <slot />
    </div>
    <div v-else class="border-t border-zinc-300 dark:border-zinc-700" />
  </div>
</template>
