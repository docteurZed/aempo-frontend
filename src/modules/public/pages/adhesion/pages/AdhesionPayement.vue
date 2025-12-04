<script setup>
import { Button } from '@/components'
import { Section, SectionTitle } from '@/modules/public/components'
import { Banknote } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const moyenPaiement = ref('')
const montant = 2000
</script>

<template>
    <Section>
        <SectionTitle
            title="Adhésion"
            subtitle="Rejoignez notre association pour ensemble continuez l'aventure."
        />

        <div class="max-w-3xl mx-auto">
            <div
                class="p-4 border rounded-md bg-muted border-default mb-6 text-default space-y-2"
            >
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
                <Banknote class="w-10 h-10 mx-auto text-secondary mb-2" />

                <p class="text-lg font-semibold text-muted">
                    Frais d'adhésion
                </p>

                <span class="text-3xl md:text-4xl font-extrabold text-secondary">
                    {{ montant }} FCFA
                </span>
            </div>

            <div class="mb-6">
                <p class="font-semibold mb-3 text-muted text-center">
                    Choisir une méthode de paiement
                </p>

                <div class="flex flex-col gap-3">
                    <label
                        class="flex items-center gap-4 p-3 border rounded-xl cursor-pointer transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 border-default"
                    >
                        <input
                            type="radio"
                            name="paiement"
                            value="TMoney"
                            v-model="moyenPaiement"
                            class="w-5 h-5 text-primary focus:ring-primary"
                        />

                        <img
                            src="/img/mixx-logo.png"
                            alt="TMoney"
                            class="w-12 h-12 object-contain rounded-md"
                        />

                        <span class="font-semibold text-default"> TMoney </span>
                    </label>

                    <label
                        class="flex items-center gap-4 p-3 border rounded-xl cursor-pointer transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 border-default"
                    >
                        <input
                            type="radio"
                            name="paiement"
                            value="Flooz"
                            v-model="moyenPaiement"
                            class="w-5 h-5 text-primary focus-primary"
                        />

                        <img
                            src="/img/moov-logo.png"
                            alt="Flooz"
                            class="w-12 h-12 object-contain rounded-md"
                        />

                        <span class="font-semibold text-default"> Flooz </span>
                    </label>
                </div>
            </div>

            <Button variant="primary" class="w-full"> Valider le paiement </Button>
        </div>
    </Section>
</template>
