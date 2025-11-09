<script setup>
import AuthHeader from '@/components/layouts/auth/AuthHeader.vue'
// import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import Card from '@/components/ui/card/Card.vue'

const props = defineProps({
  heading: String,
  subheading: String,
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 px-4">
    <Card class="w-full max-w-md p-6">
      <div class="relative flex flex-col gap-6">
        <div class="absolute -top-6 -left-6">
          <!-- <ThemeSwitcher class="self-center" /> -->
        </div>
        <AuthHeader :heading="heading" :subheading="subheading" />
        <div>
          <slot />
        </div>
      </div>
    </Card>
  </div>
</template>
