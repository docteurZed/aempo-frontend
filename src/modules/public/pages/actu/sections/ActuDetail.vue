<script setup lang="ts">
import Badge from '@/components/ui/badge/Badge.vue'
import Card from '@/components/ui/card/Card.vue'
import Link from '@/components/ui/link/Link.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <Card class="hover:shadow-md transition">
        <div class="flex items-center justify-between mb-2">
            <Badge variant="info">{{ type }}</Badge>
            <span class="text-xs text-zinc-500 font-medium">{{ date }}</span>
        </div>

        <Link as="router-link" :to="link">
            <h3
                class="font-bold text-zinc-800 dark:text-zinc-200 mb-2 line-clamp-2 hover:text-primary-500"
            >
                {{ title }}
            </h3>
        </Link>

        <p class="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
            {{ excerpt }}
        </p>

        <Link
            as="router-link"
            :to="link"
            variant="secondary"
            size="sm"
            class="mt-4 flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-semibold group transition"
        >
            Lire plus
            <ArrowLongRightIcon
                class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
            />
        </Link>
    </Card>
</template>
