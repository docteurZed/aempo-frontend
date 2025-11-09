<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'neutral',
  },
})

const variantClasses = {
  neutral: 'bg-zinc-600 dark:bg-zinc-500',
  primary: 'bg-primary-600 dark:bg-primary-500',
  secondary: 'bg-secondary-600 dark:bg-secondary-500',
  tertiary: 'bg-tertiary-600 dark:bg-tertiary-500',
  info: 'bg-info-600 dark:bg-info-500',
  success: 'bg-success-600 dark:bg-success-500',
  error: 'bg-error-600 dark:bg-error-500',
  warning: 'bg-warning-600 dark:bg-warning-500',
}
</script>

<template>
  <span
    :class="[
      'text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm text-white text-center',
      variantClasses[variant],
    ]"
  >
    <slot />
  </span>
</template>
