<script setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/24/solid'
import Link from '../link/Link.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  lightColor: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li v-for="(item, index) in props.items" :key="index" class="inline-flex items-center">
        <template v-if="index === 0">
          <Link as="router-link" :to="item.href" variant="light"
            class="inline-flex items-center cursor-pointer text-sm font-semibold hover:text-primary-500"
            :class="[props.lightColor ? 'text-zinc-200' : 'text-zinc-800 dark:text-zinc-200']">
          <HomeIcon class="w-3 h-3 me-2.5" />
          {{ item.label }}
          </Link>
        </template>

        <template v-else>
          <div class="flex items-center">
            <ChevronRightIcon class="rtl:rotate-180 w-3 h-3 text-zinc-500 mx-1" />
            <Link as="router-link" v-if="index < props.items.length - 1" :to="item.href" variant="light"
              class="ms-1 cursor-pointer text-sm font-semibold hover:text-primary-500 md:ms-2"
              :class="[props.lightColor ? 'text-zinc-200' : 'text-zinc-800 dark:text-zinc-200']">
            {{ item.label }}
            </Link>
            <span v-else aria-current="page" class="ms-1 text-sm font-medium md:ms-2"
              :class="[props.lightColor ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400']">
              {{ item.label }}
            </span>
          </div>
        </template>
      </li>
    </ol>
  </nav>
</template>
