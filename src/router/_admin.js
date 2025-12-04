import { Dashboard, Setting, User } from '@/modules/admin'

export default [
    {
        path: '/admin',
        meta: { requiresAuth: true },
        children: [
            {
                path: 'tableau-de-bord',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    title: 'Tableau de bord',
                },
            },
            {
                path: 'membres',
                name: 'user',
                component: User,
                meta: {
                    title: 'Membres',
                },
            },
            {
                path: 'parametres',
                name: 'setting',
                component: Setting,
                meta: {
                    title: 'Paramètres',
                    role: ['super_admin'],
                },
            },
        ],
    },
]
