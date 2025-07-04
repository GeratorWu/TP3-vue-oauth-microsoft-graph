import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ConvPage from '@/components/ConvPage.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: ConvPage,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
