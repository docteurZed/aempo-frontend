<script setup>
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  label: { type: String, required: true },
  icon: { type: [Object, Function], default: null },
  to: { type: String, required: false },
})

const route = useRoute()
const router = useRouter()

const navigate = () => {
  if (props.to) router.push(props.to)
}
</script>

<template>
  <div
    @click="navigate"
    :class="[
      'flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors select-none',
      route.path === props.to
        ? 'bg-zinc-300 text-primary-500 dark:bg-zinc-700'
        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50',
    ]"
  >
    <component v-if="icon" :is="icon" class="w-5 h-5" />
    <span class="font-medium">{{ label }}</span>
  </div>
</template>
