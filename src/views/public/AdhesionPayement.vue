<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import Radio from '@/components/form/choice/Radio.vue'
import { addToast } from '@/composables/ui/toastManager'
import Section from '@/components/pages/public/Section.vue'
import SectionTitle from '@/components/pages/public/SectionTitle.vue'
import { BanknotesIcon } from '@heroicons/vue/24/solid'

const route = useRoute()

const moyenPaiement = ref('')
const montant = 2000
</script>

<template>
    <Section>
        <SectionTitle title="Adhésion" subtitle="Rejoignez notre association pour ensemble continuez l'aventure." />

        <div class="max-w-3xl mx-auto">
            <div
                class="p-4 border rounded-md bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 mb-6 text-zinc-800 dark:text-zinc-200 text-sm space-y-2">
                <div class="grid grid-cols-3 gap-1 justify-center">
                    <span class="text-right font-semibold">Nom</span>
                    <span class="text-center">:</span>
                    <span class="text-left font-bold">DOE</span>
                </div>
                <div class="grid grid-cols-3 gap-1 justify-center">
                    <span class="text-right font-semibold">Prénoms</span>
                    <span class="text-center">:</span>
                    <span class="text-left font-bold">John</span>
                </div>
                <div class="grid grid-cols-3 gap-1 justify-center">
                    <span class="text-right font-semibold">Filière</span>
                    <span class="text-center">:</span>
                    <span class="text-left font-bold">Médecine</span>
                </div>
                <div class="grid grid-cols-3 gap-1 justify-center">
                    <span class="text-right font-semibold">Niveau</span>
                    <span class="text-center">:</span>
                    <span class="text-left font-bold">Interne</span>
                </div>
                <div class="grid grid-cols-3 gap-1 justify-center">
                    <span class="text-right font-semibold">Section</span>
                    <span class="text-center">:</span>
                    <span class="text-left font-bold">Lomé</span>
                </div>
            </div>

            <div class="text-center mt-4 mb-6">
                <BanknotesIcon class="w-10 h-10 mx-auto text-secondary-500 mb-2" />

                <p class="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                    Frais d'adhésion
                </p>

                <span class="text-3xl md:text-4xl font-extrabold text-secondary-500">
                    {{ montant }} FCFA
                </span>
            </div>


            <div class="mb-6">
                <p class="font-semibold mb-3 text-zinc-700 dark:text-zinc-300 text-center">
                    Choisir une méthode de paiement
                </p>

                <div class="flex flex-col gap-3">

                    <label class="flex items-center gap-4 p-3 border rounded-xl cursor-pointer transition-all duration-200
                   hover:bg-zinc-200 dark:hover:bg-zinc-800
                   border-zinc-300 dark:border-zinc-700">
                        <input type="radio" name="paiement" value="TMoney" v-model="moyenPaiement"
                            class="w-5 h-5 text-primary-600 focus:ring-primary-500" />

                        <img src="/img/mixx-logo.png" alt="TMoney" class="w-12 h-12 object-contain rounded-md" />

                        <span class="font-semibold text-zinc-800 dark:text-zinc-200">
                            TMoney
                        </span>
                    </label>

                    <label class="flex items-center gap-4 p-3 border rounded-xl cursor-pointer transition-all duration-200
                   hover:bg-zinc-200 dark:hover:bg-zinc-800
                   border-zinc-300 dark:border-zinc-700">
                        <input type="radio" name="paiement" value="Flooz" v-model="moyenPaiement"
                            class="w-5 h-5 text-primary-600 focus:ring-primary-500" />

                        <img src="/img/moov-logo.png" alt="Flooz" class="w-12 h-12 object-contain rounded-md" />

                        <span class="font-semibold text-zinc-800 dark:text-zinc-200">
                            Flooz
                        </span>
                    </label>

                </div>
            </div>

            <Button variant="primary" @click="
                moyenPaiement
                    ? addToast('Paiement en cours...', 'info')
                    : addToast('Sélectionnez un moyen de paiement.', 'error')
                " class="w-full">
                Valider le paiement
            </Button>
        </div>
    </Section>
</template>
