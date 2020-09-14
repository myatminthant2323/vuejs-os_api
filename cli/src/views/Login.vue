<template>
  <div class="container animated in-left">
    <div class="row my-5">
      <div class="col-md-6 mx-auto bor-radius shadow-lg" style="padding: 80px 100px;">
        <h2>Login</h2>

        <p v-if="auth=='fail'" class="text-danger">{{errMsg}}</p>

        <form v-on:submit.prevent="Login">
          <p class="hint-text">Sign in with your social media account</p>
          <div class="form-group social-btn clearfix">
            <a href="#" class="btn btn-secondary facebook-btn float-left"><i class="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" class="btn btn-secondary twitter-btn float-right"><i class="fab fa-twitter"></i> Twitter</a>
          </div>
          <div class="or-seperator"><b>or</b></div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required="required" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required" v-model="password">
          </div>
          <input type="submit" class="btn btn-custom btn-block" value="Login" style="color: white;">
          <div class="text-center mt-2">
            <a href="#">Forgot Your password?</a>
          </div>
        </form>

        <!-- <form v-on:submit.prevent="Login">
          <div class="form-group text-left">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
          </div>
          <div class="form-group form-check text-left">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default{
    data(){
      return {
        email: '',
        password: '',
        errMsg: ''
      }
    },
    methods:{
      Login(){
        let user = {username: this.email, password: this.password}
        this.$store.dispatch('login',user)
        // .then(() => this.$router.push({name : 'orders'}))
        // .then(() => this.$router.go(-1))
        .then(() => {
          // alert(this.$store.state.prevRoute)
          if(this.$store.state.prevRoute === 'cart'){
            this.$store.state.prevRoute = ''
            this.$router.push({name : 'cart'})
          }else {
            this.$router.push({name : 'home'})
          }
        })
        .catch(err => {
          console.log('There was an error:',err.response)
          this.errMsg = 'Login Failed!, Incorrect Email and Password'
        });
      }
    },
    computed:{
      auth(){
        return this.$store.getters.authStatus
      }
    }
  }
</script>

<style type="text/css">
.bor-radius {
  border-radius: 18px 18px 18px 18px;
  -moz-border-radius: 18px 18px 18px 18px;
  -webkit-border-radius: 18px 18px 18px 18px;
  border: 0px solid #000000;
}

.action-form {
  width: 280px;
  padding: 20px;
  left: auto;
  right: 0;
  font-size: 14px;
}
.action-form a {    
  color: #33cabb;
  padding: 0 !important;
  font-size: 14px;
}
.action-form .hint-text {
  text-align: center;
  margin-bottom: 15px;
  font-size: 13px;
}
.btn-custom, .btn-custom:active {
  color: #fff;
  background: #33cabb !important;
  border: none;
} 
.btn-custom:hover, .btn-custom:focus {    
  color: #fff;
  background: #31bfb1 !important;
}
.social-btn .btn, .social-btn .btn:hover {
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
.social-btn .facebook-btn {
  background: #507cc0;
}
.social-btn .facebook-btn:hover {
  background: #4676bd;
}
.social-btn .twitter-btn {
  background: #64ccf1;
}
.social-btn .twitter-btn:hover {
  background: #4ec7ef;
}
.social-btn .btn i {
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
.action-buttons .dropdown-toggle::after {
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
</style>