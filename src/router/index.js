import { createRouter, createWebHistory } from 'vue-router'
import _admin from './_admin'
import _auth from './_auth'
import _error from './_error'
import _public from './_public'
import { useAuthStore, useConfigStore } from '@/stores'

const routes = [..._admin, ..._auth, ..._error, ..._public]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore()

    if (auth.loadingUser) {
        await auth.loadUser()
    }

    const isAuthenticated = auth.isLogged()

    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: 'login' })
    }

    if (isAuthenticated && ['login', 'forgotPassword'].includes(to.name)) {
        return next({ name: 'dashboard' })
    }

    if (to.meta.role && !to.meta.role.includes(auth.user?.computed_role)) {
        return next({ name: 'notAuthorized' })
    }

    if (to.meta.internalOnly) {
        if (!from.name) {
            return next({ name: 'notFound' })
        }
    }

    return next()
})

router.afterEach((to) => {
    const configStore = useConfigStore()
    if (to.meta.title) {
        configStore.addToTitle(to.meta.title)
    }
})

export default router
