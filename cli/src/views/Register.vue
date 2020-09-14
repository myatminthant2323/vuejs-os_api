<template>
  <div class="container animated in-left">
    <div class="row" style="margin-top: 50px;">
      <div class="col-md-6 mx-auto bor-radius shadow-lg" style="padding: 60px 100px 85px;">
        <h2>Register</h2>

        <p v-if="errMsg !== ''" class="text-danger">{{errMsg}}</p>

        <form v-on:submit.prevent="Register">
          <p class="hint-text">Fill in this form to create your account!</p>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required="required" v-model="name">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required="required" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required" v-model="password">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Confirm Password" required="required" v-model="cpassword">
          </div>
          <div class="form-group">
            <label class="form-check-label"><input type="checkbox" required="required"> I accept the <a href="#">Terms &amp; Conditions</a></label>
          </div>
          <input type="submit" class="btn btn-custom btn-block" value="Sign Up" style="color: white;">
        </form>
      </div>
    </div>
  </div>
  
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  export default{
    data(){
      return {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        errMsg: ''
      }
    },
    methods:{
      Register(){
        let user = {name: this.name, email: this.email, password: this.password}

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

</style>