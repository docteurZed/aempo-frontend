<script setup>
import { ref, onMounted, onUnmounted, defineExpose } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(false)

const props = defineProps({
  placement: { type: String, default: 'center' },
  size: { type: String, default: 'md' },
})

const placementClasses = {
  center: 'justify-center items-center',
  'middle-left': 'justify-start items-center',
  'middle-right': 'justify-end items-center',
  'top-center': 'justify-center items-start',
  'bottom-center': 'justify-center items-end',
  'top-left': 'justify-start items-start',
  'top-right': 'justify-end items-start',
  'bottom-left': 'justify-start items-end',
  'bottom-right': 'justify-end items-end',
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

const show = () => (isOpen.value = true)
const hide = () => (isOpen.value = false)
defineExpose({ show, hide })

const handleKeydown = (e) => {
  if (e.key === 'Escape') hide()
}

const handleBackdropClick = (e) => {
  if (e.target.dataset.modalBackdrop === 'true') hide()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <transition name="fade-slide">
    <div
      v-if="isOpen"
      @click="handleBackdropClick"
      data-modal-backdrop="true"
      :class="['fixed inset-0 z-50 flex bg-black/80 p-4', placementClasses[placement]]"
    >
      <div
        :class="[
          'bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg w-full relative',
          sizeClasses[size],
        ]"
      >
        <!-- Header -->
        <div
          class="flex items-center p-4 border-b border-zinc-300 dark:border-zinc-700 rounded-t"
          :class="$slots.header ? 'justify-between' : 'justify-end'"
        >
          <h3 v-if="$slots.header" class="text-lg font-semibold text-zinc-900 dark:text-white">
            <slot name="header" />
          </h3>
          <button
            type="button"
            @click="hide"
            class="text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white rounded-lg p-1.5 cursor-pointer"
          >
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 space-y-4 text-zinc-700 dark:text-zinc-300">
          <slot />
        </div>

        <!-- Footer -->
        <div
          v-if="$slots.footer"
          class="p-4 border-t border-zinc-300 dark:border-zinc-700 flex justify-end space-x-2"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
