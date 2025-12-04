import { defineStore } from 'pinia'
import { reactive } from 'vue'
import appConfig from '@/config/app'
import { api } from '@/services/backend'

export const useConfigStore = defineStore('config', () => {
    const state = reactive({
        name: appConfig.name,
        fullName: appConfig.fullName,
        address: appConfig.address,
        phone: appConfig.phone,
        email: appConfig.email,
        description: '',
        updatedAt: null,
        loaded: false,
        loading: false,
    })

    async function loadConfig(force = false) {
        if (state.loaded && !force) return state

        state.loading = true
        try {
            const { data } = await api.get('/settings')

            const mapped = Object.fromEntries(data.map((s) => [s.key, s.value]))

            if (mapped.full_name) {
                mapped.fullName = mapped.full_name
                delete mapped.full_name
            }

            Object.assign(state, mapped)
            state.updatedAt = Date.now()
            state.loaded = true

            if (state.name) document.title = state.name
        } catch (err) {
            console.warn('❗ Impossible de charger la config', err)
        } finally {
            state.loading = false
        }

        return state
    }

    function setConfig(newConfig) {
        Object.assign(state, newConfig)
        state.updatedAt = Date.now()
        state.loaded = true
        if (state.name) document.title = state.name
    }

    function addToTitle(suffix) {
        if (!suffix) return
        document.title = `${state.name} | ${suffix}`
    }

    return { state, loadConfig, setConfig, addToTitle }
})

export const useMediaStore = defineStore('media', () => {
    const state = reactive({
        facebook: '',
        instagram: '',
        tiktok: '',
        x: '',
        linkedin: '',
        updatedAt: null,
        loaded: false,
        loading: false,
    })

    async function loadMedia(force = false) {
        if (state.loaded && !force) return state

        state.loading = true
        try {
            const { data } = await api.get('/settings?group=media')

            Object.assign(state, Object.fromEntries(data.map((s) => [s.key, s.value])))

            state.updatedAt = Date.now()
            state.loaded = true
        } catch (err) {
            console.warn('❗ Impossible de charger les médias', err)
        } finally {
            state.loading = false
        }

        return state
    }

    return { state, loadMedia }
})
