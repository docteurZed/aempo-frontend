<script setup>
import Navbar from './Navbar.vue'
import { EnvelopeIcon, GlobeAltIcon, MapIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import Sidebar from './Sidebar.vue'
import { ref } from 'vue'
import appConfig from '../../../../config/app'
import SidebarMenu from './SidebarMenu.vue'
import Button from '@/components/ui/button/Button.vue'
import NavbarMenu from './NavbarMenu.vue'
import Facebook from '@/components/ui/media-icon/Facebook.vue'
import Linkedin from '@/components/ui/media-icon/Linkedin.vue'
import Tiktok from '@/components/ui/media-icon/Tiktok.vue'
import Instagram from '@/components/ui/media-icon/Instagram.vue'
import X from '@/components/ui/media-icon/X.vue'
import Github from '@/components/ui/media-icon/Github.vue'
import Threads from '@/components/ui/media-icon/Threads.vue'
import Whatsapp from '@/components/ui/media-icon/Whatsapp.vue'

const emit = defineEmits(['toggle-sidebar'])
const sidebarRef = ref(null)
</script>

<template>
  <header>
    <div
      class="w-full bg-primary-600 dark:bg-primary-500 text-sm font-semibold flex flex-col md:flex-row items-center justify-between py-3 px-8 md:px-16 text-zinc-200 gap-4">
      <div class="flex gap-2 md:gap-4 items-center justify-center md:justify-start flex-wrap">
        <span class="flex gap-1 items-center">
          <MapIcon class="w-5 h-5" />
          {{ appConfig.address }}
        </span>
        <span class="flex gap-1 items-center">
          <EnvelopeIcon class="w-5 h-5" />
          <a :href="`mailto:${appConfig.email}`">
            {{ appConfig.email }}
          </a>
        </span>
        <span class="flex gap-1 items-center">
          <PhoneIcon class="w-5 h-5" />
          {{ appConfig.phone }}
        </span>
      </div>

      <div class="flex gap-3 items-center text-zinc-200">
        <Facebook class="hover:text-white" variant="light" />
        <Linkedin class="hover:text-white" variant="light" />
        <Tiktok class="hover:text-white" variant="light" />
        <Instagram class="hover:text-white" variant="light" />
        <Github class="hover:text-white" variant="light" />
        <Threads class="hover:text-white" variant="light" />
        <Whatsapp class="hover:text-white" variant="light" />
        <X class="hover:text-white" variant="light" />
      </div>
    </div>

    <Navbar @toggle-sidebar="sidebarRef.show()">
      <template #menu>
        <NavbarMenu label="Accueil" :to="{ name: 'home' }" />
        <NavbarMenu label="À propos" hasChildren>
          <NavbarMenu label="Présentation" :to="{ name: 'about' }" />
          <NavbarMenu label="Historique" to="/" />
          <NavbarMenu label="Missions et Visions" to="/" />
          <NavbarMenu label="Bureau Exécutif" to="/" />
          <NavbarMenu label="Comités permanents" to="/" />
          <NavbarMenu label="Partenaires" to="/" />
        </NavbarMenu>

        <NavbarMenu label="Blog" :to="{ name: 'blog' }" />
        <NavbarMenu label="Actualités" :to="{ name: 'actu' }" />
        <NavbarMenu label="Contact" :to="{ name: 'contact' }" />
      </template>

      <template #actions>
        <Button as="router-link" :to="{ name: 'login' }" variant="primary">Connexion</Button>
      </template>
    </Navbar>

    <Sidebar ref="sidebarRef">
      <SidebarMenu label="Accueil" :to="{ name: 'home' }" />
      <SidebarMenu label="À propos" hasChildren>
        <SidebarMenu label="Présentation" :to="{ name: 'about' }" />
        <SidebarMenu label="Historique" to="/" />
        <SidebarMenu label="Missions et Visions" to="/" />
        <SidebarMenu label="Bureau Exécutif" to="/" />
        <SidebarMenu label="Comités permanents" to="/" />
        <SidebarMenu label="Partenaires" to="/" />
      </SidebarMenu>

      <SidebarMenu label="Blog" :to="{ name: 'blog' }" />
      <SidebarMenu label="Actualités" :to="{ name: 'actu' }" />
      <SidebarMenu label="Contact" :to="{ name: 'contact' }" />

      <Button as="router-link" :to="{ name: 'login' }" variant="primary">Connexion</Button>
    </Sidebar>
  </header>
</template>
