<template>
  <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" style="background-color: #255d6c;">
    <router-link :to="{name:'home'}" class="navbar-brand hvr-float" style="font-weight: 500">Lucifer  <b>Boutique</b></router-link>     
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Collection of nav links, forms, and other content for toggling -->
    <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start px-2" style=" font-weight: 500;">
      <div class="navbar-nav">
        <router-link class="nav-item  active nav-link hvr-float" :to="{name:'home'}">Home <span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item  active nav-link hvr-float" :to="{name:'items'}">Shop <span class="sr-only">(current)</span></router-link>
        <router-link v-if="isLoggedIn" class="nav-item active nav-link hvr-float" :to="{name:'orders'}">Orders</router-link>
        <a class="nav-item nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
        <a class="nav-item nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brands</a>
      </div>
      <form class="navbar-form form-inline">
        <div class="input-group search-box">                
          <input type="text" id="search" class="form-control" placeholder="Search here...">
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </form>
      <div class="navbar-nav ml-auto action-buttons">
        <div v-if="isLoggedIn">
          <div class="row mx-0">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <span  v-if="authUser !== null">Myat </span>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <div class="nav-item active">
              <a @click="logout()" class="nav-link mr-2" style="cursor: pointer;">Logout</a>
            </div>
            
          </div>
        </div>
        <div v-else>
          <div class="row mx-0">
            <div class="nav-item active dropdown">
              <router-link :to="{name:'login'}" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Login</router-link>
              <div class="dropdown-menu action-form">

                <form v-on:submit.prevent="Login">
                  <p class="hint-text">Sign in with your social media account</p>
                  <div class="form-group social-btn clearfix">
                    <a href="#" class="btn btn-secondary facebook-btn float-left"><i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="#" class="btn btn-secondary twitter-btn float-right"><i class="fab fa-twitter"></i> Twitter</a>
                  </div>
                  <div class="or-seperator"><b>or</b></div>
                  <p v-if="auth=='fail'" class="text-danger" style="font-size: 12px;">{{errMsgLogin}}</p>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" required="required" v-model="emailLogin">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required" v-model="passwordLogin">
                  </div>
                  <input type="submit" class="btn btn-primary btn-block" value="Login">
                  <div class="text-center mt-2">
                    <a href="#">Forgot Your password?</a>
                  </div>
                </form>
              </div>
            </div>
            <div class="nav-item active dropdown">
              <router-link :to="{name:'register'}" data-toggle="dropdown" class="btn btn-primary dropdown-toggle sign-up-btn">Sign up</router-link>
              <div class="dropdown-menu action-form">
                <form v-on:submit.prevent="Register">
                  <p class="hint-text">Fill in this form to create your account!</p>
                  <div class="form-group">
                    <p v-if="errMsgRegister !== ''" class="text-danger">{{errMsgRegister}}</p>
                    <input type="text" class="form-control" placeholder="Username" required="required" v-model="name">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" required="required" v-model="emailRegister">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required" v-model="passwordRegister">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Confirm Password" required="required" v-model="cpasswordRegister">
                  </div>
                  <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" required="required"> I accept the <a href="#">Terms &amp; Conditions</a></label>
                  </div>
                  <input type="submit" class="btn btn-custom btn-block" value="Sign Up" style="color: white;">
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-if="isLoggedIn">
          <a @click="logout()" class="nav-link mr-2" style="cursor: pointer;">Logout</a>
        </div> -->
        <div class="nav-item active dropdown" v-if="cartCount > 0">
          <router-link class="nav-link hvr-icon-buzz-out" :to="{name:'cart'}"><i class="fa fa-shopping-cart hvr-icon" aria-hidden="true"></i>    <span v-if="cartCount > 0" class="badge badge-light">{{ cartCount }}</span>
          </router-link>
          <div class="dropdown-menu cart-form shadow" aria-labelledby="dropdown01">
            <div class="px-4" style="text-decoration: none; color:#000;">
              <div class="row mt-3 mb-2" style="padding-bottom: 1px;">
                <div class="col-12">
                  <h5 style="display: inline;">Your Shopping Cart</h5><span style="padding-left: 5px; font-size: 15px;">({{ cartCount }} items)</span>             
                </div>
              </div>
              <hr class="mt-0">

            </div>
            <div class="outer" style="max-height: 320px; overflow-y: auto; font-weight: bold; overflow-x: hidden;">
              <div class="row px-4 py-0" v-for="(item,index) in cart" :key="index">
                <div class="col-md-4 photo pt-3">
                  <router-link :to="{ name: 'item', params: { id: item.id }}">
                    <img :src="item.photo" class='img-fluid'>
                  </router-link>
                </div>
                <div class="col-md-8 table-div">
                  <router-link :to="{ name: 'item', params: { id: item.id }}" style="color:#000;">
                    <h5 class="mt-0">{{item.name}}</h5>
                  </router-link>
                  <p><a href="#" style="color:#000; padding-left: 0px; padding-right: 5px; padding-top: 0px;">Save for later</a> | <a href="#" style="color:#000; padding-left: 5px;" @click="removeFromCart(item.id)">Remove</a></p> 
                  <p>
                    <span>
                      <button class="btn btn-sm text-black" @click="minus(item.id)" style="padding-top: 0px; padding-right: 11px;" id="minus">
                        <span>-</span>
                      </button>
                      <input type="text" name="qty" :value="item.qty" class="form-control w-25 d-inline-block mt-1" min="1" disabled="disabled" id="qty">
                      <button class="btn btn-sm text-black" @click="plus(item.id)" style="padding-top: 0px;" id="plus">
                        <span>+</span>
                      </button>
                      <!-- <input type="number" v-bind:value='qty(item.qty)' class="form-control d-inline-block mt-1" min="1" style="width: 60px;" > -->
                    </span>
                    <span style="color: black; float: right; padding-top: 15px;">${{ formatPrice(item.price * item.qty) }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-4" style="text-decoration: none; color:#000;">
              <hr class="mt-0 pt-0">
              <div class="row px-1" style="font-size: 14px; font-weight: 700">
                <div class="col-8 total-label">
                  <p>Estimated Total</p>
                </div>
                <div class="col-4">
                  <p class="text-right total">${{ formatPrice(itemsTotal) }}</p>
                </div>
              </div>
              <div class="row mt-2 mb-3">
                <div class="col-12">
                  <router-link class="btn btn-block" style="background-color: #255d6c; color: white;" to="/cart">
                    View Cart
                  </router-link>              
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="cartCount == 0" class="nav-item active" >
          <router-link class="nav-link hvr-icon-buzz-out" :to="{name:'cart'}"><i class="fa fa-shopping-cart hvr-icon" aria-hidden="true"></i>    <span v-if="cartCount > 0" class="badge badge-light">{{ cartCount }}</span>
          </router-link>
        </div>
        
        
        
      </div>

    </div>
  </nav>

</template>
<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  export default{
    data(){
      return {
        emailLogin: '',
        passwordLogin: '',
        name: '',
        emailRegister: '',
        passwordRegister: '',
        cpasswordRegister: '',
        errMsgLogin: '',
        errMsgRegister: '',
        current_login_user: ''
      }
    },
    mounted() {
      // this.getCurrentUser()
      // this.$router.go(0)
    },
    computed: {
      cartCount() {
        this.$store.dispatch('getData')
        return this.$store.state.cart.length
      },
      cart(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart;
      },
      isLoggedIn() { 
        return this.$store.getters.isLoggedIn
      },
      authUser(){
        // alert(this.$store.getters.getCurrentUser)
         return this.$store.getters.getCurrentUser
      },
      itemsTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
      },
      auth(){
        return this.$store.getters.authStatus
      }
    },
    methods: {
      // getCurrentUser() {
      //   this.current_login_user = this.$localStorage.get('current_login_user')
      //   // this.$router.go(0)
      //   return this.current_login_user
      // },
      // 
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId)
      },
      formatPrice(price){
        price = price.toString();
        var objRegex  = new RegExp('(-?[0-9]+)([0-9]{3})');                            
        while(objRegex.test(price))           
        {              
          price = price.replace(objRegex, '$1,$2');           
        }           

        return price
      },
      currency(price){
        return Math.ceil(price);
      },
      plus(itemId) {
        this.$store.dispatch('plus', itemId)
      },
      minus(itemId) {
        this.$store.dispatch('minus', itemId)
      },
      logout(){
        this.$store.dispatch('logout')
        this.$router.push({ name: 'home'})
      },
      Login(){
        let user = {username: this.emailLogin, password: this.passwordLogin}
        this.$store.dispatch('login',user)
        // .then(() => this.$router.push({name : 'orders'}))
        // .then(() => this.$router.go(-1))
        .then(() => this.$router.go(-1))
        .catch(err => {
          console.log('There was an error:',err.response)
          this.errMsgLogin = 'Login Failed!, Incorrect Email and Password'
        });
      },
      Register(){
        let user = {name: this.name, email: this.emailRegister, password: this.passwordRegister}

        ItemService.register(user)
        .then(response => {
          console.log(response)
            // axios.defaults.headers.common['Authorization'] = token
            this.$router.push('/login')
          })
        .catch(err =>{
          console.log('There was an error:',err.response)
          this.errMsg = 'Register Failed!'
          // this.$store.dispatch('loginFail')
        })
      }
    },
  }
