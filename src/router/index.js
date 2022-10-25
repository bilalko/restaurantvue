import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/components/Frontpage'
import Menu from '@/components/Menu.vue'
import reservation from '@/components/reservation.vue'
import menubreakfast from '@/components/menubreakfast.vue'
import MenuDinner from '@/components/MenuDinner.vue'
import MenuDrinks from '@/components/MenuDrinks.vue'
import classes from '@/components/classes.vue'
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
      component: Menu
    },
    {
      path: '/menubreakfast',
      name: 'menubreakfast',
      component: menubreakfast
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: reservation
    },
    {
      path: '/MenuDinner',
      name: 'MenuDinner',
      component: MenuDinner
    },
    {
      path: '/MenuDrinks',
      name: 'MenuDrinks',
      component: MenuDrinks
    },
    {
      path: '/classes',
      name: 'classes',
      component: classes
    }
  ]
})
