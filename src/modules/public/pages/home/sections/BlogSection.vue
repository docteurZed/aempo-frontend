<script setup>
import { Button } from '@/components';
import { Section, SectionTitle } from '@/modules/public/components';
import { ArrowRight } from 'lucide-vue-next';


const posts = [
    {
        id: 1,
        title: 'Les avancées de la recherche médicale à la FSS',
        excerpt: 'Découvrez comment nos chercheurs contribuent à l’innovation médicale au Togo.',
        image: './img/image-1.jpg',
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
        image: './img/image-2.jpg',
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
        image: './img/image-3.jpg',
        category: 'Partenariat',
        categoryVariant: 'success',
        date: '15 octobre 2025',
        author: 'Direction des Relations Extérieures',
        link: '/blog/nouveaux-partenariats',
    },
]
</script>

<template>
    <Section>
        <SectionTitle title="Articles récents" subtitle="Restez informé sur les dernières actualités de la faculté" />

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <!-- <Article
                v-for="post in posts"
                :key="post.id"
                :id="post.id"
                :category="post.category"
                :title="post.title"
                :excerpt="post.excerpt"
                :author="post.author"
                :image-path="post.image"
                :date="post.date"
            /> -->
        </div>
        <div class="flex items-center justify-center mt-6">
            <Button as="router-link" to="/" size="lg" variant="transparent" class=" group">
                <span class="flex items-center gap-2 text-default group-hover:text-zinc-200">
                    Voir tous les articles
                    <ArrowRight class="w-4" />
                </span>
            </Button>
        </div>
    </Section>
</template>
