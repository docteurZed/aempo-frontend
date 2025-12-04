<script setup>
import { Section, SectionTitle } from '@/modules/public/components';

</script>

<template>
    <Section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative">
                <img
                    src="/img/image-1.jpg"
                    alt="Présentation"
                    class="w-full object-cover rounded-tl-xl rounded-br-xl shadow-lg"
                />

                <div class="absolute -top-3 -right-3 w-16 h-2 bg-secondary rounded-full"></div>
                <div class="absolute -top-3 -right-3 w-2 h-16 bg-secondary rounded-full"></div>
                <div
                    class="absolute -bottom-3 -left-3 w-16 h-2 bg-secondary rounded-full"
                ></div>
                <div
                    class="absolute -bottom-3 -left-3 w-2 h-16 bg-secondary rounded-full"
                ></div>
            </div>
            <div>
                <SectionTitle
                    title="Qui sommes-nous"
                    subtitle="Une communauté engagée au service de la santé"
                    align="right"
                />
                <div class="text-muted leading-relaxed space-y-4">
                    <p>
                        L’AEMPO-Togo regroupe les étudiants en Médecine, Pharmacie et
                        Odontostomatologie du Togo. Depuis sa création en 1979, l’association s’est
                        donnée pour mission de contribuer à la formation de futurs professionnels de
                        santé responsables, engagés et capables de répondre aux défis actuels et
                        futurs du système de santé.
                    </p>
                    <p>
                        Grâce à ses actions éducatives, sociales, scientifiques et culturelles,
                        l’AEMPO-Togo encourage l’épanouissement estudiantin, le renforcement des
                        capacités, l’innovation et le leadership.
                    </p>
                </div>
            </div>
        </div>
    </Section>
</template>
