<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Testing msg="This is inheriented data"></Testing>
      <Exercise></Exercise> -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img alt="Vue logo" src="./assets/logo.png" width="30" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/testing">Testing <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/exercise">Exercise</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dynamic_route">Dynamic Route</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->


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
          <li class="nav-item">
            <router-link class="nav-link hvr-icon-buzz-out" to="/cart"><i class="fa fa-shopping-cart hvr-icon" aria-hidden="true"></i><!-- <span class="badge badge-light product_count">0</span> -->
            </router-link>
          </li>
        </ul>
        <form action="#" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="search_name">
          <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>





  <main role="main">
    <router-view></router-view>
  </main>







    <!-- <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>  
    </div> -->
  </div>
</template>

<script>

  //import './assets/vendor/jquery/jquery.slim.min.js';
  
// import HelloWorld from './components/HelloWorld.vue'
// import Testing from './components/Testing.vue'
// import Exercise from './components/Exercise.vue'

export default {
  name: 'App',
  mounted(){
    this.$router.replace('/')
  }
  // components: {
  //   // HelloWorld
  //   Testing,
  //   Exercise

  // }
}
</script>

<style>

  @import './assets/dist/css/bootstrap.css';
  @import './assets/hover-master/css/hover.css';
  @import './assets/vendor/fontawesome-free/css/all.min.css';
  @import './assets/css/jumbotron.css';



/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}*/

@-webkit-keyframes fadeInLeft {
        from {
          opacity:0;
          -webkit-transform: translatex(-10px);
          -moz-transform: translatex(-10px);
          -o-transform: translatex(-10px);
          transform: translatex(-10px);
        }
        to {
          opacity:1;
          -webkit-transform: translatex(0);
          -moz-transform: translatex(0);
          -o-transform: translatex(0);
          transform: translatex(0);
        }
      }
      @-moz-keyframes fadeInLeft {
        from {
          opacity:0;
          -webkit-transform: translatex(-10px);
          -moz-transform: translatex(-10px);
          -o-transform: translatex(-10px);
          transform: translatex(-10px);
        }
        to {
          opacity:1;
          -webkit-transform: translatex(0);
          -moz-transform: translatex(0);
          -o-transform: translatex(0);
          transform: translatex(0);
        }
      }
      @keyframes fadeInLeft {
        from {
          opacity:0;
          -webkit-transform: translatex(-100px);
          -moz-transform: translatex(-100px);
          -o-transform: translatex(-100px);
          transform: translatex(-100px);
        }
        to {
          opacity:1;
          -webkit-transform: translatex(0);
          -moz-transform: translatex(0);
          -o-transform: translatex(0);
          transform: translatex(0);
        }
      }
      .in-left {
        -webkit-animation-name: fadeInLeft;
        -moz-animation-name: fadeInLeft;
        -o-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
        -webkit-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -o-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-duration: 0.2s;
        -moz-animation-duration: 0.2s;
        -o-animation-duration: 0.2s;
        animation-duration: 0.2s;
        -webkit-animation-delay: 0.2s;
        -moz-animation-delay: 0.2s;
        -o-animation-duration:0.2s;
        animation-delay: 0.2s;
      }

      /*======================FadeInUp===========================*/
      @keyframes fadeInUp {
          from {
              transform: translate3d(0,40px,0)
          }

          to {
              transform: translate3d(0,0,0);
              opacity: 1
          }
      }

      @-webkit-keyframes fadeInUp {
          from {
              transform: translate3d(0,40px,0)
          }

          to {
              transform: translate3d(0,0,0);
              opacity: 1
          }
      }

      .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
          -webkit-animation-duration: 1s;
          -webkit-animation-fill-mode: both
      }

      .animatedFadeInUp {
          opacity: 0
      }

      .fadeInUp {
          opacity: 0;
          animation-name: fadeInUp;
          -webkit-animation-name: fadeInUp;
      }


      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .jumbotron {
        background-image: url("assets/img/banner-1200.png");
        background-size: cover;
        background-repeat: no-repeat;
      }

      .shadow {
       /*-moz-box-shadow:    inset 0 0 10px #000000;
       -webkit-box-shadow: inset 0 0 10px #000000;
       box-shadow:         inset 0 0 10px #000000;*/
       -webkit-box-shadow: -11px 9px 9px -6px rgba(0,0,0,0.75);
       -moz-box-shadow: -11px 9px 9px -6px rgba(0,0,0,0.75);
       box-shadow: -11px 9px 9px -6px rgba(0,0,0,0.75);
     }


  

</style>
