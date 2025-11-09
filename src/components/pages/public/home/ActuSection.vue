<script setup>
import { ref, computed } from 'vue'
import Section from '../Section.vue'
import SectionTitle from '../SectionTitle.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'
import { CalendarIcon, MegaphoneIcon, ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import Link from '@/components/ui/link/Link.vue'
import Card from '@/components/ui/card/Card.vue'

const actus = [
    {
        id: 1,
        title: 'Concours d’entrée en 1ère année de médecine – Session 2025',
        type: 'Communiqué',
        variant: 'primary',
        date: '5 novembre 2025',
        excerpt: 'Les inscriptions sont ouvertes jusqu’au 20 novembre 2025. Consultez les modalités complètes.',
        icon: MegaphoneIcon,
        link: '/actu/concours-medecine-2025',
    },
    {
        id: 2,
        title: 'Séminaire sur la télémédecine',
        type: 'Événement',
        variant: 'secondary',
        date: '10 novembre 2025',
        excerpt: 'Un séminaire d’échange entre enseignants et étudiants sur les défis de la télémédecine en Afrique.',
        icon: CalendarIcon,
        link: '/actu/seminaire-telemedecine',
    },
    {
        id: 3,
        title: 'Résultats du concours de spécialisation 2025',
        type: 'Résultats',
        variant: 'success',
        date: '2 novembre 2025',
        excerpt: 'Les résultats du concours sont désormais disponibles. Félicitations aux candidats admis.',
        icon: MegaphoneIcon,
        link: '/actu/resultats-specialisation-2025',
    },
    {
        id: 4,
        title: 'Journée de sensibilisation à la santé publique',
        type: 'Événement',
        variant: 'secondary',
        date: '1 novembre 2025',
        excerpt: 'Une initiative conjointe avec le ministère de la santé pour sensibiliser les étudiants à la santé communautaire.',
        icon: CalendarIcon,
        link: '/actu/sensibilisation-sante',
    },
]

const filters = ['Tous', 'Communiqué', 'Événement', 'Résultats']

const activeFilter = ref('Tous')

const filteredActus = computed(() => {
    if (activeFilter.value === 'Tous') return actus
    return actus.filter((a) => a.type === activeFilter.value)
})
</script>

<template>
    <Section class="bg-white dark:bg-zinc-950/40">
        <SectionTitle title="Actualités récentes" subtitle="Communiqués, événements et annonces" />

        <div class="flex flex-wrap justify-center gap-3 mb-8">
            <Button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
            :variant="activeFilter === filter ? 'secondary' : 'transparent'">
                {{ filter }}
            </Button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card v-for="actu in filteredActus" :key="actu.id" class="hover:shadow-md transition">
                <div class="flex items-center justify-between mb-2">
                    <Badge :variant="actu.variant">{{ actu.type }}</Badge>
                    <span class="text-xs text-zinc-500 font-medium">{{ actu.date }}</span>
                </div>

                <Link>
                    <h3 class="font-bold text-zinc-800 dark:text-zinc-200 mb-2 line-clamp-2 hover:text-primary-500">
                    {{ actu.title }}
                </h3>
                </Link>

                <p class="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {{ actu.excerpt }}
                </p>

                <Link as="router-link" :to="actu.link" variant="secondary" size="sm"
                    class="mt-4 flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-semibold group transition">
                Lire plus
                <ArrowLongRightIcon
                    class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
            </Card>
            <!-- <div 
                class="p-5 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 ">
                
            </div> -->
        </div>

        <div class="flex justify-center mt-8">
            <Button as="router-link" :to="{name: 'actu'}" size="lg" variant="transparent" class="flex items-center gap-2">
                Voir toutes les actualités
                <ArrowLongRightIcon class="w-4" />
            </Button>
        </div>
    </Section>
</template>
