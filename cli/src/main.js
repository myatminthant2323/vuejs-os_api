import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueLocalStorage)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// CSS Import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/dist/css/bootstrap.css'
import './assets/hover-master/css/hover.css'
import './assets/vendor/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

new Vue({
	router,
  	store,
  render: h => h(App),
}).$mount('#app')
