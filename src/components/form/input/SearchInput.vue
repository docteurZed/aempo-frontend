<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  id: { type: [String, Number], default: 'search-input' },
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  name: { type: String, default: '' },
  placeholder: { type: String, default: 'Rechercher...' },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'search'])

const borderClasses = computed(() =>
  props.error
    ? 'border-red-600 dark:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 focus:border-red-600 dark:focus:border-red-500'
    : 'border-zinc-400 dark:border-zinc-600 focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500',
)

function handleInput(e) {
  emit('update:modelValue', e.target.value)
  emit('search', e.target.value)
}
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="block mb-2 font-semibold text-zinc-900 dark:text-white">
      {{ label }}
    </label>

    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <MagnifyingGlassIcon class="w-5 h-5 text-zinc-500" />
      </span>
      <input
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="handleInput"
        type="text"
        class="bg-zinc-200 text-zinc-800 text-sm rounded-lg block w-full p-2.5 pl-8 dark:bg-zinc-800 dark:text-zinc-200 placeholder-zinc-600 dark:placeholder-zinc-500 border"
        :class="borderClasses"
      />
    </div>

    <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ error }}
    </p>
  </div>
</template>
