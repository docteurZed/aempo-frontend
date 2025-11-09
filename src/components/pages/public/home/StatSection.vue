<script setup>
import { ref, onMounted } from 'vue'
import Section from '../Section.vue'
import SectionTitle from '../SectionTitle.vue'
import { AcademicCapIcon, UserGroupIcon, SparklesIcon } from '@heroicons/vue/24/solid'

const stats = [
  { title: 'Facultés', value: 2, color: 'text-secondary-500', icon: AcademicCapIcon },
  { title: 'Membres', value: 800, color: 'text-warning-500', icon: UserGroupIcon },
  { title: 'Projets', value: 27, color: 'text-blue-500', icon: SparklesIcon },
]

const animatedValues = stats.map(() => ref(0))

function animateNumber(index, target) {
  let current = 0
  const increment = Math.ceil(target / 100)
  const interval = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(interval)
    }
    animatedValues[index].value = current
  }, 15)
}

onMounted(() => {
  stats.forEach((stat, i) => animateNumber(i, stat.value))
})
</script>

<template>
  <Section class="bg-white dark:bg-zinc-950/40">
    <SectionTitle title="Quelques chiffres clés" subtitle="Découvrez notre impact" />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-8 lg:px-12">
      <div v-for="(stat, index) in stats" :key="index"
        class="flex flex-col items-center bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">

        <!-- Icône -->
        <div :class="`${stat.color} bg-zinc-200 dark:bg-zinc-800 rounded-full p-3 mb-4 shadow`">
          <component :is="stat.icon" class="w-8 h-8" />
        </div>

        <!-- Valeur animée -->
        <h3 class="text-3xl font-extrabold mb-2 transition-all duration-500" :class="stat.color">
          {{ animatedValues[index].value }}
        </h3>

        <!-- Titre -->
        <p class="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed text-center font-semibold">
          {{ stat.title }}
        </p>
      </div>
    </div>
  </Section>
</template>
