<script setup>
import Link from '@/components/ui/link/Link.vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  label: String,
  to: {
    type: [String, Object],
    default: null
  },
  hasChildren: { type: Boolean, default: false },
})

const route = useRoute()
const router = useRouter()
const open = ref(false)

const isActive = computed(() => {
  if (!props.to) return false

  const resolved = router.resolve(props.to)
  return route.path === resolved.path
})

const menuRef = ref(null)

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="menuRef">
    <Link as="router-link" v-if="!hasChildren" :to="to" :variant="isActive ? 'primary' : 'neutral'" :class="[
      'px-3 py-2 rounded-md w-full hover:text-primary-500'
    ]">
      {{ label }}
    </Link>

    <div v-else class="relative">
      <div class="relative">
        <button @click="open = !open" class="flex items-center gap-2 w-full px-3 py-2 rounded-md text-left cursor-pointer" :class="[
          isActive
            ? 'text-primary-500'
            : 'text-zinc-700 hover:text-primary-500 dark:text-zinc-300',
        ]">
          <span>{{ label }}</span>
          <ChevronDownIcon :class="{ 'rotate-180': open }" class="w-3 h-3 transition-transform duration-300" />
        </button>

        <transition name="accordion" enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in">
          <div v-show="open"
            class="absolute w-56 z-40 bg-zinc-100 border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700 p-4 rounded-md shadow-sm flex flex-col text-sm gap-4">
            <slot />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
