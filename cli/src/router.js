import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from './views/Testing.vue'
import Home from './views/Home.vue'
import Items from './views/Items.vue'
import Detail from './views/Detail.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import Orders from './views/Orders.vue'
import OrderDetail from './views/OrderDetail.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'


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
      path: '/items',
      name: 'items',
      component: Items
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
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order/:id',
      name: 'order-show',
      component: OrderDetail,
      meta:{
        requiresAuth: true
      }
    },
  ],
  mode: 'history' // abstract
})

export default router