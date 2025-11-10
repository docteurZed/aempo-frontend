<script setup>
import PublicLayout from '@/layouts/PublicLayout.vue';
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue';
import Section from '@/components/pages/public/Section.vue';
import SectionTitle from '@/components/pages/public/SectionTitle.vue';
import Modal from '@/components/ui/modal/Modal.vue'; // ton composant Modal

import { ref } from 'vue';
import { RectangleGroupIcon } from '@heroicons/vue/24/solid';

const committees = [
    {
        sigle: "SCOME",
        name: "Éducation médicale",
        description: "Créer un environnement d’apprentissage optimal et coordonner les trainings.",
        details: [
            "Étude et appréciation de l’enseignement théorique et pratique.",
            "Information pédagogique sur nouvelles orientations et réformes.",
            "Commande et gestion des livres et matériels médicaux.",
            "Organisation du comité de thèse.",
            "Mise en place d’un pôle de recherche biomédicale et pharmaceutique.",
            "Organisation des formations sur l’utilisation de l’outil informatique en milieu médical."
        ]
    },
    {
        sigle: "SCOPH",
        name: "Santé publique & Comité scientifique",
        description: "Impliquer les étudiants dans les actions de santé publique nationales et internationales.",
        details: [
            "Répertorier les problèmes de santé publique et mettre en œuvre des projets.",
            "Participer aux campagnes de sensibilisation et actions humanitaires.",
            "Actions lors des journées mondiales de l’OMS.",
            "Assurer la couverture sanitaire pour les étudiants en médecine, pharmacie et odontostomatologie.",
            "Organisation de séances de collecte de sang."
        ]
    },
    {
        sigle: "SCORA",
        name: "Santé sexuelle et IST",
        description: "Éveiller les consciences sur la santé de la reproduction et le VIH/SIDA.",
        details: [
            "Sensibilisation sur la santé de la reproduction.",
            "Diffusion de connaissances sur le VIH/SIDA et autres IST.",
            "Combattre les stigmatisations et discriminations."
        ]
    },
    {
        sigle: "SCOPE",
        name: "Échanges professionnels & Stages",
        description: "Promouvoir la coopération internationale et organiser des stages.",
        details: [
            "Organiser les échanges internationaux IFMSA.",
            "Organisation des stages particuliers nationaux."
        ]
    },
    {
        sigle: "SCORP",
        name: "Échanges de recherche & Comité scientifique",
        description: "Offrir aux étudiants une expérience éducative avancée.",
        details: [
            "Participation au programme d’échange de recherche IFMSA.",
            "Organisation des stages nationaux en laboratoires de recherche médicale.",
            "Organisation des activités scientifiques, concours de communication et jeux scientifiques."
        ]
    },
    {
        sigle: "SCORP-HR",
        name: "Droits humains & Paix",
        description: "Promouvoir un monde de respect, dignité et éthique.",
        details: [
            "Faciliter un monde où solutions pacifiques sont recherchées.",
            "Promouvoir l’éthique chez les étudiants en médecine et pharmacie."
        ]
    }
];

const activeCommittee = ref(null);
const modalRef = ref(null);

function openModal(committee) {
    activeCommittee.value = committee;
    modalRef.value.show();
}
</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'Comités permanents'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'A propos', href: '/about' },
            { label: 'Comités permanents' }
        ]" bg-image="/img/image-5.jpg" />

        <Section>
            <SectionTitle title="Nos Comités Permanents" subtitle="Découvrez les différents comités et leurs missions"
                align="center" />

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div v-for="committee in committees" :key="committee.name"
                    class="bg-zinc-200 dark:bg-zinc-800 rounded-xl p-6 shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    @click="openModal(committee)">
                    <div class="text-secondary-500 text-sm font-bold mb-1">{{ committee.sigle }}</div>
                    <h3 class="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">{{ committee.name }}</h3>
                    <p class="text-zinc-600 dark:text-zinc-500 text-sm">{{ committee.description }}</p>
                </div>
            </div>
        </Section>

        <Modal ref="modalRef" size="lg" placement="center">
            <template #header>
                <div class="text-secondary-500 text-sm font-bold">
                    {{ activeCommittee?.sigle }} - {{ activeCommittee?.name }}
                </div>
            </template>
            <ul class="text-zinc-800 dark:text-zinc-200 space-y-2">
                <li v-for="(item, index) in activeCommittee?.details" :key="index" class="flex items-center gap-2">
                    <RectangleGroupIcon class="w-5 h-5 text-primary-400" />
                    <div class="text-sm">
                        {{ item }}
                    </div>
                </li>
            </ul>
        </Modal>
    </PublicLayout>
</template>
