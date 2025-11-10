<script setup>
import PublicLayout from '@/layouts/PublicLayout.vue';
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue';
import Section from '@/components/pages/public/Section.vue';
import SectionTitle from '@/components/pages/public/SectionTitle.vue';
import Modal from '@/components/ui/modal/Modal.vue';
import { ref } from 'vue';
import Button from '@/components/ui/button/Button.vue';

const nationalBoard = [
    {
        poste: "Président National",
        name: "Dr. Jean Dupont",
        photo: "/img/image-1.jpg",
        filiere: "Médecine",
        niveau: "6e année",
        description: "Coordonne les activités du BE et supervise tous les Standing Committees.",
        mandat: "Superviser l'exécution du plan annuel, représenter l'association, proposer le budget annuel et diriger les délégations."
    },
    {
        poste: "Vice-Président aux Affaires Internes",
        name: "Dr. Marie Kodjo",
        photo: "/img/image-2.jpg",
        filiere: "Pharmacie",
        niveau: "5e année",
        description: "Supervise la vie interne, les bureaux locaux et le développement des membres.",
        mandat: "Coordonner les activités internes et les formations, médiateur principal au sein du Bureau Exécutif."
    },
    {
        poste: "Vice-Président aux Affaires Externes",
        name: "Dr. Paul Tchagba",
        photo: "/img/image-3.jpg",
        filiere: "Odontostomatologie",
        niveau: "6e année",
        description: "Représente l’association à l’international, maintient les partenariats et supervise la communication externe.",
        mandat: "Superviser les relations externes, initier les partenariats et coordonner les rapports externes de l'association."
    },
    {
        poste: "Secrétaire Général",
        name: "Dr. Amélie Adzo",
        photo: "/img/image-4.jpg",
        filiere: "Médecine",
        niveau: "5e année",
        description: "Gère le secrétariat général, l’archivage et les documents officiels de l’association.",
        mandat: "Préparer les réunions, gérer la base de données des membres et assurer le lien entre le Président et les autres membres."
    },
    {
        poste: "Trésorier Général",
        name: "Dr. Alain Mensah",
        photo: "/img/image-5.jpg",
        filiere: "Pharmacie",
        niveau: "6e année",
        description: "Responsable de la gestion financière, des budgets et des rapports financiers.",
        mandat: "Établir le budget prévisionnel, gérer les cotisations et les fonds de l'association."
    },
];

const localBoards = [
    {
        location: "Lomé",
        members: [
            {
                poste: "Président Local",
                name: "Dr. Kossi A.",
                photo: "/img/image-2.jpg",
                filiere: "Médecine",
                niveau: "4e année",
                description: "Supervise les activités du bureau local et coordonne les projets dans la ville de Lomé.",
                mandat: "Assurer la continuité des projets locaux et représenter le bureau local au niveau national."
            },
            {
                poste: "Secrétaire Local",
                name: "Dr. Akissi B.",
                photo: "/img/image-4.jpg",
                filiere: "Odontostomatologie",
                niveau: "3e année",
                description: "Gestion administrative locale, suivi des activités et rédaction des comptes-rendus.",
                mandat: "Assurer la communication interne locale et le suivi des projets."
            },
        ]
    },
    {
        location: "Kara",
        members: [
            {
                poste: "Président Local",
                name: "Dr. Tchabi C.",
                photo: "/img/image-3.jpg",
                filiere: "Pharmacie",
                niveau: "5e année",
                description: "Dirige les initiatives locales et coordonne les actions au sein de la région de Kara.",
                mandat: "Maintenir le lien avec le Bureau National et superviser les projets locaux."
            },
            {
                poste: "Secrétaire Local",
                name: "Dr. Essi D.",
                photo: "/img/image-1.jpg",
                filiere: "Médecine",
                niveau: "4e année",
                description: "Assure la gestion administrative et le suivi des projets locaux.",
                mandat: "Rédiger les rapports locaux et coordonner les membres pour les activités."
            },
        ]
    }
];

const showOldBoards = ref(false);
const oldBoards = [
    {
        year: "2022",
        members: [
            {
                poste: "Président National",
                name: "Dr. Yao K.",
                photo: "/img/image-5.jpg",
                filiere: "Médecine",
                niveau: "6e année",
                description: "Coordonne les activités du BE pour l'année 2022.",
                mandat: "Superviser les projets nationaux et maintenir les relations avec les réseaux internationaux."
            },
            {
                poste: "Vice-Président aux Affaires Internes",
                name: "Dr. Fafa L.",
                photo: "/img/image-4.jpg",
                filiere: "Pharmacie",
                niveau: "5e année",
                description: "Supervise la vie interne pour l'année 2022.",
                mandat: "Coordonner les activités internes et les bureaux locaux."
            },
        ]
    },
];

