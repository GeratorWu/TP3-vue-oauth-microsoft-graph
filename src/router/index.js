import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ConvPage from '@/components/ConvPage.vue' // Crée ce composant si tu veux une page About

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: ConvPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
