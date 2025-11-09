<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  as: { type: String, default: 'button' }, // 'button', 'a', ou 'router-link'
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
  variant: { type: String, default: 'neutral' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  disabled: { type: Boolean, default: false },
})

const variantClasses = {
  neutral:
    'text-white bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-zinc-500',
  primary:
    'text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700',
  secondary:
    'text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-300 dark:bg-secondary-500 dark:hover:bg-secondary-600 dark:focus:ring-secondary-700',
  tertiary:
    'text-white bg-tertiary-600 hover:bg-tertiary-700 focus:ring-tertiary-300 dark:bg-tertiary-500 dark:hover:bg-tertiary-600 dark:focus:ring-tertiary-700',
  info: 'text-white bg-info-600 hover:bg-info-700 focus:ring-info-300 dark:bg-info-500 dark:hover:bg-info-600 dark:focus:ring-info-700',
  success:
    'text-white bg-success-600 hover:bg-success-700 focus:ring-success-300 dark:bg-success-500 dark:hover:bg-success-600 dark:focus:ring-success-700',
  error:
    'text-white bg-error-600 hover:bg-error-700 focus:ring-error-300 dark:bg-error-500 dark:hover:bg-error-600 dark:focus:ring-error-700',
  warning:
    'text-white bg-warning-600 hover:bg-warning-700 focus:ring-warning-300 dark:bg-warning-500 dark:hover:bg-warning-600 dark:focus:ring-warning-700',
  transparent:
    'bg-transparent border border-zinc-300 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-200 focus:ring-zinc-300 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-800 dark:focus:ring-zinc-500',
  disabled: 'text-zinc-800 dark:text-zinc-200 opacity-50 cursor-not-allowed pointer-events-none',
}

const sizeClasses = {
  xs: 'px-3 py-2 text-xs text-center',
  sm: 'px-3 py-2 text-sm text-center',
  md: 'px-5 py-2.5 text-sm text-center',
  lg: 'px-5 py-3 text-base text-center',
  xl: 'px-6 py-3.5 text-base text-center',
}
</script>

<template>
  <component
    :is="as === 'router-link' ? RouterLink : as"
    :to="as === 'router-link' ? to : undefined"
    :href="as === 'a' ? href : undefined"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="as === 'button' ? disabled : undefined"
    class="inline-flex items-center justify-center px-4 py-2 font-medium rounded-lg focus:outline-none focus:ring-2 transition-colors duration-150 focus:ring-offset-2 cursor-pointer"
    :class="[variantClasses[disabled ? 'disabled' : variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
