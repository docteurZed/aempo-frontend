<script setup>
import { PublicWrapper } from '@/modules/public/components'
import { AboutSection, ActuSection, BlogSection, CtaSection, HeroSection, PartnerSection, StatSection } from '../sections';

const heroImages = [
    './img/image-1.jpg',
    './img/image-2.jpg',
    './img/image-3.jpg',
    './img/image-4.jpg',
    './img/image-5.jpg',
]
</script>

<template>
    <PublicWrapper>
        <HeroSection :images="heroImages" />

        <AboutSection />

        <StatSection />

        <CtaSection />

        <!-- <BlogSection /> -->

        <!-- <ActuSection /> -->

        <PartnerSection />
    </PublicWrapper>
</template>