</script>
<style type="text/css">
.form-control {
  box-shadow: none;   
  font-weight: normal;
  font-size: 13px;
}
.navbar {
  padding-top: 0px;
  background: #fff;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0;
}
.nav-link img {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin: -8px 0;
  float: left;
  margin-right: 10px;
}
.navbar .navbar-brand {
  padding-left: 0;
  font-size: 20px;
  padding-right: 0px;
}
.navbar .navbar-brand b {
  color: #33cabb;   
}
.navbar .form-inline {
  display: inline-block;
}
.search-box {
  position: relative;
} 
.search-box input {
  padding-right: 35px;
  border-color: #dfe3e8;
  box-shadow: none
}
.search-box .input-group-text {
  min-width: 35px;
  border: none;
  background: transparent;
  position: absolute;
  right: 0;
  z-index: 9;
  padding: 7px;
  height: 100%;
}
.search-box i {
  color: #a0a5b1;
  font-size: 19px;
}
.navbar .sign-up-btn {
  min-width: 110px;
  max-height: 36px;
}
/*.navbar .dropdown-menu {
  color: #999;
  font-weight: normal;
  border-radius: 1px;
  border-color: #e5e5e5;
  box-shadow: 0 2px 8px rgba(0,0,0,.05);
  }*/
  .navbar a, .navbar a:active {
    color: #888;
    padding: 8px 20px;
    background: transparent;
    line-height: normal;
  }
  .navbar .navbar-form {
    border: none;
  }
  .navbar .action-form {
    width: 280px;
    padding: 20px;
    left: auto;
    right: 0;
    font-size: 14px;
  }
  .navbar .action-form a {    
    color: #33cabb;
    padding: 0 !important;
    font-size: 14px;
  }
  .navbar .action-form .hint-text {
    text-align: center;
    margin-bottom: 15px;
    font-size: 13px;
  }
  .navbar .btn-primary, .navbar .btn-primary:active {
    color: #fff;
    background: #33cabb !important;
    border: none;
  } 
  .navbar .btn-primary:hover, .navbar .btn-primary:focus {    
    color: #fff;
    background: #31bfb1 !important;
  }
  .navbar .social-btn .btn, .navbar .social-btn .btn:hover {
    color: #fff;
    margin: 0;
    padding: 0 !important;
    font-size: 13px;
    border: none;
    transition: all 0.4s;
    text-align: center;
    line-height: 34px;
    width: 47%;
    text-decoration: none;
  }
  .navbar .social-btn .facebook-btn {
    background: #507cc0;
  }
  .navbar .social-btn .facebook-btn:hover {
    background: #4676bd;
  }
  .navbar .social-btn .twitter-btn {
    background: #64ccf1;
  }
  .navbar .social-btn .twitter-btn:hover {
    background: #4ec7ef;
  }
  .navbar .social-btn .btn i {
    margin-right: 5px;
    font-size: 16px;
    position: relative;
    top: 2px;
  }
  .or-seperator {
    margin-top: 32px;
    text-align: center;
    border-top: 1px solid #e0e0e0;
  }
  .or-seperator b {
    color: #666;
    padding: 0 8px;
    width: 30px;
    height: 30px;
    font-size: 13px;
    text-align: center;
    line-height: 26px;
    background: #fff;
    display: inline-block;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    position: relative;
    top: -15px;
    z-index: 1;
  }
  .navbar .action-buttons .dropdown-toggle::after {
    display: none;
  }
  .form-check-label input {
    position: relative;
    top: 1px;
  }
  @media (min-width: 1200px){
    .form-inline .input-group {
      width: 300px;
      margin-left: 30px;
    }
  }
  @media (max-width: 768px){
    .navbar .dropdown-menu.action-form {
      width: 100%;
      padding: 10px 15px;
      background: transparent;
      border: none;
    }
    .navbar .form-inline {
      display: block;
    }
    .navbar .input-group {
      width: 100%;
    }
  }

  .navbar .cart-form {
    width: 360px;
    padding: 0px;
    left: auto;
    right: 0;
    color: #33cabb;
    padding: 0 !important;
    font-size: 12px;
  }

  /*.navbar .cart-form .hint-text {
    text-align: center;
    margin-bottom: 15px;
    font-size: 13px;
    }*/

    #plus:focus {
      outline: none;
      box-shadow: none;
    }
    #minus:focus {
      outline: none;
      box-shadow: none;
    }
    #qty:disabled{
      background-color: white;
    }
  </style>