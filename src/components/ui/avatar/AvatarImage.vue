<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  src: {
    type: String,
  },
  alt: {
    type: String,
    default: 'Avatar',
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

const sizeClasses = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
}

const roundedClass = props.roundedFull ? 'rounded-full' : 'rounded-sm'

const ringClass = props.ring ? 'ring-2' : ''

const ringColor = {
  neutral: 'ring-zinc-600 dark:ring-zinc-500',
  primary: 'ring-primary-600 dark:ring-primary-500',
  secondary: 'ring-secondary-600 dark:ring-secondary-500',
  tertiary: 'ring-tertiary-600 dark:ring-tertiary-500',
  success: 'ring-success-600 dark:ring-success-500',
  error: 'ring-error-600 dark:ring-error-500',
  info: 'ring-info-600 dark:ring-info-500',
  warning: 'ring-warning-600 dark:ring-warning-500',
}
</script>

<template>
  <img
    :class="[sizeClasses[size], roundedClass, ringClass, ringColor[ringVariant]]"
    :src="src"
    :alt="alt"
  />
</template>
