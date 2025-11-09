<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  roundedFull: {
    type: Boolean,
    default: false,
  },
  ring: {
    type: Boolean,
    default: false,
  },
  ringVariant: {
    type: String,
    default: 'neutral',
  },
})

const sizeMap = {
  xs: { box: 'w-6 h-6', text: 'text-xs' },
  sm: { box: 'w-8 h-8', text: 'text-sm' },
  md: { box: 'w-12 h-12', text: 'text-base' },
  lg: { box: 'w-16 h-16', text: 'text-xl' },
  xl: { box: 'w-24 h-24', text: 'text-2xl' },
}

const ringClassMap = {
  neutral: 'ring-zinc-600 dark:ring-zinc-500',
  primary: 'ring-primary-600 dark:ring-primary-500',
  secondary: 'ring-secondary-600 dark:ring-secondary-500',
  tertiary: 'ring-tertiary-600 dark:ring-tertiary-500',
  success: 'ring-success-600 dark:ring-success-500',
  error: 'ring-error-600 dark:ring-error-500',
  info: 'ring-info-600 dark:ring-info-500',
  warning: 'ring-warning-600 dark:ring-warning-500',
}

const sizeClass = computed(() => sizeMap[props.size].box)
const textSizeClass = computed(() => sizeMap[props.size].text)
const roundedClass = computed(() => (props.roundedFull ? 'rounded-full' : 'rounded-sm'))
const ringClass = computed(() => {
  if (!props.ring) return ''
  return `ring-2 ${ringClassMap[props.ringVariant] || 'ring-zinc-500 dark:ring-zinc-500'}`
})
</script>

<template>
  <div
    :class="[
      'relative inline-flex items-center justify-center overflow-hidden bg-zinc-300 dark:bg-zinc-700',
      sizeClass,
      roundedClass,
      ringClass,
    ]"
  >
    <span :class="['font-semibold text-zinc-600 dark:text-zinc-500', textSizeClass]">
      <slot />
    </span>
  </div>
</template>
