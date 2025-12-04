<script setup>
import { Section, SectionTitle } from '@/modules/public/components'
import { GraduationCap, Sparkles, Users } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const stats = [
    {
        title: 'Facultés',
        value: 2,
        color: 'text-secondary',
        bgHover: 'group-hover:bg-secondary-500',
        icon: GraduationCap,
    },
    {
        title: 'Membres',
        value: 800,
        color: 'text-warning',
        bgHover: 'group-hover:bg-warning-500',
        icon: Users,
    },
    {
        title: 'Projets',
        value: 27,
        color: 'text-info',
        bgHover: 'group-hover:bg-info-500',
        icon: Sparkles,
    },
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
    <Section class="bg-white dark:bg-zinc-950/25">
        <SectionTitle title="Quelques chiffres clés" subtitle="Découvrez notre impact" />

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-8 lg:px-12">
            <div
                v-for="(stat, index) in stats"
                :key="index"
                class="flex flex-col items-center bg-default rounded-xl p-6 shadow-md hover:shadow-xl transition transform duration-500 hover:scale-105 group"
            >
                <div
                    :class="[
                        stat.color,
                        stat.bgHover,
                        'bg-muted group-hover:text-white transition duration-300 rounded-full p-3 mb-4 shadow',
                    ]"
                >
                    <component :is="stat.icon" class="w-8 h-8" />
                </div>

                <h3
                    class="text-3xl font-extrabold mb-2 transition-all duration-500"
                    :class="stat.color"
                >
                    {{ animatedValues[index].value }}
                </h3>

                <p
                    class="text-muted text-sm leading-relaxed text-center font-semibold"
                >
                    {{ stat.title }}
                </p>
            </div>
        </div>
    </Section>
</template>
