import Dashboard from '@/views/admin/Dashboard.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'
import Login from '@/views/auth/Login.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import About from '@/views/public/About.vue'
import Blog from '@/views/public/Blog.vue'
import Contact from '@/views/public/Contact.vue'
import Actu from '@/views/public/Actu.vue'
import Home from '@/views/public/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import History from '@/views/public/History.vue'
import Mission from '@/views/public/Mission.vue'
import StandingCommities from '@/views/public/StandingCommities.vue'
import Bureau from '@/views/public/Bureau.vue'
import BlogDetail from '@/views/public/BlogDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/a-propos',
    name: 'about',
    component: About,
  },
  {
    path: '/historique',
    name: 'history',
    component: History,
  },
  {
    path: '/visions-et-missions',
    name: 'mission',
    component: Mission,
  },
  {
    path: '/comites-permanents',
    name: 'standingCommitty',
    component: StandingCommities,
  },
  {
    path: '/bureaux-executifs',
    name: 'bureau',
    component: Bureau,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog-detail/:id',
    name: 'blogDetail',
    component: BlogDetail,
    props: true
  },
  {
    path: '/actualites',
    name: 'actu',
    component: Actu,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },

  // Admin
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },

  // Authentification
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: ResetPassword,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
