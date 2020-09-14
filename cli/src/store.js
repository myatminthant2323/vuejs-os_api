import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
    token: localStorage.getItem('token') || '',
    authStatus: '',
    user: {},
    prevRoute: '',
    current_login_user: localStorage.getItem('current_login_user')
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
    addtoCartFromFloatingCart (state, payload) {
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        alert(payload.qty)
        item.qty = Number(payload.qty);
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
      auth_request(state){
        state.authStatus = 'loadings...'
      },
      auth_success(state,token){
        state.authStatus = 'success'
        localStorage.setItem('token',token)
        state.token = token
      },
      auth_fail(state){
        state.authStatus = 'fail'
      },
      logout(state){
        localStorage.removeItem('token')
        localStorage.removeItem('current_login_user')
        state.token = null
        state.user = null
      },
      storeUserData(state,user){
        if(localStorage.getItem('current_login_user') !== null){
          localStorage.removeItem('current_login_user')
        }
        localStorage.setItem('current_login_user', user["name"])
        state.user = user
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
      login({commit,dispatch},user){
        return new Promise((resolve, reject) => {
          commit('auth_request');
          console.log(user);
          let data = {
            client_id: 2,
            client_secret: '3zO5uphTUMNu4VDOJQo81tpvH0sPSRa5vJPYlOlw',
            grant_type: 'password',
            username: user.username,
            password: user.password
          };
          // console.log(data);
          axios.post('http://localhost:8000/oauth/token', data)
          .then(res => {
            const token = res.data.access_token;
            localStorage.setItem('token', token);

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            commit('auth_success', token);
            dispatch('getUser');
            resolve(res);
          })
          .catch(err => {
            commit('auth_fail');
            localStorage.removeItem('token');
            reject(err);
          });
        });
      },
      getUser(state){
        return new Promise((resolve, reject) => {
          axios.get('http://localhost:8000/api/user')
          .then(res => {
            state.commit('storeUserData', res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          })
        });
      },
      loginSuccess({commit},payload){
        commit('auth_success',payload)
      },
      loginFail({commit}){
        commit('auth_fail')
      },
      logout({commit}){
        commit('logout')
      },
      storeUserData({commit},user){
        commit('storeUserData',user)
      },
    },
    getters : {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.authStatus,
      getCurrentUser: state => state.current_login_user
    }
  })

export default store