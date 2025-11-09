<script setup>
import { ref, computed, provide } from 'vue'
import DataTablePagination from './DataTablePagination.vue'
import SearchInput from '../form/input/SearchInput.vue'
import Card from '../ui/card/Card.vue'

const props = defineProps({
  rows: { type: Array, required: true },
  searchable: { type: Boolean, default: true },
  perPageOptions: { type: Array, default: () => [5, 10, 25, 50] },
})

const search = ref('')
const currentPage = ref(1)
const perPage = ref(props.perPageOptions[0])
const sortColumn = ref(null)
const sortAsc = ref(true)

const toggleSort = (col, sortable = true) => {
  if (!sortable) return
  if (sortColumn.value === col) {
    sortAsc.value = !sortAsc.value
  } else {
    sortColumn.value = col
    sortAsc.value = true
  }
}

provide('sortColumn', sortColumn)
provide('sortAsc', sortAsc)
provide('toggleSort', toggleSort)

const filteredRows = computed(() => {
  let data = [...props.rows]

  if (props.searchable && search.value.trim() !== '') {
    const q = search.value.toLowerCase()
    data = data.filter((row) =>
      Object.values(row).some((val) => String(val).toLowerCase().includes(q)),
    )
  }

  if (sortColumn.value) {
    data.sort((a, b) => {
      if (a[sortColumn.value] < b[sortColumn.value]) return sortAsc.value ? -1 : 1
      if (a[sortColumn.value] > b[sortColumn.value]) return sortAsc.value ? 1 : -1
      return 0
    })
  }

  return data
})

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredRows.value.slice(start, start + perPage.value)
})
</script>

<template>
  <Card :set-padding="false">
    <div class="w-full overflow-x-auto text-sm dark:text-zinc-200">
      <div v-if="props.searchable" class="p-3 flex items-center justify-center sm:justify-end">
        <SearchInput v-model="search" placeholder="Rechercher..." />
      </div>

      <table class="w-full border-collapse">
        <thead>
          <slot name="thead"></slot>
        </thead>
        <tbody>
          <slot name="tbody" :rows="paginatedRows"></slot>
        </tbody>
      </table>

      <div
        v-if="filteredRows.length === 0"
        class="text-center px-4 py-2 border-b border-zinc-300 dark:border-zinc-700"
      >
        Aucun élément
      </div>

      <DataTablePagination
        :total-rows="filteredRows.length"
        v-model="currentPage"
        v-model:perPage="perPage"
        :per-page-options="perPageOptions"
      />
    </div>
  </Card>
</template>
