<script setup>
import { ref, computed } from 'vue'
import {
  XMarkIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/vue/24/solid'

const props = defineProps({
  variant: {
    type: String,
    default: 'neutral',
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
})

const isVisible = ref(true)

const variants = [
  'neutral',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'error',
  'info',
  'warning',
]

const iconComponent = computed(() => {
  switch (props.variant) {
    case 'info':
      return InformationCircleIcon
    case 'success':
      return CheckCircleIcon
    case 'warning':
      return ExclamationTriangleIcon
    default:
      return QuestionMarkCircleIcon
  }
})

const textClasses = {
  neutral: 'text-zinc-600 dark:text-zinc-500',
  primary: 'text-primary-600 dark:text-primary-500',
  secondary: 'text-secondary-600 dark:text-secondary-500',
  tertiary: 'text-tertiary-600 dark:text-tertiary-500',
  success: 'text-success-600 dark:text-success-500',
  error: 'text-error-600 dark:text-error-500',
  info: 'text-info-600 dark:text-info-500',
  warning: 'text-warning-600 dark:text-warning-500',
}

const borderClasses = {
  neutral: 'border-zinc-600 dark:border-zinc-500',
  primary: 'border-primary-600 dark:border-primary-500',
  secondary: 'border-secondary-600 dark:border-secondary-500',
  tertiary: 'border-tertiary-600 dark:border-tertiary-500',
  success: 'border-success-600 dark:border-success-500',
  error: 'border-error-600 dark:border-error-500',
  info: 'border-info-600 dark:border-info-500',
  warning: 'border-warning-600 dark:border-warning-500',
}

const focusClasses = {
  neutral: 'focus:ring-zinc-600 dark:focus:ring-zinc-500',
  primary: 'focus:ring-primary-600 dark:focus:ring-primary-500',
  secondary: 'focus:ring-secondary-600 dark:focus:ring-secondary-500',
  tertiary: 'focus:ring-tertiary-600 dark:focus:ring-tertiary-500',
  success: 'focus:ring-success-600 dark:focus:ring-success-500',
  error: 'focus:ring-error-600 dark:focus:ring-error-500',
  info: 'focus:ring-info-600 dark:focus:ring-info-500',
  warning: 'focus:ring-warning-600 dark:focus:ring-warning-500',
}
</script>

<template>
  <transition
    name="fade"
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-3"
  >
    <div
      v-if="isVisible"
      :class="[
        'p-4 border-l-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-sm mb-4',
        borderClasses[variant],
      ]"
      role="alert"
    >
      <div class="flex items-center">
        <component :is="iconComponent" :class="['shrink-0 w-5 h-5', textClasses[variant]]" />

        <div :class="['ms-3 font-medium', textClasses[variant]]">
          <slot name="title">Titre de l'alerte</slot>
        </div>

        <button
          v-if="dismissible"
          type="button"
          @click="isVisible = false"
          :class="[
            'ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-zinc-300 inline-flex items-center justify-center h-8 w-8 dark:hover:bg-zinc-700',
            textClasses[variant],
            focusClasses[variant],
          ]"
          aria-label="Close"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>

      <div v-if="$slots.description" :class="['mt-2 mb-4 text-sm', textClasses[variant]]">
        <slot name="description" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
