import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Zajezdy',
    component: () => import('../views/Zajezdy.vue')
  },
  {
    path: '/Informace',
    name: 'Informace',

    component: () => import('../views/Informace.vue')
  },
  {
    path: '/Destinace',
    name: 'Destinace',

    component: () => import('../views/Destinace.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',

    component: () => import('../views/Registration.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
