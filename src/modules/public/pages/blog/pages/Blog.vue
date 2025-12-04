<script setup>
import { ChevronRightIcon, UserIcon } from '@heroicons/vue/24/solid'
import { ref, computed } from 'vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import Section from '@/components/pages/public/Section.vue'
import SectionTitle from '@/components/pages/public/SectionTitle.vue'
import CardImage from '@/components/ui/card/CardImage.vue'
import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue'
import SearchInput from '@/components/form/input/SearchInput.vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
import Article from '@/components/pages/public/blog/Article.vue'

const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
]

const allPosts = [
    {
        id: 1,
        title: 'Les avancées de la recherche médicale à la FSS',
        excerpt: 'Découvrez comment nos chercheurs contribuent à l’innovation médicale au Togo.',
        image: '/img/image-1.jpg',
        category: 'Recherche',
        categoryVariant: 'info',
        date: '3 novembre 2025',
        author: 'Dr. Kossi Améyo',
        link: '/blog/avances-recherche-medicale',
    },
    {
        id: 2,
        title: 'Journée portes ouvertes 2025',
        excerpt:
            'Retour sur une journée d’échanges entre étudiants, enseignants et professionnels de santé.',
        image: '/img/image-2.jpg',
        category: 'Événement',
        categoryVariant: 'secondary',
        date: '28 octobre 2025',
        author: 'Comité FSS',
        link: '/blog/journee-portes-ouvertes-2025',
    },
    {
        id: 3,
        title: 'Nouveaux partenariats universitaires',
        excerpt:
            'La FSS s’allie à plusieurs universités africaines pour renforcer la formation médicale.',
        image: '/img/image-3.jpg',
        category: 'Partenariat',
        categoryVariant: 'success',
        date: '15 octobre 2025',
        author: 'Direction des Relations Extérieures',
        link: '/blog/nouveaux-partenariats',
    },
    {
        id: 4,
        title: 'Conférence annuelle sur la santé publique',
        excerpt:
            'Un événement majeur réunissant experts et étudiants pour débattre des enjeux sanitaires actuels.',
        image: '/img/image-4.jpg',
        category: 'Événement',
        categoryVariant: 'secondary',
        date: '10 octobre 2025',
        author: 'Comité Scientifique',
        link: '/blog/conference-sante-publique',
    },
    {
        id: 5,
        title: 'Nouvelles installations au laboratoire de biologie',
        excerpt: 'Des équipements modernes pour renforcer la recherche et la formation pratique.',
        image: '/img/image-5.jpg',
        category: 'Infrastructure',
        categoryVariant: 'warning',
        date: '5 octobre 2025',
        author: 'Direction Technique',
        link: '/blog/nouvelles-installations',
    },
]

const searchQuery = ref('')

const filteredPosts = computed(() => {
    if (!searchQuery.value) return allPosts
    const q = searchQuery.value.toLowerCase()
    return allPosts.filter(
        (post) =>
            post.title.toLowerCase().includes(q) ||
            post.excerpt.toLowerCase().includes(q) ||
            post.author.toLowerCase().includes(q),
    )
})

const currentPage = ref(1)
const perPage = 4

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / perPage))
const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return filteredPosts.value.slice(start, start + perPage)
})

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

const categories = [...new Set(allPosts.map((p) => p.category))]
const tags = ['Recherche', 'Événement', 'Partenariat', 'Infrastructure']
</script>

<template>
    <PublicLayout>
        <OtherHeroSection
            title="Blog"
            subtitle="Explorez les dernières publications."
            :breadcrumbItems="breadcrumbItems"
            backgroundImage="/img/image-4.jpg"
        />

        <Section>
            <SectionTitle
                title="Nos articles"
                subtitle="Restez informé de l’actualité scientifique, des événements et des partenariats."
            />

            <div class="mb-8 block md:flex justify-beween items-center">
                <SearchInput v-model="searchQuery" placeholder="Rechercher un article..." />
            </div>
            <div
                v-if="paginatedPosts.length === 0"
                class="text-center py-10 text-zinc-600 dark:text-zinc-400"
            >
                Aucun article disponible
            </div>
            <div class="grid gap-6 md:grid-cols-3 items-stretch">
                <Article
                    v-for="post in paginatedPosts"
                    :key="post.id"
                    :id="post.id"
                    :category="post.category"
                    :title="post.title"
                    :excerpt="post.excerpt"
                    :author="post.author"
                    :image-path="post.image"
                    :date="post.date"
                />
            </div>

            <div class="flex justify-center items-center gap-2 mt-10 space-x-2">
                <Button
                    variant="transparent"
                    size="sm"
                    @click="goToPage(currentPage - 1)"
                    :disabled="currentPage === 1"
                >
                    <span class="hidden md:block">Précédent</span>
                    <ChevronLeftIcon class="w-4 h-4 md:hidden" />
                </Button>

                <template v-for="page in totalPages" :key="page">
                    <Button
                        :variant="page === currentPage ? 'primary' : 'transparent'"
                        size="sm"
                        :class="{ 'text-primary-600 font-semibold': page === currentPage }"
                        @click="goToPage(page)"
                    >
                        {{ page }}
                    </Button>
                </template>

                <Button
                    variant="transparent"
                    size="sm"
                    @click="goToPage(currentPage + 1)"
                    :disabled="currentPage === totalPages"
                >
                    <span class="hidden md:block">Suivant</span>
                    <ChevronRightIcon class="w-4 h-4 md:hidden" />
                </Button>
            </div>
        </Section>
    </PublicLayout>
</template>
