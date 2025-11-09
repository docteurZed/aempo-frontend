<script setup>
import Header from '@/components/layouts/public/Header.vue'
import Footer from '@/components/layouts/public/Footer.vue'
import Sidebar from '@/components/layouts/public/Sidebar.vue'
import { ref } from 'vue'

const drawerRef = ref(null)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header @toggle-sidebar="drawerRef.show()" />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />

    <Sidebar ref="drawerRef" />
  </div>
</template>
