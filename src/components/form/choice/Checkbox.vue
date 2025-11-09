<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  name: { type: String, default: '' },
  id: { type: [String, Number], default: 'radio' },
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => emit('update:modelValue', !props.modelValue)
</script>

<template>
  <div class="flex items-center">
    <input
      :id="id"
      type="checkbox"
      :name="name"
      :checked="modelValue"
      @change="toggle"
      class="w-4 h-4 text-primary-600 dark:text-primary-400 bg-zinc-200 dark:bg-zinc-800 border-zinc-300 rounded-sm focus:ring-primary-500 focus:ring-1 dark:border-zinc-700"
    />
    <label :for="id" class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
      {{ label }}
    </label>
  </div>
</template>
