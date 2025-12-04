<script setup>
import { Hero, PublicWrapper, Section } from '@/modules/public/components';
import { Mail, Map, Phone } from 'lucide-vue-next';
import Form from '../sections/Form.vue';

</script>

<template>
    <PublicWrapper>
        <Hero
            title="Contact"
            subtitle="Explorez les dernières publications."
            :breadcrumb-items="[
                { label: 'Accueil', href: '/' },
                { label: 'Contact', href: '/contact' },
            ]"
            backgroundImage="/img/image-4.jpg"
        />

        <Section class="bg-white dark:bg-zinc-950/25">
            <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 max-w-4xl mx-auto">
                <div
                    class="bg-default rounded-xl p-6 shadow-md hover:shadow-xl transition transform duration-500 flex flex-col items-center gap-3 group ease-in-out hover:scale-105"
                >
                    <div
                        class="p-3 rounded-full bg-muted text-secondary transition-color duration-300 group-hover:bg-secondary-500 group-hover:text-white"
                    >
                        <Mail class="w-8 h-8" />
                    </div>
                    <h3 class="font-bold text-primary uppercase">
                        Email
                    </h3>
                    <a
                        href="mailto:contact@aempo.org"
                        class="text-default text-center font-semibold"
                    >
                        contact@aempo.org
                    </a>
                </div>

                <div
                    class="bg-default rounded-xl p-6 shadow-md hover:shadow-xl transition transform duration-500 flex flex-col items-center gap-3 group ease-in-out hover:scale-105"
                >
                    <div
                        class="p-3 rounded-full bg-muted text-secondary transition-color duration-300 group-hover:bg-secondary-500 group-hover:text-white"
                    >
                        <Phone class="w-8 h-8" />
                    </div>
                    <h3 class="font-bold text-primary uppercase">
                        Téléphone
                    </h3>
                    <p class="text-default text-center font-semibold">+228 90 12 34 56</p>
                </div>

                <div
                    class="bg-default rounded-xl p-6 shadow-md hover:shadow-xl transition transform duration-500 flex flex-col items-center gap-3 group ease-in-out hover:scale-105"
                >
                    <div
                        class="p-3 rounded-full bg-muted text-secondary transition-color duration-300 group-hover:bg-secondary-500 group-hover:text-white"
                    >
                        <Map class="w-8 h-8" />
                    </div>
                    <h3 class="font-bold text-primary uppercase">
                        Adresse
                    </h3>
                    <p class="text-default text-center font-semibold">Université de Lomé</p>
                </div>
            </div>

            <Form />
        </Section>
    </PublicWrapper>
</template>
