<script setup>
import { Section, SectionTitle } from '@/modules/public/components';


// Exemple de partenaires
const partners = [
    {
        id: 1,
        name: 'Université de Lomé',
        logo: './img/logo.png',
        link: 'https://www.univ-lome.tg/',
    },
    {
        id: 2,
        name: 'OMS',
        logo: './img/logo.png',
        link: 'https://www.who.int/fr',
    },
    {
        id: 3,
        name: 'Ministère de la Santé',
        logo: './img/logo.png',
        link: 'https://sante.gouv.tg/',
    },
    {
        id: 4,
        name: 'Université de Paris',
        logo: './img/logo.png',
        link: 'https://www.univ-paris.fr/',
    },
]
</script>

<template>
    <Section>
        <SectionTitle
            title="Nos partenaires"
            subtitle="Ils soutiennent notre mission et nos projets"
        />

        <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center mt-6"
        >
            <a
                v-for="partner in partners"
                :key="partner.id"
                :href="partner.link"
                target="_blank"
            >
                <img :src="partner.logo" :alt="partner.name" class="max-h-12 object-contain" />
            </a>
        </div>
    </Section>
</template>
