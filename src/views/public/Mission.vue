<script setup>
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue';
import Section from '@/components/pages/public/Section.vue';
import SectionTitle from '@/components/pages/public/SectionTitle.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';
import { RectangleGroupIcon } from '@heroicons/vue/24/solid';

const missions = [
    "Former des étudiants responsables et compétents en Médecine, Pharmacie et Odontostomatologie.",
    "Promouvoir le leadership et la vie associative pour renforcer les capacités des étudiants.",
    "Contribuer à l'amélioration de la santé publique au Togo par des actions éducatives et sociales."
];

const visions = [
    "Être un acteur clé dans la formation de professionnels de santé engagés et innovants.",
    "Renforcer la solidarité et les échanges internationaux entre étudiants en sciences de la santé.",
    "Favoriser l’innovation et l’excellence dans les projets communautaires et académiques."
];
</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'Mission & Vision'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'A propos', href: '/a-propos' },
            { label: 'Mission & Vision' }
        ]" bg-image="/img/image-4.jpg" />

        <Section>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <SectionTitle title="Notre Mission" subtitle="Ce que nous faisons et pourquoi" align="left" />
                    <ul class="list-disc list-inside text-zinc-800 dark:text-zinc-200 mt-4 space-y-2">
                        <li v-for="(mission, index) in missions" :key="index" class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            {{ mission }}
                        </li>
                    </ul>
                </div>
                <div class="relative">
                    <img src="/img/image-1.jpg" alt="Mission" class="w-full object-cover rounded-tl-xl rounded-br-xl" />
                </div>
            </div>
        </Section>

        <Section class="bg-white dark:bg-zinc-950/40">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative order-last lg:order-first">
                    <img src="/img/image-3.jpg" alt="Vision" class="w-full object-cover rounded-tl-xl rounded-br-xl" />
                </div>
                <div>
                    <SectionTitle title="Notre Vision" subtitle="Nos aspirations et objectifs futurs" align="right" />
                    <ul class="text-zinc-800 dark:text-zinc-200 mt-4 space-y-2">
                        <li v-for="(vision, index) in visions" :key="index" class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            {{ vision }}
                        </li>
                    </ul>
                </div>
            </div>
        </Section>

        <Section>
            <SectionTitle title="Notre devise" subtitle="Ce qui guide nos actions" align="center" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <div
                    class="text-center p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 class="text-xl font-semibold text-secondary-500 mb-2">Excellence</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Poursuivre l’excellence académique et professionnelle.
                    </p>
                </div>
                <div
                    class="text-center p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 class="text-xl font-semibold text-secondary-500 mb-2">Engagement</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Participer activement à la vie associative et sociale.
                    </p>
                </div>
                <div
                    class="text-center p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                    <h3 class="text-xl font-semibold text-secondary-500 mb-2">Solidarité</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Encourager l’entraide entre étudiants et partenaires.
                    </p>
                </div>
            </div>
        </Section>

    </PublicLayout>
</template>
