<script setup>
import { ref, onMounted, onUnmounted, provide, computed } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'
import Button from '@/components/ui/button/Button.vue'

const props = defineProps({
  label: { type: String, default: 'Dropdown' },
  align: { type: String, default: 'left' },
  buttonVariant: { type: String, default: 'neutral' },
  size: { type: String, default: 'md', validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v) },
})

const isOpen = ref(false)
const dropdownRef = ref(null)

const toggle = () => (isOpen.value = !isOpen.value)
const close = () => (isOpen.value = false)

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) close()
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))

provide('closeDropdown', close)

const sizeClasses = {
  sm: 'w-32',
  md: 'w-48',
  lg: 'w-64',
  xl: 'w-80',
}

const menuWidthClass = computed(() => sizeClasses[props.size] || sizeClasses.md)
</script>

<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <!-- Bouton / label -->
    <div class="inline-flex justify-between items-center cursor-pointer" @click="toggle">
      <slot name="label">
        <Button :variant="buttonVariant" class="inline-flex items-center">
          {{ label }}
          <ChevronDownIcon v-if="!isOpen" class="w-4 h-4 ml-2" />
          <ChevronUpIcon v-else class="w-4 h-4 ml-2" />
        </Button>
      </slot>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        :class="[
          'absolute mt-2 bg-white dark:bg-zinc-800 rounded-md shadow-lg border border-zinc-200 dark:border-zinc-700 z-50',
          align === 'right' ? 'right-0' : 'left-0',
          menuWidthClass,
        ]"
      >
        <slot />
      </div>
    </transition>
  </div>
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
