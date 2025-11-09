import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'flowbite'

import appConfig from '../config/app.js'

import { useTheme } from '@/composables/useTheme'

useTheme()

const app = createApp(App)

document.documentElement.lang = appConfig.lang
document.title = appConfig.name

app.use(createPinia())
app.use(router)

app.mount('#app')
