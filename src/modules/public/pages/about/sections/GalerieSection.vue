<script setup>
import { ref } from 'vue'
import { Section, SectionTitle } from '@/modules/public/components'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const slider = ref(null)

const images = ref([
    '/img/image-1.jpg',
    '/img/image-2.jpg',
    '/img/image-3.jpg',
    '/img/image-4.jpg',
    '/img/image-5.jpg',
])

const scrollLeft = () => {
    slider.value.scrollBy({
        left: -300,
        behavior: 'smooth',
    })
}

const scrollRight = () => {
    slider.value.scrollBy({
        left: 300,
        behavior: 'smooth',
    })
}
</script>

<template>
    <Section>
        <SectionTitle title="Galerie" subtitle="Découvrez nos activités en images" align="center" />

        <div class="relative mt-8">
            <!-- Slider container -->
            <div ref="slider" class="overflow-x-auto hide-scrollbar scroll-smooth">
                <div class="flex gap-6 w-max px-2">
                    <img
                        v-for="(image, index) in images"
                        :key="index"
                        :src="image"
                        class="w-80 h-56 object-cover rounded-xl"
                    />
                </div>
            </div>

            <button
                @click="scrollLeft"
                class="p-3 bg-white/80 dark:bg-black/60 absolute top-1/2 -translate-y-1/2 left-0 shadow rounded-full hover:scale-105 transition text-zinc-800 dark:text-zinc-200"
            >
                <ChevronLeft class="w-5 h-5" />
            </button>

            <button
                @click="scrollRight"
                class="absolute top-1/2 -translate-y-1/2 right-0 p-3 bg-white/80 dark:bg-black/60 shadow rounded-full hover:scale-105 transition text-zinc-800 dark:text-zinc-200"
            >
                <ChevronRight class="w-5 h-5" />
            </button>
        </div>
    </Section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
