import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from './views/Testing.vue'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import ShoppingCart from './views/ShoppingCart.vue'


Vue.use(VueRouter)


const router = new VueRouter({
	routes: [
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/item/:id',
      name: 'item',
      props: true,
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    }
  ],
  mode: 'history' // abstract
})

export default router