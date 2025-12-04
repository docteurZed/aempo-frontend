<script setup>
import { Hero, PublicWrapper } from '@/modules/public/components'
import { GalerieSection, PresentationSection, StatSection, ValeurSection } from '../sections';
</script>

<template>
    <PublicWrapper>
        <Hero
            :title="'À propos'"
            :breadcrumb-items="[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]"
            bg-image="/img/image-3.jpg"
        />

        <PresentationSection />

        <ValeurSection />

        <StatSection />

        <GalerieSection />
    </PublicWrapper>
</template>
