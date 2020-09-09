import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart (state, payload) {
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    }, 
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      // console.log(state.cart.indexOf(indexToDelete));
      var ans = confirm('Are You Sure to delete?');
        if(ans){
          // console.log(indexToDelete);
          state.cart.splice(state.cart.indexOf(indexToDelete), 1)
        }
    },
    saveCart(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getData(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    },
    
    plus (state, payload) {
      let item = state.cart.find(item => item.id == payload)
      item.qty++;
    },
    minus (state, payload) {
      console.log(payload);
      let item = state.cart.find(item => item.id == payload)
      if (item.qty == 1) {
        var ans = confirm('Are You Sure to delete?');
        if(ans){
          state.cart.splice(state.cart.indexOf(item), 1)
        }
      }else{
        item.qty--;
      }
      
    },
  },
  actions:{
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('saveCart')
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('saveCart')
    },
    getData({ commit }){
      commit('getData')
    },
    plus({commit} , payload){
      commit('plus', payload)
      commit('saveCart')
    },
    minus({commit} , payload){
      commit('minus', payload)
      commit('saveCart')
    },
  }
})

export default store