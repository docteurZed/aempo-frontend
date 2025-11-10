<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Button from '@/components/ui/button/Button.vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((url) => typeof url === 'string'),
  },
  interval: {
    type: Number,
    default: 5000,
  },
})

const currentIndex = ref(0)
let intervalId = null

onMounted(() => {
  if (props.images.length > 1) {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length
    }, props.interval)
  }
})

onUnmounted(() => clearInterval(intervalId))

watch(
  () => props.images,
  () => {
    currentIndex.value = 0
  },
)
</script>

<template>
  <section
    class="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden"
  >
    <div
      v-for="(image, index) in images"
      :key="index"
      class="absolute inset-0 bg-center bg-cover bg-no-repeat bg-zinc-700 bg-blend-multiply transition-opacity duration-1000 ease-in-out"
      :style="{ backgroundImage: `url(${image})`, opacity: currentIndex === index ? 1 : 0 }"
    ></div>

    <div class="relative z-10 px-4 mx-auto max-w-screen-xl text-center">
      <h1 class="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl">
        AEMPO
      </h1>

      <p class="mt-4 text-lg font-normal text-zinc-300 lg:text-xl sm:px-16 lg:px-48">
        Une association engagée au service des étudiants en médecine, pharmacie et
        odonto-stomatologie au Togo.
      </p>

      <div class="mt-8 flex flex-col space-y-4 gap-4 sm:flex-row sm:justify-center sm:space-y-0">
        <Button as="router-link" :to="{ name: 'about' }" size="lg" variant="primary">Nous découvrir</Button>
        <Button as="router-link" to="/" size="lg" variant="transparent">Nous rejoindre</Button>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary-800/50 via-transparent to-primary-800/25"></div>
    <!-- <div class="absolute inset-0 bg-primary-700/25 mix-blend-multiply"></div> -->
  </section>
</template>
