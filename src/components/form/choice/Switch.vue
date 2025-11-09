<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: { type: [String, Number], default: 'switch' },
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  variant: { type: String, default: 'neutral' },
})

const variantClasses = {
  neutral: 'bg-zinc-500',
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  tertiary: 'bg-tertiary-500',
  success: 'bg-success-500',
  error: 'bg-error-500',
  info: 'bg-info-500',
  warning: 'bg-warning-500',
}

const emit = defineEmits(['update:modelValue'])
const isChecked = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <label :for="id" class="inline-flex items-center cursor-pointer select-none">
    <span v-if="label" class="mr-3 font-semibold text-zinc-900 dark:text-white">{{ label }}</span>
    <div
      :class="[
        'relative rounded-full transition-colors duration-200 ease-in-out w-11 h-6',
        isChecked ? variantClasses[variant] : 'bg-zinc-500',
      ]"
      @click="isChecked = !isChecked"
    >
      <span
        :class="[
          'absolute bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out w-5 h-5',
          isChecked ? `translate-x-full` : 'translate-x-0',
          'top-0.5 left-0.5',
        ]"
      ></span>
    </div>
  </label>
</template>
