<script setup>
import { ref, computed } from 'vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue'
import Section from '@/components/pages/public/Section.vue'
import SectionTitle from '@/components/pages/public/SectionTitle.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'
import Link from '@/components/ui/link/Link.vue'
import Card from '@/components/ui/card/Card.vue'
import { CalendarIcon, MegaphoneIcon, ArrowLongRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

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
        id: 4,
        title: 'Journée de sensibilisation à la santé publique',
        type: 'Événement',
        variant: 'secondary',
        date: '1 novembre 2025',
        excerpt: 'Une initiative conjointe avec le ministère de la santé pour sensibiliser les étudiants à la santé communautaire.',
        icon: CalendarIcon,
        link: '/actu/sensibilisation-sante',
    },
    {
        id: 5,
        title: 'Nouveau programme de bourses pour étudiants en médecine',
        type: 'Communiqué',
        variant: 'primary',
        date: '28 octobre 2025',
        excerpt: 'Les étudiants peuvent désormais postuler au nouveau programme de bourses 2025-2026.',
        icon: MegaphoneIcon,
        link: '/actu/bourses-etudiants-medecine',
    },
]

const filters = ['Tous', 'Communiqué', 'Événement', 'Actualités']
const activeFilter = ref('Tous')

const perPage = 6
const currentPage = ref(1)

const filteredActus = computed(() => {
    const filtered = activeFilter.value === 'Tous'
        ? actus
        : actus.filter((a) => a.type === activeFilter.value)
    return filtered
})

const totalPages = computed(() => Math.ceil(filteredActus.value.length / perPage))
const paginatedActus = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return filteredActus.value.slice(start, start + perPage)
})

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}
</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'Actualités'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'Actualités' }
        ]" bg-image="/img/image-3.jpg" />

        <Section>
            <SectionTitle title="Toutes les actualités" subtitle="Communiqués, événements et annonces de la faculté" />

            <div class="flex flex-wrap justify-center gap-3 mb-8">
                <Button v-for="filter in filters" :key="filter" @click="activeFilter = filter; currentPage = 1"
                    :variant="activeFilter === filter ? 'secondary' : 'transparent'">
                    {{ filter }}
                </Button>
            </div>

            <div v-if="filteredActus.length === 0" class="text-center py-10 text-zinc-600 dark:text-zinc-400">
                Aucune actualité disponible
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card v-for="actu in paginatedActus" :key="actu.id" class="hover:shadow-md transition">
                    <div class="flex items-center justify-between mb-2">
                        <Badge :variant="actu.variant">{{ actu.type }}</Badge>
                        <span class="text-xs text-zinc-500 font-medium">{{ actu.date }}</span>
                    </div>

                    <Link as="router-link" :to="actu.link">
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
            </div>

            <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-10">
                <Button size="sm" variant="transparent" :disabled="currentPage === 1"
                    @click="goToPage(currentPage - 1)">
                    <span class="hidden md:block">Précédent</span>
                    <ChevronLeftIcon class="w-4 h-4 md:hidden" />
                </Button>

                <template v-for="page in totalPages" :key="page">
                    <Button :variant="page === currentPage ? 'primary' : 'transparent'" size="sm"
                        :class="{ 'text-primary-600 font-semibold': page === currentPage }" @click="goToPage(page)">
                        {{ page }}
                    </Button>
                </template>

                <!-- <span class="text-sm text-zinc-600 dark:text-zinc-400">
                    Page {{ currentPage }} / {{ totalPages }}
                </span> -->

                <Button size="sm" variant="transparent" :disabled="currentPage === totalPages"
                    @click="goToPage(currentPage + 1)">
                    <span class="hidden md:block">Suivant</span>
                    <ChevronRightIcon class="w-4 h-4 md:hidden" />
                </Button>
            </div>
        </Section>
    </PublicLayout>
</template>
