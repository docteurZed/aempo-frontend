<script setup>
import { computed, watch } from 'vue'
import Button from '../ui/button/Button.vue'

const props = defineProps({
  totalRows: { type: Number, required: true },
  perPageOptions: { type: Array, default: () => [5, 10, 25, 50] },
  modelValue: { type: Number, default: 1 }, // currentPage
  perPage: { type: Number, default: 5 },
})

const emit = defineEmits(['update:modelValue', 'update:perPage'])

const currentPage = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const rowsPerPage = computed({
  get: () => props.perPage,
  set: (val) => emit('update:perPage', val),
})

const totalPages = computed(() => Math.ceil(props.totalRows / rowsPerPage.value))

const paginationItems = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const items = []

  if (total <= 5) {
    for (let i = 1; i <= total; i++) items.push(i)
  } else {
    items.push(1)
    if (current > 3) items.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    for (let i = start; i <= end; i++) items.push(i)

    if (current < total - 2) items.push('...')
    items.push(total)
  }

  return items
})

const goPrevious = () => {
  if (currentPage.value > 1) currentPage.value--
}
const goNext = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

watch(rowsPerPage, () => {
  currentPage.value = 1
})

const displayedRows = computed(() => {
  const start = (props.modelValue - 1) * rowsPerPage.value
  const end = Math.min(start + rowsPerPage.value, props.totalRows)
  return end - start
})
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center p-3">
    <div>
      <select
        v-model="rowsPerPage"
        class="font-semibold bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg px-2 py-1.5 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all cursor-pointer"
      >
        <option v-for="opt in perPageOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>

    <div class="flex items-center space-x-1">
      <Button size="sm" @click="goPrevious" :disabled="currentPage === 1">Précédent</Button>

      <template v-for="item in paginationItems" :key="item">
        <span v-if="item === '...'">...</span>
        <Button
          v-else
          size="sm"
          @click="currentPage = item"
          :variant="currentPage === item ? 'primary' : ''"
        >
          {{ item }}
        </Button>
      </template>

      <Button size="sm" @click="goNext" :disabled="currentPage === totalPages">Suivant</Button>
    </div>

    <div class="font-semibold text-zinc-600 dark:text-zinc-400">
      Affichage de
      <span class="text-primary-600">{{ displayedRows }}</span>
      sur
      <span class="text-zinc-900 dark:text-white">{{ props.totalRows }}</span>
      entrées
    </div>
  </div>
</template>
