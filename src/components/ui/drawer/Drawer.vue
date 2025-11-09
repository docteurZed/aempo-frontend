<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref, computed, defineProps, defineExpose } from 'vue'

const props = defineProps({
  placement: {
    type: String,
    default: 'right',
    validator: (v) => ['top', 'right', 'bottom', 'left'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v),
  },
  dismissible: {
    type: Boolean,
    default: true,
  },
})

const sizeClasses = {
  sm: 'w-64 h-32',
  md: 'w-80 h-64',
  lg: 'w-96 h-80',
  xl: 'w-[480px] h-[400px]',
}

const isOpen = ref(false)
const show = () => (isOpen.value = true)
const hide = () => (isOpen.value = false)
defineExpose({ show, hide })

const drawerClasses = computed(() => {
  const size = sizeClasses[props.size] || sizeClasses.md
  switch (props.placement) {
    case 'top':
      return `top-0 left-0 right-0 ${size.split(' ')[1]} transform transition-transform ${isOpen.value ? 'translate-y-0' : '-translate-y-full'}`
    case 'bottom':
      return `bottom-0 left-0 right-0 ${size.split(' ')[1]} transform transition-transform ${isOpen.value ? 'translate-y-0' : 'translate-y-full'}`
    case 'left':
      return `top-0 left-0 h-screen ${size.split(' ')[0]} transform transition-transform ${isOpen.value ? 'translate-x-0' : '-translate-x-full'}`
    case 'right':
      return `top-0 right-0 h-screen ${size.split(' ')[0]} transform transition-transform ${isOpen.value ? 'translate-x-0' : 'translate-x-full'}`
  }
})
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-40" @click="hide"></div>

  <div
    :class="[
      'fixed z-50 bg-zinc-200 dark:bg-zinc-800 p-4 overflow-auto rounded-b shadow-lg duration-500',
      drawerClasses,
    ]"
  >
    <button
      v-if="dismissible"
      @click="hide"
      class="absolute top-2.5 end-2.5 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white flex items-center justify-center rounded-lg p-1.5 cursor-pointer"
    >
      <XMarkIcon class="w-5 h-5" />
    </button>

    <div class="text-gray-800 dark:text-gray-200">
      <slot />
    </div>
  </div>
</template>
