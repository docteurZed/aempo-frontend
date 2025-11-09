<script setup>
import { toasts, removeToast } from '@/composables/ui/toastManager'
import {
  XMarkIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/vue/24/solid'

const props = defineProps({ placement: { type: String, default: 'top-right' } })

const icons = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XMarkIcon,
  neutral: QuestionMarkCircleIcon,
}

const placementClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
}
</script>

<template>
  <div :class="['fixed z-50 flex flex-col', placementClasses[props.placement]]">
    <transition-group name="toast" tag="div">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="flex items-center w-full max-w-xs p-4 mb-3 border-l-4 rounded-lg shadow bg-zinc-200 dark:bg-zinc-800"
        :class="{
          'border-info-600 dark:border-info-500 text-info-600 dark:text-info-500':
            t.variant === 'info',
          'border-success-600 dark:border-success-500 text-success-600 dark:text-success-500':
            t.variant === 'success',
          'border-warning-600 dark:border-warning-500 text-warning-600 dark:text-warning-500':
            t.variant === 'warning',
          'border-error-600 dark:border-error-500 text-error-600 dark:text-error-500':
            t.variant === 'error',
          'border-zinc-600 dark:border-zinc-500 text-zinc-600 dark:text-zinc-500':
            t.variant === 'neutral',
        }"
      >
        <component :is="icons[t.variant]" class="w-5 h-5 shrink-0" />
        <span class="ms-3 font-medium">{{ t.message }}</span>
        <button
          v-if="t.dismissible"
          @click="removeToast(t.id)"
          class="ms-auto p-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full"
        >
          <XMarkIcon class="w-4 h-4" />
        </button>
      </div>
    </transition-group>
  </div>
</template>
