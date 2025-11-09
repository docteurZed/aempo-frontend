<script setup>
import CardImage from '@/components/ui/card/CardImage.vue';
import Section from '../Section.vue'
import SectionTitle from '../SectionTitle.vue'
import Badge from '@/components/ui/badge/Badge.vue';
import Button from '@/components/ui/button/Button.vue';
import Link from '@/components/ui/link/Link.vue';
import { ArrowLongRightIcon, UserIcon } from '@heroicons/vue/24/solid';

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
        excerpt: 'Retour sur une journée d’échanges entre étudiants, enseignants et professionnels de santé.',
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
        excerpt: 'La FSS s’allie à plusieurs universités africaines pour renforcer la formation médicale.',
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
            <div v-for="post in posts" :key="post.id" class="relative group">
                
                <div class="absolute top-3 left-3 z-10">
                    <Badge :variant="post.categoryVariant">
                        {{ post.category }}
                    </Badge>
                </div>

                <CardImage :image-src="post.image" :image-alt="post.title" image-position="top" class="h-full flex flex-col">
                    <Link>
                    <h3 class="font-bold group-hover:text-primary-500 cursor-pointer transition-colors text-zinc-800 dark:text-zinc-200">
                        {{ post.title }}
                    </h3>
                    </Link>

                    <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                        {{ post.excerpt }}
                    </p>

                    <div class="mt-4 text-sm text-zinc-600 dark:text-zinc-400 flex gap-1 items-center font-semibold">
                        <UserIcon class="w-4 h-4" />
                        <span>{{ post.author }}</span>
                    </div>

                    <template #footer>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-zinc-500 font-semibold">{{ post.date }}</span>
                            <Button as="router-link" :to="post.link" variant="primary" size="sm">
                                Lire l’article
                            </Button>
                        </div>
                    </template>
                </CardImage>
            </div>
        </div>
        <div class="flex items-center justify-center mt-6">
            <Button as="router-link" :to="{ name: 'blog' }" size="lg" variant="transparent" class="flex items-center gap-2">
                Voir tous les articles
                <ArrowLongRightIcon class="w-4" />
            </Button>
        </div>
    </Section>
</template>
