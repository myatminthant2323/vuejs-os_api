<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #255d6c;">
      <router-link class="navbar-brand hvr-float" to="/">My Shoe Shop</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link hvr-float" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brands</a>
          </li>
          <li class="nav-item active hvr-float">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item active hvr-float">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item active hvr-float">
            <router-link class="nav-link" to="/orders">Orders</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link hvr-icon-buzz-out" :to="{name:'cart'}"><i class="fa fa-shopping-cart hvr-icon" aria-hidden="true"></i>    <span v-if="cartCount > 0" class="badge badge-light product_count">{{ cartCount }}</span>
            </router-link>
          </li>
        </ul>
        <form action="#" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="search_name">
          <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
</template>
<script type="text/javascript">
  export default{
    computed: {
      cartCount() {
        this.$store.dispatch('getData')
        return this.$store.state.cart.length
      }
    }
  }
</script>
<style type="text/css">
  
</style>