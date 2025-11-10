<script setup>
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue';
import Section from '@/components/pages/public/Section.vue';
import SectionTitle from '@/components/pages/public/SectionTitle.vue';
import Button from '@/components/ui/button/Button.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';
import { ChevronLeftIcon, ChevronRightIcon, RectangleGroupIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue'

const slider = ref(null)

const scrollLeft = () => {
    slider.value.scrollBy({
        left: -300,
        behavior: 'smooth'
    })
}

const scrollRight = () => {
    slider.value.scrollBy({
        left: 300,
        behavior: 'smooth'
    })
}
</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'À propos'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'À propos' }
        ]" bg-image="/img/image-3.jpg" />

        <Section>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <img src="/img/image-1.jpg" alt="Présentation"
                        class="w-full object-cover rounded-tl-xl rounded-br-xl shadow-lg" />

                    <div class="absolute -top-3 -right-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -top-3 -right-3 w-2 h-24 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -bottom-3 -left-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -bottom-3 -left-3 w-2 h-24 bg-secondary-500 rounded-full"></div>
                </div>
                <div>
                    <SectionTitle title="Qui sommes-nous" subtitle="Une communauté engagée au service de la santé"
                        align="right" />
                    <div class="text-zinc-800 dark:text-zinc-200 leading-relaxed space-y-4">
                        <p>
                            L’AEMPO-Togo regroupe les étudiants en Médecine, Pharmacie et Odontostomatologie du Togo.
                            Depuis sa création en 1979, l’association s’est donnée pour mission de contribuer à la
                            formation
                            de futurs professionnels de santé responsables, engagés et capables de répondre aux défis
                            actuels et futurs du système de santé.
                        </p>
                        <p>
                            Grâce à ses actions éducatives, sociales, scientifiques et culturelles, l’AEMPO-Togo
                            encourage l’épanouissement estudiantin, le renforcement des capacités, l’innovation et le
                            leadership.
                        </p>
                    </div>
                </div>
            </div>
        </Section>

        <Section>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <SectionTitle title="Nos valeurs" subtitle="Ce en quoi nous croyons" align="left" />
                    <ul class="text-zinc-800 dark:text-zinc-200 space-y-2 leading-relaxed">
                        <li class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            Humanisme et esprit de service
                        </li>
                        <li class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            Engagement en faveur de la santé publique
                        </li>
                        <li class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            Excellence académique et professionnelle
                        </li>
                        <li class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            Solidarité et entraide étudiante
                        </li>
                        <li class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            Inclusion et respect des différences
                        </li>
                        <li class="flex items-center gap-2">
                            <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                            Leadership responsable
                        </li>
                    </ul>
                </div>
                <div class="relative hidden lg:block">
                    <img src="/img/image-2.jpg" alt="Nos valeurs"
                        class="w-full object-cover rounded-tl-xl rounded-br-xl shadow-lg" />

                    <div class="absolute -top-3 -right-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -top-3 -right-3 w-2 h-24 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -bottom-3 -left-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -bottom-3 -left-3 w-2 h-24 bg-secondary-500 rounded-full"></div>
                </div>
            </div>
        </Section>

        <Section class="bg-white dark:bg-zinc-950/40">
            <SectionTitle title="Chiffres clés" subtitle="Ce qui nous définit en quelques faits" align="center" />

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-10">
                <div>
                    <h3 class="text-4xl font-bold text-secondary-500">12+</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Années d’expérience</p>
                </div>

                <div>
                    <h3 class="text-4xl font-bold text-secondary-500">50+</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Membres actifs</p>
                </div>

                <div>
                    <h3 class="text-4xl font-bold text-secondary-500">200+</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Projets réalisés</p>
                </div>

                <div>
                    <h3 class="text-4xl font-bold text-secondary-500">3</h3>
                    <p class="text-zinc-700 dark:text-zinc-300">Zones d’intervention</p>
                </div>
            </div>
        </Section>

        <Section>
            <SectionTitle title="Galerie" subtitle="Découvrez nos activités en images" align="center" />

            <div class="relative mt-8">
                <!-- Slider container -->
                <div ref="slider" class="overflow-x-auto hide-scrollbar scroll-smooth">
                    <div class="flex gap-6 w-max px-2">
                        <img src="/img/image-1.jpg" class="w-80 h-56 object-cover rounded-xl" />
                        <img src="/img/image-2.jpg" class="w-80 h-56 object-cover rounded-xl" />
                        <img src="/img/image-3.jpg" class="w-80 h-56 object-cover rounded-xl" />
                        <img src="/img/image-4.jpg" class="w-80 h-56 object-cover rounded-xl" />
                        <img src="/img/image-5.jpg" class="w-80 h-56 object-cover rounded-xl" />
                    </div>
                </div>

                <!-- Left button -->
                <Button @click="scrollLeft" variant="secondary" size="sm" class="absolute top-1/2 -translate-y-1/2 left-0 shadow rounded-full hover:scale-105 transition">
                    <ChevronLeftIcon class="w-5 h-5" />
                </Button>
                <!-- <button 
                    class=" p-3 bg-white/80 dark:bg-black/60 ">
                    ‹
                </button> -->

                <!-- Right button -->
                 <Button @click="scrollRight" variant="secondary" size="sm" class="absolute top-1/2 -translate-y-1/2 right-0 shadow rounded-full hover:scale-105 transition">
                    <ChevronRightIcon class="w-5 h-5" />
                </Button>
                <!-- <button @click=""
                    class="absolute top-1/2 -translate-y-1/2 right-0 p-3 bg-white/80 dark:bg-black/60 shadow rounded-full hover:scale-105 transition">
                    ›
                </button> -->
            </div>
        </Section>


    </PublicLayout>
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
