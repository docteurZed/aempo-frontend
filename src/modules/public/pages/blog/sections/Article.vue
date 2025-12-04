<script setup>
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'
import CardImage from '@/components/ui/card/CardImage.vue'
import { CalendarDaysIcon, UserIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="relative group">
        <div class="absolute top-3 left-3 z-10">
            <Badge variant="info">{{ category }}</Badge>
        </div>

        <CardImage
            :image-src="imagePath"
            :image-alt="title"
            image-position="top"
            class="h-full flex flex-col"
        >
            <div class="mb-2 text-sm flex justify-between items-center">
                <span
                    class="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 font-semibold"
                >
                    <UserIcon class="w-4 h-4 text-primary-500" />
                    {{ author }}
                </span>
                <span class="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-xs">
                    <CalendarDaysIcon class="w-4 h-4 text-primary-500" />
                    {{ date }}
                </span>
            </div>
            <h3
                class="font-bold group-hover:text-primary-500 cursor-pointer transition-colors text-zinc-800 dark:text-zinc-200"
            >
                {{ title }}
            </h3>

            <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                {{ excerpt }}
            </p>

            <div class="mt-4">
                <Button
                    as="router-link"
                    :to="{ name: 'blogDetail', params: { id: id } }"
                    variant="primary"
                    size="sm"
                >
                    Lire l’article
                </Button>
            </div>
        </CardImage>
    </div>
</template>
