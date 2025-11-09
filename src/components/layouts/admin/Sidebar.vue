<script setup>
import { HomeIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
import SidebarGroup from '@/components/layouts/admin/SidebarGroup.vue'
import SidebarMenu from '@/components/layouts/admin/SidebarMenu.vue'
import appConfig from '../../../../config/app'
import Title from '@/components/ApplicationLogo.vue'
</script>

<template>
  <div>
    <div class="sm:hidden mb-4 px-3">
      <a href="">
        <Title />
      </a>
    </div>

    <nav class="flex flex-col gap-3 overflow-auto">
      <SidebarGroup label="Tableau de bord" defaultOpen>
        <SidebarMenu label="Accueil" :icon="HomeIcon" to="/dashboard" />
      </SidebarGroup>

      <SidebarGroup label="Paramètres">
        <SidebarMenu label="Utilisateurs" :icon="UsersIcon" to="/users" />
        <SidebarMenu label="Configuration" :icon="Cog6ToothIcon" to="/settings" />
      </SidebarGroup>
    </nav>
  </div>
</template>
