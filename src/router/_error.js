import { NotAuthorized, NotFound } from '@/pages'

export default [
    {
        path: '/',
        children: [
            {
                path: ':pathMatch(.*)*',
                name: 'notFound',
                component: NotFound,
                meta: {
                    title: '404',
                },
            },
            {
                path: 'autorisation-requise',
                name: 'notAuthorized',
                component: NotAuthorized,
                meta: {
                    internalOnly: true,
                    title: '405'
                },
            },
        ],
    },
]
