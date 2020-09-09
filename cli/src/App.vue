<template>
  <div id="app">

    <NavBar></NavBar>
  <main role="main">
    <router-view></router-view>
  </main>

  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

export default {
  components:{
    NavBar
  },
  name: 'App',
  mounted(){
    this.$router.replace('/')
  },
  methods:{
    
  },
  computed:{
    cartCount(){
      this.$store.dispatch('getData')
      return this.$store.state.cart.length
    }
  }
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
