<script setup>
import { AppLogo } from '@/components'
import { Home, User, Wrench } from 'lucide-vue-next'
import SidebarMenu from './SidebarMenu.vue'
import SidebarGroup from './SidebarGroup.vue'
</script>

<template>
    <div>
        <div class="sm:hidden mb-4 px-3">
            <AppLogo />
        </div>

        <nav class="flex flex-col gap-3 overflow-auto">
            <SidebarMenu label="Tableau de bord" :icon="Home" :to="{ name: 'dashboard' }" />

            <SidebarGroup label="Administration">
                <SidebarMenu label="Utilisateurs" :icon="User" :to="{ name: 'user' }" />
                <SidebarMenu label="Paramètres" :icon="Wrench" :to="{ name: 'setting' }" />
            </SidebarGroup>
        </nav>
    </div>
</template>
