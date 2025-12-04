<script setup>
import { Button } from '@/components';
import { Section } from '@/modules/public/components'

</script>

<template>
    <Section class="relative overflow-hidden text-center text-white py-12 md:py-16">
        <div
            class="absolute inset-0 bg-fixed bg-center bg-cover"
            style="background-image: url('/img/image-4.jpg')"
        ></div>

        <div class="absolute inset-0 bg-primary-900/70 backdrop-blur-[1px]"></div>

        <div class="relative max-w-3xl mx-auto px-6">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
                Rejoignez le mouvement
            </h2>
            <p class="text-lg md:text-xl text-zinc-200 mb-8">
                Ensemble, construisons une AEMPO forte, solidaire et tournée vers l’avenir.
            </p>

            <Button variant="secondary" size="lg" as="router-link" :to="{name: 'adhesion'}"> Adhérer maintenant </Button>
        </div>

        <div
            class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary-900/70 to-transparent"
        ></div>
    </Section>
</template>
