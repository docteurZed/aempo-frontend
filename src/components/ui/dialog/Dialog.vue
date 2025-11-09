<script setup>
import { defineExpose, onMounted, onUnmounted, ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(false)

const props = defineProps({
  placement: { type: String, default: 'center' },
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

const show = () => (isOpen.value = true)
const hide = () => (isOpen.value = false)
defineExpose({ show, hide })

const handleKeydown = (e) => {
  if (e.key === 'Escape') hide()
}

const handleBackdropClick = (e) => {
  if (e.target.dataset.dialogBackdrop === 'true') hide()
}

const emit = defineEmits(['confirm'])

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
      data-dialog-backdrop="true"
      :class="['fixed inset-0 z-60 flex bg-black/80 p-4', placementClasses[placement]]"
    >
      <div :class="['bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg w-full relative max-w-sm']">
        <div class="relative bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-sm">
          <button
            @click="hide"
            type="button"
            class="absolute top-3 end-2.5 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer"
          >
            <XMarkIcon class="w-5 h-5" />
          </button>
          <div class="p-4 md:p-5 text-center">
            <ExclamationCircleIcon
              class="mx-auto mb-4 text-zinc-800 w-12 h-12 dark:text-zinc-200"
            />
            <h3 class="mb-5 text-lg font-semibold text-gray-600 dark:text-gray-500">
              <slot>Êtes vous sûr(e) de vouloir effectuer cette action ?</slot>
            </h3>
            <Button @click="hide"> Annuler </Button>
            <Button variant="error" @click="emit('confirm')"> Confirmer </Button>
          </div>
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
