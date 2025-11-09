<script setup>
import { inject, computed, defineProps } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
})

const context = inject('selectContext')

const search = computed(() => context?.search?.value?.toLowerCase() || '')

const isVisible = computed(() => !search.value || props.label.toLowerCase().includes(search.value))

const selected = computed(() => context?.currentValue?.value === props.value)

function handleClick() {
  context?.onSelect({ label: props.label, value: props.value })
}
</script>

<template>
  <li
    v-if="isVisible"
    @click="handleClick"
    class="px-3 py-2 text-sm cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700 flex justify-between items-center transition-colors duration-150 text-zinc-800 dark:text-zinc-200"
  >
    <span>{{ label }}</span>
    <CheckIcon v-if="selected" class="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
  </li>
</template>
