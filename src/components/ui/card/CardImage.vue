<script setup>
const props = defineProps({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, default: 'Image' },
  imagePosition: {
    type: String,
    default: 'top',
    validator: (v) => ['top', 'bottom', 'left', 'right'].includes(v),
  },
})
</script>

<template>
  <div :class="[
    'flex bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 shadow-sm rounded-lg overflow-hidden text-zinc-800 dark:text-zinc-200',
    imagePosition === 'left' || imagePosition === 'right' ? 'flex-row' : 'flex-col',
  ]">
    <template v-if="imagePosition === 'top' || imagePosition === 'left'">
      <img :src="imageSrc" :alt="imageAlt" :class="[
        'transition-transform duration-500 ease-in-out group-hover:scale-105',
        imagePosition === 'top' ? 'w-full rounded-t-lg' : 'h-full rounded-l-lg',
        imagePosition === 'left' ? 'w-40 object-cover' : '',
      ]" />
    </template>

    <div class="flex-1 flex flex-col justify-between">
      <div v-if="$slots.header" class="p-4 border-b border-zinc-300 dark:border-zinc-700 font-semibold">
        <slot name="header" />
      </div>

      <div class="flex-1 p-4">
        <slot />
      </div>

      <div v-if="$slots.footer" class="p-4 border-t border-zinc-300 dark:border-zinc-700">
        <slot name="footer" />
      </div>
    </div>

    <template v-if="imagePosition === 'bottom' || imagePosition === 'right'">
      <img :src="imageSrc" :alt="imageAlt" :class="[
        'transition-transform duration-500 ease-in-out group-hover:scale-105',
        imagePosition === 'bottom' ? 'w-full rounded-b-lg' : 'h-full rounded-r-lg',
        imagePosition === 'right' ? 'w-40 object-cover' : '',
      ]" />
    </template>
  </div>
</template>
