<script setup>
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
import { ArrowsUpDownIcon, ArrowUpIcon } from '@heroicons/vue/24/solid'
import { inject } from 'vue'

defineProps({
  label: { type: String, default: '' },
  sortable: { type: Boolean, default: false },
  columnKey: { type: String, default: null },
})

const sortColumn = inject('sortColumn')
const sortAsc = inject('sortAsc')
const toggleSort = inject('toggleSort')
</script>

<template>
  <th
    :class="[
      'px-4 py-3 text-left font-semibold bg-zinc-100 dark:bg-zinc-700/50',
      sortable ? 'cursor-pointer' : '',
    ]"
    @click="sortable && toggleSort?.(columnKey, true)"
  >
    <div class="flex gap-4 items-center">
      <slot>
        {{ label }}
      </slot>
      <span v-if="sortable">
        <span v-if="sortColumn === columnKey">
          <ArrowUpIcon class="w-3 h-4" v-if="sortAsc" />
          <ArrowDownIcon class="w-3 h-4" v-else />
        </span>
        <span v-else>
          <ArrowsUpDownIcon class="w-3 h-4" />
        </span>
      </span>
    </div>
  </th>
</template>
