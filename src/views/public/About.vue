<script setup>
import OtherHeroSection from '@/components/pages/public/OtherHeroSection.vue';
import Section from '@/components/pages/public/Section.vue';
import SectionTitle from '@/components/pages/public/SectionTitle.vue';
import PublicLayout from '@/layouts/PublicLayout.vue';

</script>

<template>
    <PublicLayout>
        <OtherHeroSection :title="'A propos'" :breadcrumb-items="[
            { label: 'Accueil', href: '/' },
            { label: 'A propos' }
        ]" bg-image="/img/image-3.jpg" />

        <Section>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <SectionTitle title="Qui sommes nous" subtitle="Découvrez les détails nous concernant"
                        align="left" />
                    <div class="text-zinc-800 dark:text-zinc-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, minus beatae facere
                        corporis
                        dolore, temporibus suscipit ipsa itaque similique alias, cumque deserunt optio doloremque? Ipsum
                        neque
                        vitae repellendus molestias! Quod hic beatae molestiae dolores. Libero corrupti ea cumque
                        repellendus. <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, minus beatae facere.
                    </div>
                </div>
                <div class="relative">
                    <img src="/img/image-1.jpg" alt="Image" class="w-full object-cover rounded-tl-xl rounded-br-xl" />

                    <div class="absolute -top-3 -right-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -top-3 -right-3 w-2 h-24 bg-secondary-500 rounded-full"></div>

                    <div class="absolute -bottom-3 -left-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -bottom-3 -left-3 w-2 h-24 bg-secondary-500 rounded-full"></div>
                </div>
            </div>
        </Section>

        <Section>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative hidden lg:block">
                    <img src="/img/image-1.jpg" alt="Image" class="w-full object-cover rounded-tl-xl rounded-br-xl" />

                    <div class="absolute -top-3 -right-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -top-3 -right-3 w-2 h-24 bg-secondary-500 rounded-full"></div>

                    <div class="absolute -bottom-3 -left-3 w-24 h-2 bg-secondary-500 rounded-full"></div>
                    <div class="absolute -bottom-3 -left-3 w-2 h-24 bg-secondary-500 rounded-full"></div>
                </div>
                <div>
                    <SectionTitle title="Nos valeurs" subtitle="Découvrez les détails nous concernant"
                        align="right" />
                    <div class="text-zinc-800 dark:text-zinc-200">
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, minus beatae facere
                            corporis
                            dolore, temporibus suscipit ipsa itaque similique alias, cumque deserunt optio doloremque?
                        </p>
                        <ul class="list-disc list-inside">
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, dignissimos.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo blanditiis amet reiciendis enim!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    </PublicLayout>
</template>