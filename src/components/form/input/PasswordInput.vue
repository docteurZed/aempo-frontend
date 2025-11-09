<script setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid'
import Link from '@/components/ui/link/Link.vue'

const props = defineProps({
  id: { type: [String, Number], default: 'password-input' },
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  name: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  helperText: { type: String, default: '' },
  error: { type: String, default: '' },
  showToggle: { type: Boolean, default: true },
  forgotPassword: { type: Boolean, default: false },
  forgotPasswordLink: { type: [String, Object], default: '#' },
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)
const typeInput = computed(() => (showPassword.value ? 'text' : 'password'))

const borderClasses = computed(() =>
  props.error
    ? 'border-red-600 dark:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 focus:border-red-600 dark:focus:border-red-500'
    : 'border-zinc-400 dark:border-zinc-600 focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500',
)

const localValue = ref(props.modelValue)

watch(localValue, (val) => emit('update:modelValue', val))
watch(
  () => props.modelValue,
  (val) => (localValue.value = val),
)
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-between">
      <label
        :for="id"
        v-if="label"
        class="block mb-2 font-semibold text-zinc-800 dark:text-zinc-200"
      >
        {{ label }}
      </label>
      <Link as="router-link" v-if="forgotPassword" :to="forgotPasswordLink" variant="secondary">
        Mot de passe oublié ?
      </Link>
    </div>

    <div class="relative">
      <input
        :id="id"
        :type="typeInput"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        v-model="localValue"
        :class="[
          'bg-zinc-200 text-zinc-800 text-sm rounded-lg block w-full p-2.5 pr-10 dark:bg-zinc-800 dark:text-zinc-200 placeholder-zinc-600 dark:placeholder-zinc-500 border',
          borderClasses,
        ]"
      />

      <button
        v-if="showToggle"
        type="button"
        @click="showPassword = !showPassword"
        class="absolute inset-y-0 right-2.5 flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
      >
        <transition name="fade" mode="out-in">
          <component
            :key="showPassword"
            :is="showPassword ? EyeSlashIcon : EyeIcon"
            class="w-5 h-5"
          />
        </transition>
      </button>
    </div>

    <p v-if="helperText && !error" class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ helperText }}
    </p>
    <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
