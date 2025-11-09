<script setup>
import HeroSection from '@/components/pages/public/home/HeroSection.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import StatSection from '@/components/pages/public/home/StatSection.vue'
import AboutSection from '@/components/pages/public/home/AboutSection.vue'
import CtaSection from '@/components/pages/public/home/CtaSection.vue'
import BlogSection from '@/components/pages/public/home/BlogSection.vue'
import ActuSection from '@/components/pages/public/home/ActuSection.vue'
import Partner from '@/components/pages/public/home/Partner.vue'
import ContactSection from '@/components/pages/public/home/ContactSection.vue'

const heroImages = [
  './img/image-1.jpg',
  './img/image-2.jpg',
  './img/image-3.jpg',
  './img/image-4.jpg',
  './img/image-5.jpg',
]
</script>

<template>
  <PublicLayout>
    <HeroSection :images="heroImages" />

    <AboutSection />

    <StatSection />

    <CtaSection />

    <BlogSection />

    <ActuSection />

    <Partner />

    <!-- <ContactSection /> -->
  </PublicLayout>
</template>
