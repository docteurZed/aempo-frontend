<script setup>
import { Section, SectionTitle } from '@/modules/public/components'

</script>

<template>
    <Section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <SectionTitle
                    title="Qui sommes nous"
                    subtitle="Découvrez les détails nous concernant"
                    align="left"
                />
                <div class="text-default">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, minus
                    beatae facere corporis dolore, temporibus suscipit ipsa itaque similique alias,
                    cumque deserunt optio doloremque? Ipsum neque vitae repellendus molestias! Quod
                    hic beatae molestiae dolores. Libero corrupti ea cumque repellendus.
                </div>
            </div>
            <div class="relative">
                <img
                    src="/img/image-1.jpg"
                    alt="Image"
                    class="w-full object-cover rounded-tl-xl rounded-br-xl"
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
