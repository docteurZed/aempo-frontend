<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  as: { type: String, default: 'a' }, // 'a' ou 'router-link'
  href: { type: String, default: '#' },
  to: { type: [String, Object], default: null },
  variant: { type: String, default: 'neutral' },
})

const variants = [
  'neutral',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'error',
  'info',
  'warning',
  'light'
]

const generateClasses = (prefixes) => {
  const classes = {}
  for (const variant of variants) {
    const color = variant === 'neutral' ? 'zinc' : variant
    classes[variant] = prefixes.map((p) => p.replace(/\*/g, color)).join(' ')
  }
  return classes
}

const textClasses = generateClasses(['text-*-500', 'dark:text-*-500'])
textClasses.neutral = 'text-zinc-700 dark:text-zinc-300'

const focusClasses = generateClasses(['focus:ring-*-600', 'dark:focus:ring-*-500'])

const linkClasses = computed(() => [
  'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 rounded-md cursor-pointer',
  textClasses[props.variant],
  focusClasses[props.variant],
])
</script>

<template>
  <component :is="as === 'router-link' ? RouterLink : 'a'" :to="as === 'router-link' ? to : undefined"
    :href="as === 'a' ? href : undefined" :class="[variant !== 'light' ? linkClasses : 'text-zinc-400']">
    <slot />
  </component>
</template>
