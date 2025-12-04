<script setup>
import { ref, computed } from 'vue'
import { Section, SectionTitle } from '@/modules/public/components'
import { Badge, Button, Card } from '@/components'
import { ArrowRight, Calendar, Megaphone } from 'lucide-vue-next'

const actus = [
    {
        id: 1,
        title: 'Concours d’entrée en 1ère année de médecine – Session 2025',
        type: 'Communiqué',
        variant: 'primary',
        date: '5 novembre 2025',
        excerpt:
            'Les inscriptions sont ouvertes jusqu’au 20 novembre 2025. Consultez les modalités complètes.',
        icon: Megaphone,
        link: '/actu/concours-medecine-2025',
    },
    {
        id: 2,
        title: 'Séminaire sur la télémédecine',
        type: 'Événement',
        variant: 'secondary',
        date: '10 novembre 2025',
        excerpt:
            'Un séminaire d’échange entre enseignants et étudiants sur les défis de la télémédecine en Afrique.',
        icon: Calendar,
        link: '/actu/seminaire-telemedecine',
    },
    {
        id: 3,
        title: 'Résultats du concours de spécialisation 2025',
        type: 'Résultats',
        variant: 'success',
        date: '2 novembre 2025',
        excerpt:
            'Les résultats du concours sont désormais disponibles. Félicitations aux candidats admis.',
        icon: Megaphone,
        link: '/actu/resultats-specialisation-2025',
    },
    {
        id: 4,
        title: 'Journée de sensibilisation à la santé publique',
        type: 'Événement',
        variant: 'secondary',
        date: '1 novembre 2025',
        excerpt:
            'Une initiative conjointe avec le ministère de la santé pour sensibiliser les étudiants à la santé communautaire.',
        icon: Calendar,
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
    <Section class="bg-white dark:bg-zinc-950/25">
        <SectionTitle title="Actualités récentes" subtitle="Communiqués, événements et annonces" />

        <div class="flex flex-wrap justify-center gap-3 mb-8">
            <Button
                v-for="filter in filters"
                :key="filter"
                @click="activeFilter = filter"
                :variant="activeFilter === filter ? 'secondary' : 'transparent'"
            >
                {{ filter }}
            </Button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <!-- <ActuDetail
                v-for="actu in filteredActus"
                :key="actu.id"
                :type="actu.type"
                :date="actu.date"
                :title="actu.title"
                :excerpt="actu.excerpt"
                :link="actu.link"
            /> -->
            <Card v-for="actu in filteredActus" :key="actu.id" class="hover:shadow-md transition">
                <div class="flex items-center justify-between mb-2">
                    <Badge :variant="actu.variant">{{ actu.type }}</Badge>
                    <span class="text-xs text-muted font-medium">{{ actu.date }}</span>
                </div>

                <RouterLink to="/">
                    <h3 class="font-bold text-default mb-2 line-clamp-2 hover:text-primary-500 dark:hover:text-primary-600">
                    {{ actu.title }}
                </h3>
                </RouterLink>

                <p class="text-sm text-muted line-clamp-3">
                    {{ actu.excerpt }}
                </p>

                <RouterLink :to="actu.link" variant="secondary" size="sm"
                    class="mt-4 flex items-center gap-1 text-primary text-sm font-semibold group transition">
                Lire plus
                <ArrowRight
                    class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </RouterLink>
            </Card>
        </div>

        <div class="flex justify-center mt-8">
            <Button
                as="router-link"
                to="/"
                size="lg"
                variant="transparent"
                class="flex items-center gap-2"
            >
                Voir toutes les actualités
                <ArrowRight class="w-4" />
            </Button>
        </div>
    </Section>
</template>
