import { fetchUser, getCookies, login as userLogin, logout as userLogout } from '@/services'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loadingUser: true,
    }),

    actions: {
        async loadUser() {
            try {
                const res = await fetchUser()
                this.user = res 
            } catch (e) {
                this.user = null
            } finally {
                this.loadingUser = false
            }
        },

        async login(credentials) {
            await getCookies()
            await userLogin(credentials)
            await this.loadUser()
        },

        async logout() {
            await userLogout()
            this.user = null
        },

        isLogged() {
            return !!this.user
        },
    },
})
