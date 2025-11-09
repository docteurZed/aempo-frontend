<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: { type: [String, Number], default: 'radio' },
  modelValue: [String, Number, Boolean],
  label: { type: String, default: '' },
  name: { type: String, default: '' },
  value: { type: [String, Number, Boolean], default: true },
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => emit('update:modelValue', props.value)
</script>

<template>
  <div class="flex items-center mb-4">
    <input
      :id="id"
      type="radio"
      :name="name"
      :checked="modelValue === value"
      @change="toggle"
      class="w-4 h-4 text-primary-600 dark:text-primary-400 bg-zinc-200 dark:bg-zinc-800 border-zinc-300 focus:ring-primary-500 focus:ring-1 dark:border-zinc-7000 rounded-full"
    />
    <label :for="id" class="ms-2 text-sm font-semibold text-zinc-900 dark:text-white">{{
      label
    }}</label>
  </div>
</template>
