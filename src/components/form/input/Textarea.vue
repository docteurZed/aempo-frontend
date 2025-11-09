<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  id: { type: [String, Number], default: 'textarea' },
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  name: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  rows: { type: Number, default: 4 },
  helperText: { type: String, default: '' },
  error: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const borderClasses = computed(() =>
  props.error
    ? 'border-red-600 dark:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 focus:border-red-600 dark:focus:border-red-500'
    : 'border-zinc-400 dark:border-zinc-600 focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500',
)
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="block mb-2 font-semibold text-zinc-800 dark:text-zinc-200">
      {{ label }}
    </label>

    <textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :class="[
        'bg-zinc-200 text-zinc-800 text-sm rounded-lg block w-full p-2.5 pr-10 dark:bg-zinc-800 dark:text-zinc-200 placeholder-zinc-600 dark:placeholder-zinc-500 border',
        borderClasses,
      ]"
    ></textarea>

    <p v-if="helperText && !error" class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ helperText }}
    </p>
    <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ error }}
    </p>
  </div>
</template>
