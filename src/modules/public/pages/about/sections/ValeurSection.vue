<script setup>
import { Section, SectionTitle } from '@/modules/public/components';
import { ChevronRight } from 'lucide-vue-next';

</script>

<template>
    <Section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <SectionTitle title="Nos valeurs" subtitle="Ce en quoi nous croyons" align="left" />
                <ul class="text-default space-y-2 leading-relaxed">
                    <li class="flex items-center gap-2">
                        <ChevronRight class="w-5 h-5 text-primary-400" />
                        Humanisme et esprit de service
                    </li>
                    <li class="flex items-center gap-2">
                        <ChevronRight class="w-5 h-5 text-primary-400" />
                        Engagement en faveur de la santé publique
                    </li>
                    <li class="flex items-center gap-2">
                        <ChevronRight class="w-5 h-5 text-primary-400" />
                        Excellence académique et professionnelle
                    </li>
                    <li class="flex items-center gap-2">
                        <ChevronRight class="w-5 h-5 text-primary-400" />
                        Solidarité et entraide étudiante
                    </li>
                    <li class="flex items-center gap-2">
                        <ChevronRight class="w-5 h-5 text-primary-400" />
                        Inclusion et respect des différences
                    </li>
                    <li class="flex items-center gap-2">
                        <ChevronRight class="w-5 h-5 text-primary-400" />
                        Leadership responsable
                    </li>
                </ul>
            </div>
            <div class="relative hidden lg:block">
                <img
                    src="/img/image-2.jpg"
                    alt="Nos valeurs"
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
        </div>
    </Section>
</template>
