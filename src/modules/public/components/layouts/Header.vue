<script setup>
import {
    Button,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Threads,
    Tiktok,
    Twitter,
    Whatsapp,
} from '@/components'
import { Mail, Map, Phone } from 'lucide-vue-next'
import Navbar from './Navbar.vue'
import NavbarMenu from './NavbarMenu.vue'
import Sidebar from './Sidebar.vue'
import SidebarMenu from './SidebarMenu.vue'
import { ref } from 'vue'
import { useConfigStore, useMediaStore } from '@/stores/configStore'

const emit = defineEmits(['toggle-sidebar'])
const sidebarRef = ref(null)

const config = useConfigStore()
const media = useMediaStore()
</script>

<template>
    <header>
        <div
            class="hidden md:flex w-full bg-primary text-sm font-semibold py-3 px-8 md:px-16 text-zinc-200 flex items-center justify-between flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex gap-2 md:gap-4 items-center justify-center md:justify-start flex-wrap">
                <span class="flex gap-1 items-center">
                    <Map class="w-5 h-5" />
                    {{ config.state.address }}
                </span>
                <span class="flex gap-1 items-center">
                    <Mail class="w-5 h-5" />
                    <a :href="`mailto:${config.state.email}`"> {{config.state.email}} </a>
                </span>
                <span class="flex gap-1 items-center">
                    <Phone class="w-5 h-5" />
                    {{config.state.phone}}
                </span>
            </div>

            <div class="flex gap-3 items-center text-zinc-200">
                <Facebook v-if="media.state.facebook" class="hover:text-white" />
                <Linkedin v-if="media.state.linkedin" class="hover:text-white" />
                <Tiktok v-if="media.state.tiktok" class="hover:text-white" />
                <Instagram v-if="media.state.instagram" class="hover:text-white" />
                <Twitter v-if="media.state.x" class="hover:text-white" />
            </div>
        </div>

        <Navbar @toggle-sidebar="sidebarRef.show()">
            <template #menu>
                <NavbarMenu label="Accueil" :to="{ name: 'home' }" />

                <NavbarMenu label="A propos" :has-children="true">
                    <NavbarMenu label="Présentation" :to="{ name: 'about' }" />
                    <NavbarMenu label="Historique" :to="{ name: 'history' }" />
                    <NavbarMenu label="Missions et visions" :to="{ name: 'mission' }" />
                    <NavbarMenu label="Comités permanents" :to="{ name: 'standingCommitty' }" />
                    <NavbarMenu label="Bureaux exécutifs" :to="{ name: 'bureau' }" />
                </NavbarMenu>

                <NavbarMenu label="Contact" :to="{ name: 'contact' }" />
            </template>

            <template #actions>
                <Button as="router-link" :to="{ name: 'login' }" variant="primary">Connexion</Button>
            </template>
        </Navbar>

        <Sidebar ref="sidebarRef">
            <SidebarMenu label="Accueil" :to="{ name: 'home' }" />
            <SidebarMenu label="A propos" :has-children="true">
                <SidebarMenu label="Présentation" :to="{ name: 'about' }" />
                <SidebarMenu label="Historique" :to="{ name: 'history' }" />
                <SidebarMenu label="Missions et visions" :to="{ name: 'mission' }" />
                <SidebarMenu label="Comités permanents" :to="{ name: 'standingCommitty' }" />
                <SidebarMenu label="Bureaux exécutifs" :to="{ name: 'bureau' }" />
            </SidebarMenu>

            <SidebarMenu label="Contact" :to="{ name: 'contact' }" />

            <Button as="router-link" :to="{ name: 'login' }" variant="primary">Connexion</Button>
        </Sidebar>
    </header>
</template>
