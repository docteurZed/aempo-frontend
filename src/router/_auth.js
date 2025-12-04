import { ForgotPassword, Login, ResetPassword } from '@/modules/auth'

export default [
    {
        path: '/',
        children: [
            {
                path: 'connexion',
                name: 'login',
                component: Login,
                meta: {
                    title: 'Connexion',
                },
            },
            {
                path: 'mot-de-passe-oublie',
                name: 'forgotPassword',
                component: ForgotPassword,
                meta: {
                    title: 'Mot de passe oublié',
                },
            },
            {
                path: '/reinitialiser-mot-de-passe/:token',
                name: 'resetPassword',
                component: ResetPassword,
                props: (route) => ({ token: route.params.token, email: route.query.email }),
                meta: {
                    title: 'Réinitialisation du mot de passe',
                },
            },
        ],
    },
]
