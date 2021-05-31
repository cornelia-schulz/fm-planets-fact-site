import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Earth from '../views/Earth.vue'
import Jupiter from '../views/Jupiter.vue'
import Mars from '../views/Mars.vue'
import Mercury from '../views/Mercury.vue'
import Neptune from '../views/Neptune.vue'
import Saturn from '../views/Saturn.vue'
import Uranus from '../views/Uranus.vue'
import Venus from '../views/Venus.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Mercury',
    component: Mercury
  },
  {
    path: '/venus',
    name: 'Venus',
    component: Venus
  },
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  },
  {
    path: '/jupiter',
    name: 'Jupiter',
    component: Jupiter
  },
  {
    path: '/mars',
    name: 'Mars',
    component: Mars
  },
  {
    path: '/neptune',
    name: 'Neptune',
    component: Neptune
  },
  {
    path: '/saturn',
    name: 'Saturn',
    component: Saturn
  },
  {
    path: '/uranus',
    name: 'Uranus',
    component: Uranus
  },
  {
    path: '/:pathMatch(.*)*',
    component: Mercury
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
