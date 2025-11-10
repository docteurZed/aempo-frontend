<script setup>
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue';
import Section from '@/components/pages/public/Section.vue';
import SectionTitle from '@/components/pages/public/SectionTitle.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';

const timeline = [
    { year: "1979", title: "Création de l’AEM", desc: "Naissance de l’Association des Étudiants en Médecine pour renforcer l'engagement et la vie associative." },
    { year: "1996", title: "AEMP-Togo", desc: "Intégration de la Pharmacie et changement de dénomination." },
    { year: "2019", title: "AEMPO-Togo", desc: "Ouverture de l’Odontostomatologie et adoption de la structure actuelle." },
    { year: "2020", title: "Décentralisation", desc: "Création des branches locales AEMPO-Lomé et AEMPO-Kara." },
    { year: "2023", title: "Consolidation", desc: "Renforcement des capacités, expansion des projets et adhésion aux réseaux internationaux." },
];
</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'Historique'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'A propos', href: '/about' },
            { label: 'Historique' }
        ]" bg-image="/img/image-3.jpg" />

        <Section>
            <SectionTitle title="Nos Origines" subtitle="Une histoire fondée sur la passion et l'engagement"
                align="left" />
            <p class="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                L’histoire de l’AEMPO-Togo s’inscrit dans une volonté ancienne de rassembler
                les étudiants en Médecine, Pharmacie et Odontostomatologie autour d’un idéal
                commun : la formation, l'engagement et le service à la communauté.
            </p>
        </Section>

        <Section class="bg-white dark:bg-zinc-950/40">
            <SectionTitle title="Évolution dans le temps" subtitle="Les étapes marquantes" align="center" />

            <ol class="relative border-s border-secondary-500 max-w-3xl mx-auto">
                <li v-for="(item, index) in timeline" :key="index" class="ms-4"
                    :class="index !== timeline.length - 1 ? 'mb-10' : ''">
                    <div class="absolute w-3 h-3 bg-primary-500 rounded-full mt-1.5 -start-1.5 
                               border border-white dark:border-zinc-900/40">
                    </div>

                    <time class="mb-1 text-sm font-semibold leading-none text-secondary-500">
                        {{ item.year }}
                    </time>

                    <h3 class="font-bold text-zinc-800 dark:text-zinc-200">
                        {{ item.title }}
                    </h3>

                    <p class="mb-4 text-sm font-normal text-zinc-600 dark:text-zinc-500">
                        {{ item.desc }}
                    </p>
                </li>
            </ol>
        </Section>

        <Section>
            <SectionTitle title="Aujourd’hui" subtitle="Une association moderne et dynamique" align="right" />
            <p class="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                L’AEMPO-Togo est aujourd’hui un acteur central de l’engagement étudiant en santé
                au Togo. Ses membres contribuent activement au développement de projets impactants,
                au niveau local comme international.
            </p>
        </Section>

    </PublicLayout>
</template>
