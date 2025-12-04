import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import { useConfigStore } from '@/stores'
import { useTheme } from '@/composables'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(router)

const configStore = useConfigStore()
await configStore.loadConfig()

useTheme()

app.mount('#app')
