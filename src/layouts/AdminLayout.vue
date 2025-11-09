<script setup>
import { ref } from 'vue'
import Navbar from '@/components/layouts/admin/Navbar.vue'
import Sidebar from '@/components/layouts/admin/Sidebar.vue'
import Drawer from '@/components/ui/drawer/Drawer.vue'

const drawerRef = ref(null)
const openSidebar = () => drawerRef.value?.show()
</script>

<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden pt-0">
    <Navbar @toggle-sidebar="openSidebar" />

    <div class="flex overflow-hidden p-4">
      <aside class="hidden md:block w-1/5 h-full overflow-y-auto p-2">
        <Sidebar />
      </aside>

      <Drawer ref="drawerRef" placement="left" size="md" :dismissible="false">
        <Sidebar />
      </Drawer>

      <main class="flex-1 h-full overflow-y-auto rounded-lg p-4 md:ml-4">
        <slot />
      </main>
    </div>
  </div>
</template>
