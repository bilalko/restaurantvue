import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/components/Frontpage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: () => import('@/components/Menu.vue')
    },
    {
      path: '/menubreakfast',
      name: 'menubreakfast',
      component: () => import('@/components/menubreakfast.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('@/components/reservation.vue')
    },
    {
      path: '/MenuDinner',
      name: 'MenuDinner',
      component: () => import('@/components/MenuDinner.vue')
    },
    {
      path: '/MenuDrinks',
      name: 'MenuDrinks',
      component: () => import('@/components/MenuDrinks.vue')
    },
    {
      path: '/classes',
      name: 'classes',
      component: () => import('@/components/classes.vue')
    }
  ]
})
