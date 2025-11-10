<script setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import Link from '@/components/ui/link/Link.vue'
import Facebook from '@/components/ui/media-icon/Facebook.vue'
import Github from '@/components/ui/media-icon/Github.vue'
import Instagram from '@/components/ui/media-icon/Instagram.vue'
import Linkedin from '@/components/ui/media-icon/Linkedin.vue'
import Threads from '@/components/ui/media-icon/Threads.vue'
import Tiktok from '@/components/ui/media-icon/Tiktok.vue'
import Whatsapp from '@/components/ui/media-icon/Whatsapp.vue'
import X from '@/components/ui/media-icon/X.vue'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import appConfig from '../../../../config/app'
</script>

<template>
    <footer class="bg-zinc-800 border-t border-zinc-700 dark:border-zinc-600">
        <div class="mx-auto w-full max-w-screen-xl p-6 lg:px-16">

            <div class="md:flex md:justify-between md:gap-8">

                <div class="mb-6 md:mb-0 md:w-2/5">
                    <ApplicationLogo />
                    <p class="mt-4 text-zinc-400 text-sm">
                        Fournir des solutions et informations fiables pour notre communauté.
                    </p>
                    <div class="flex flex-col gap-2 mt-4 text-zinc-400 text-sm">
                        <span class="flex gap-1 items-center">
                            <MapIcon class="w-4 h-4" />
                            {{ appConfig.address }}
                        </span>
                        <span class="flex gap-1 items-center">
                            <EnvelopeIcon class="w-4 h-4" />
                            <a :href="`mailto:${appConfig.email}`" class="hover:underline">
                                {{ appConfig.email }}
                            </a>
                        </span>
                        <span class="flex gap-1 items-center">
                            <PhoneIcon class="w-4 h-4" />
                            {{ appConfig.phone }}
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 sm:gap-6 md:w-3/5">

                    <div>
                        <h2 class="mb-6 font-bold uppercase text-zinc-200">Navigation</h2>
                        <ul class="text-zinc-500 font-medium text-sm">
                            <li class="mb-4">
                                <Link as="router-link" :to="{ name: 'home' }" variant="light" class="hover:underline cursor-pointer">
                                Accueil</Link>
                            </li>
                            <li class="mb-4">
                                <Link as="router-link" :to="{ name: 'about' }" variant="light" class="hover:underline cursor-pointer">À
                                propos</Link>
                            </li>
                            <li class="mb-4">
                                <Link as="router-link" :to="{ name: 'blog' }" variant="light" class="hover:underline cursor-pointer">
                                Blog</Link>
                            </li>
                            <li class="mb-4">
                                <Link as="router-link" :to="{ name: 'actu' }" variant="light" class="hover:underline cursor-pointer">
                                Actualités</Link>
                            </li>
                            <li>
                                <Link as="router-link" :to="{ name: 'contact' }" variant="light"
                                    class="hover:underline cursor-pointer">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-6 font-bold uppercase text-zinc-200">Ressources</h2>
                        <ul class="text-zinc-500 font-medium text-sm">
                            <li class="mb-4">
                                <Link href="/" variant="light" class="hover:underline cursor-pointer">Textes & règlements</Link>
                            </li>
                            <li class="mb-4">
                                <Link href="/" variant="light" class="hover:underline cursor-pointer">Termes & conditions</Link>
                            </li>
                            <li>
                                <Link href="/" variant="light" class="hover:underline cursor-pointer">FAQ / Guides</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <hr class="my-6 border-zinc-500 sm:mx-auto lg:my-8" />

            <div class="sm:flex sm:items-center sm:justify-between text-center">
                <span class="text-sm sm:text-center text-zinc-400">
                    © 2025
                    <Link as="router-link" :to="{ name: 'home' }" variant="light" class="hover:underline cursor-pointer">AEMPO</Link>.
                    Tous droits réservés.
                </span>

                <div class="flex mt-4 justify-center sm:mt-0 gap-3">
                    <Facebook class="hover:text-white" variant="light" title="Facebook" />
                    <Linkedin class="hover:text-white" variant="light" title="LinkedIn" />
                    <Instagram class="hover:text-white" variant="light" title="Instagram" />
                    <Tiktok class="hover:text-white" variant="light" title="TikTok" />
                    <Threads class="hover:text-white" variant="light" title="Threads" />
                    <Whatsapp class="hover:text-white" variant="light" title="Whatsapp" />
                    <Github class="hover:text-white" variant="light" title="GitHub" />
                    <X class="hover:text-white" variant="light" title="X" />
                </div>
            </div>
        </div>
    </footer>
</template>
