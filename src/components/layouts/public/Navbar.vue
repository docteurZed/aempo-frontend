<script setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
  <nav
    class="w-full flex items-center justify-between py-4 px-8 md:px-16 bg-white dark:bg-zinc-950/50 border-b border-zinc-300 dark:border-zinc-700"
  >
    <ApplicationLogo />

    <div class="hidden md:flex items-center gap-6 font-semibold">
      <slot name="menu" />
    </div>

    <div class="hidden md:flex items-center gap-3">
      <ThemeSwitcher />
      <slot name="actions" />
    </div>

    <div class="md:hidden flex items-center gap-1">
      <ThemeSwitcher />
      <button
        @click="$emit('toggle-sidebar')"
        class="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
      >
        <Bars3Icon class="w-8 h-8 text-zinc-800 dark:text-zinc-200" />
      </button>
    </div>
  </nav>
</template>
