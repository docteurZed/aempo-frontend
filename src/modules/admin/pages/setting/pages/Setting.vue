<script setup>
import { AdminWrapper } from '@/modules/admin';
import { ref } from 'vue';
import { BrandingSection, FinanceSection, GeneralSection, MediaSection } from '../sections';

const section = ref('general');

function changeSection(s) {
    section.value = s;
}
</script>

<template>
    <AdminWrapper>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">

            <div class="space-y-3">
                <button v-for="item in ['general', 'media', 'branding', 'finance']" :key="item" class="w-full inline-flex items-center justify-center px-4 py-2 font-medium rounded-lg focus:outline-none focus:ring-1 transition-colors duration-150 focus:ring-offset-1 cursor-pointer border border-default"
                    :class="section === item ? 'bg-secondary text-white' : ' text-default hover:bg-zinc-800 dark:hover:bg-zinc-700/50 hover:text-white'"@click="changeSection(item)">
                        {{ {
                            general: 'Généraux',
                            media: 'Réseaux sociaux',
                            branding: 'Branding',
                            finance: 'Finance',
                        }[item] }}
                </button>
            </div>

            <div class="md:col-span-4">

                <GeneralSection v-if="section === 'general'" />

                <MediaSection v-else-if="section === 'media'" />

                <BrandingSection v-else-if="section === 'branding'" />

                <FinanceSection v-else-if="section === 'finance'" />

            </div>
        </div>
    </AdminWrapper>
</template>