const activeMember = ref(null);
const modalRef = ref(null);

function openModal(member) {
    activeMember.value = member;
    modalRef.value.show();
}
</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'Bureaux Exécutifs'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'A propos', href: '/a-propos' },
            { label: 'Bureaux Exécutifs' }
        ]" bg-image="/img/image-3.jpg" />

        <Section>
            <SectionTitle title="Bureau Exécutif National" subtitle="Membres actuels" align="center" />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div v-for="member in nationalBoard" :key="member.poste"
                    class="bg-zinc-200 dark:bg-zinc-800 rounded-xl p-4 shadow cursor-pointer hover:shadow-lg transition"
                    @click="openModal(member)">
                    <img :src="member.photo" alt="" class="w-full h-48 object-cover rounded-lg mb-3" />
                    <div class="text-sm text-secondary-500 font-bold">{{ member.poste }}</div>
                    <h3 class="font-semibold text-zinc-800 dark:text-zinc-200">{{ member.name }}</h3>
                </div>
            </div>
        </Section>

        <Section class="bg-white dark:bg-zinc-950/40">
            <SectionTitle title="Bureaux Locaux" subtitle="Lomé et Kara" align="center" />
            <div v-for="board in localBoards" :key="board.location" class="mt-6">
                <h3 class="text-xl font-extrabold text-primary-500 mb-4">{{ board.location }}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="member in board.members" :key="member.poste"
                        class="bg-zinc-200 dark:bg-zinc-800 rounded-xl p-4 shadow cursor-pointer hover:shadow-lg transition"
                        @click="openModal(member)">
                        <img :src="member.photo" alt="" class="w-full h-48 object-cover rounded-lg mb-3" />
                        <div class="text-sm text-secondary-500 font-bold">{{ member.poste }}</div>
                        <h3 class="font-semibold text-zinc-800 dark:text-zinc-200">{{ member.name }}</h3>
                    </div>
                </div>
            </div>
        </Section>

        <Section>
            <div class="flex justify-center items-center">
                <Button variant="transparent" @click="showOldBoards = !showOldBoards">
                    {{ showOldBoards ? 'Cacher les anciens bureaux' : 'Afficher les anciens bureaux' }}
                </Button>
            </div>

            <div v-if="showOldBoards" class="mt-6 space-y-6">
                <div v-for="board in oldBoards" :key="board.year">
                    <h4 class="text-xl font-extrabold text-primary-500">{{ board.year }}</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                        <div v-for="member in board.members" :key="member.poste"
                            class="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-4 shadow cursor-pointer hover:shadow-lg transition"
                            @click="openModal(member)">
                            <img :src="member.photo" alt="" class="w-full h-48 object-cover rounded-lg mb-3" />
                            <div class="text-sm text-secondary-500 font-bold">{{ member.poste }}</div>
                            <h3 class="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{{ member.name }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        <Modal ref="modalRef" size="xl" placement="center">
            <template #header>
                <span class="text-secondary-500">{{ activeMember?.poste }}</span> - {{ activeMember?.name }}
            </template>

            <div class="flex flex-col lg:flex-row gap-6">
                <div class="flex-shrink-0 w-full lg:w-64">
                    <img v-if="activeMember?.photo" :src="activeMember.photo" alt=""
                        class="w-full h-full object-cover rounded-lg shadow" />
                </div>
                <div class="flex-1 space-y-4 text-zinc-800 dark:text-zinc-200">
                    <p v-if="activeMember?.filiere"><strong class="text-primary-500">Filière :</strong> {{
                        activeMember.filiere }}
                    </p>
                    <p v-if="activeMember?.niveau"><strong class="text-primary-500">Niveau :</strong> {{
                        activeMember.niveau }}</p>
                    <p v-if="activeMember?.description"><strong class="text-primary-500">Biographie :</strong> {{
                        activeMember.description }}</p>
                    <p v-if="activeMember?.mandat"><strong class="text-primary-500">Programme de mandat :</strong> {{
                        activeMember.mandat }}</p>
                </div>
            </div>
        </Modal>
    </PublicLayout>
</template>
