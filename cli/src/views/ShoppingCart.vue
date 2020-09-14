<template>
  <div class="container-fluid animated animatedFadeInUp fadeInUp cart_container" v-if="cartItemsCount !== 0 && !orderDone">

    <h2 class="pb-2 mt-5 ml-5 d-inline-block">Shopping Cart <span style="color:#ccbd0f;">({{ cartItemsCount }} items)</span></h2>
    <span>
      <router-link :to="{name : 'items'}" class="mr-5 hvr-icon-buzz-out" style="color:#000; float: right; margin-top: 60px;">Continue Shopping <i class=" pl-1 fa fa-chevron-circle-right hvr-icon"></i></router-link>
    </span>
    <div class="row mx-4">
      <div class="col-sm-8 cart_item">
        <div class="row px-5 pt-4 my-1 mr-1 ml-1 shadow" v-for="(item,index) in cart" :key="index">
          <div class="col-sm-4">
            <router-link :to="{ name: 'item', params: { id: item.id }}">
              <img :src="item.photo" class='img-fluid'>
            </router-link>
          </div>
          <div class="col-sm-8">
            <router-link :to="{ name: 'item', params: { id: item.id }}" style="color:#000;">
              <h3 class="mt-3">{{item.name}}</h3>
            </router-link>
            <table class="table borderless" style="overflow-x:auto;">
              <thead>
                <tr>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;" width="140px">Item Number</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;" width="80px">Price</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 25px; padding-right: 0px;">Quantity</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;">Total</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;">{{++index}}</td>
                  <td style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;">${{formatPrice(item.price)}}</td>
                  <td style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;">
                    <button class='btn btn-danger btn-sm mx-3' @click='minus(item.id)'>
                      -
                    </button>
                    {{item.qty}}
                    <button class='btn btn-warning btn-sm  btn_plus mx-3 text-white' @click='plus(item.id)'>
                      +
                    </button>
                  </td>
                  <td style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;">${{ formatPrice(item.price * item.qty) }}</td>
                  <td style="border-bottom: 0; border-top: 0; padding-left: 10px; padding-right: 0px;"><a href="#" style="color:#000;" class="remove hvr-icon-pulse-grow" @click="removeFromCart(item.id)"><i class="fas fa-times hvr-icon"></i></a></td>
                </tr>
              </tbody>
            </table>
            <p class="mt-5"><a href="#" style="color:#000;">Save for later</a> | <a href="#" style="color:#000;" @click="removeFromCart(item.id)">Remove</a></p> 
          </div>
        </div>
      </div>
      <div class="col-md-4 order_summery">
        <div class="row ml-1 mr-1">
          <div class="col-md-12 my-1 shadow">
            <h3 class="mb-2 mt-3">ORDER SUMMERY</h3>
            <hr>
            <div class="row font-bold">
              <div class="col-8 total-label">
                <p>Subtotal</p>
              </div>
              <div class="col-4">
                <p class="text-right shipping-cost">${{ formatPrice(itemsTotal) }}</p>
              </div>
            </div>
            <div class="row font-bold">
              <div class="col-8 total-label">
                <p>Shipping cost</p>
              </div>
              <div class="col-4">
                <p class="text-right shipping-cost">FREE</p>
              </div>
            </div>
            <div class="row font-bold">
              <div class="col-8 total-label">
                <p>Estimated Tax</p>
              </div>
              <div class="col-4">
                <p class="text-right tax">$0 </p>
              </div>
            </div>
            <hr class="mt-0 pt-0">
            <div class="row font-bold">
              <div class="col-8 total-label">
                <p>Estimated Total</p>
              </div>
              <div class="col-4">
                <p class="text-right total">${{ formatPrice(itemsTotal) }}</p>
              </div>
            </div>
            <div class="row mt-2 mb-3">
              <div class="col-12">
                <button class="btn btn-block" style="background-color: #255d6c; color: white;" @click="order()">
                  Checkout
                </button>                
              </div>
            </div>
          </div>
        </div>
        <div class="row ml-1 my-2 mr-1 shadow">
          <p class="pt-3 pl-3">
            <span style="font-weight: 700; padding-right: 230px;">Send Message</span>
            <span>
              <a v-b-toggle.collapse-1 style="text-decoration: none; color:#000; font-weight: bold;" id="collapse-link"><i class="fa fa-chevron-down"></i></a>
            </span>
          </p>
          <div class="container-fluid">
            <b-collapse visible id="collapse-1">
              <div class="row pb-4">
                <div class="col-sm-12">
                  <textarea class="md-textarea form-control" style="height: 70px;" placeholder="Enter Message" v-model="notes"></textarea>
                </div>

              </div>
            </b-collapse>
          </div>
        </div>

      </div>
    </div>
    <hr>

  </div>
  <div v-else-if="cartItemsCount == 0 && !orderDone">
    <h2 class="animated animatedFadeInUp fadeInUp cart_container mt-5 text-center" style="color:#ccbd0f;">Your Cart is Empty</h2>
    <span>
      <router-link :to="{name : 'items'}" class="mr-5 hvr-icon-buzz-out" style="color:#000; float: right; margin-top: 20px;">Continue Shopping <i class=" pl-1 fa fa-chevron-circle-right hvr-icon"></i></router-link>
    </span>
  </div>
  <div v-else-if="orderDone">
    <h2 class="animated animatedFadeInUp fadeInUp cart_container mt-5 text-center" style="color:#ccbd0f;">Ordered Sucessfully</h2>
    <span>
      <router-link :to="{name : 'items'}" class="mr-5 hvr-icon-buzz-out" style="color:#000; float: right; margin-top: 20px;">Continue Shopping <i class=" pl-1 fa fa-chevron-circle-right hvr-icon"></i></router-link>
    </span>
  </div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
    data(){
      return{
        totalAmount: 0,
        notes: '',
        orderDone: false,
        
      }
    },
    computed:{
      cart(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart;
      },
      cartItemsCount() {
        return this.cart.length;
      },
      itemsTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
      }
    },
    methods: {
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId)
      },
      addToCart() {
        let item = {id:this.item.item_id,name:this.item.item_name,photo:this.item.item_photo,price:this.item.item_price,qty:this.qty};
        this.$store.dispatch('addToCart', item)
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
      order(){
        console.log("Hi");
        if (this.$store.getters.isLoggedIn) {
          let data = {shop_data: JSON.stringify(this.$store.state.cart),
            notes: this.notes,total: this.totalAmount};
            ItemService.createOrder(data)
            .then(response => {
              console.log(response)
              localStorage.removeItem('cart');
              this.orderDone = true;
              this.$store.dispatch('getData')
            })
            .catch(error => {
              console.log('There was an error:',error.response)
            })
          }else {
            this.$store.state.prevRoute = 'cart'
            this.$router.push('/login')
          }

        }

      }
    }
  </script>

  <style type="text/css">
  .font-bold{
    font-weight: bold;
  }
  #collapse-link:focus {
    outline: none;
    box-shadow: none;
  }
</style>