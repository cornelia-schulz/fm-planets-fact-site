import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Earth from '../views/Earth.vue'
import Mercury from '../views/Mercury.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  },
  {
    path: '/',
    name: 'Mercury',
    component: Mercury
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
