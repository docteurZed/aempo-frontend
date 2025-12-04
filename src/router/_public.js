import {
    About,
    Adhesion,
    AdhesionPayement,
    Bureau,
    Contact,
    History,
    Home,
    Mission,
    StandingCommities,
} from '@/modules/public'

export default [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
            {
                path: 'a-propos',
                name: 'about',
                component: About,
                meta: {
                    title: 'Présentation',
                },
            },
            {
                path: 'historique',
                name: 'history',
                component: History,
                meta: {
                    title: 'Historique',
                },
            },
            {
                path: 'visions-et-missions',
                name: 'mission',
                component: Mission,
                meta: {
                    title: 'Visions et missions',
                },
            },
            {
                path: 'comites-permanents',
                name: 'standingCommitty',
                component: StandingCommities,
                meta: {
                    title: 'Comités permanents',
                },
            },
            {
                path: 'bureaux-executifs',
                name: 'bureau',
                component: Bureau,
                meta: {
                    title: 'Bureaux exécutifs',
                },
            },
            // {
            //     path: 'blog',
            //     name: 'blog',
            //     component: Blog,
            // },
            // {
            //     path: 'blog-detail/:id',
            //     name: 'blogDetail',
            //     component: BlogDetail,
            //     props: true,
            // },
            // {
            //     path: 'actualites',
            //     name: 'actu',
            //     component: Actu,
            // },
            {
                path: 'contact',
                name: 'contact',
                component: Contact,
                meta: {
                    title: 'Contact',
                },
            },

            // Adhésion
            {
                path: 'adhesion',
                name: 'adhesion',
                component: Adhesion,
                meta: {
                    title: 'Adhésion',
                },
            },
            {
                path: 'adhesion-paiement',
                name: 'adhesionPayement',
                component: AdhesionPayement,
                meta: {
                    title: 'Payement sécurisé',
                },
            },
        ],
    },
]
