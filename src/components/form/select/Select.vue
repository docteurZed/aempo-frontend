<script setup>
import {
  ref,
  computed,
  provide,
  defineProps,
  defineEmits,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue'
import { ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  id: { type: [String, Number], default: 'select' },
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Sélectionnez une option...' },
  filterable: { type: Boolean, default: false },
  helperText: { type: String, default: '' },
  error: { type: String, default: '' },
  modelValue: [String, Number],
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const search = ref('')
const selectRef = ref(null)

const selectedLabel = ref('')

const toggleDropdown = () => (isOpen.value = !isOpen.value)
const closeDropdown = () => (isOpen.value = false)

function selectOption(option) {
  emit('update:modelValue', option.value)
  selectedLabel.value = option.label
  isOpen.value = false
}

function handleClickOutside(e) {
  if (selectRef.value && !selectRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

provide('selectContext', {
  modelValue: props.modelValue,
  onSelect: selectOption,
  currentValue: computed(() => props.modelValue),
  search,
})

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    const options = selectRef.value?.querySelectorAll('[data-value]')
    if (!options) return
    for (const opt of options) {
      if (opt.getAttribute('data-value') == newValue) {
        selectedLabel.value = opt.getAttribute('data-label')
        break
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="mb-5 relative" ref="selectRef">
    <label v-if="label" :for="id" class="block mb-2 font-semibold text-zinc-900 dark:text-white">
      {{ label }}
    </label>

    <input v-if="name" type="hidden" :name="name" :value="modelValue" />

    <div
      @click="toggleDropdown"
      class="bg-zinc-200 dark:bg-zinc-800 border rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer text-sm text-zinc-800 dark:text-zinc-100 border-zinc-400 dark:border-zinc-600"
      :class="{ 'border-red-500': error }"
    >
      <span class="truncate">{{ selectedLabel || placeholder }}</span>
      <ChevronUpDownIcon class="w-5 h-5 text-zinc-500" />
    </div>

    <!-- Dropdown -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute z-50 mt-1 w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-700 rounded-lg shadow-lg overflow-hidden"
      >
        <div
          v-if="filterable"
          class="flex items-center px-2 py-2 border-b border-zinc-300 dark:border-zinc-700"
        >
          <MagnifyingGlassIcon class="w-4 h-4 text-zinc-500 mr-2" />
          <input
            v-model="search"
            type="text"
            placeholder="Rechercher..."
            class="w-full bg-transparent focus:outline-none text-sm text-zinc-800 dark:text-zinc-200 placeholder-zinc-500"
          />
        </div>

        <ul class="max-h-48 overflow-auto divide-y divide-zinc-300 dark:divide-zinc-700">
          <slot :search="search" />
        </ul>
      </div>
    </transition>

    <p v-if="helperText && !error" class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ helperText }}
    </p>
    <p v-if="error" class="mt-2 text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
