<template>
  <div class="container-fluid animated animatedFadeInUp fadeInUp cart_container" v-if="cartItemsCount !== 0 && !orderDone">

    <h2 class="pt-5 pb-2 ml-5">Shopping Cart <span style="color:#ccbd0f;">({{ cartItemsCount }} items)</span></h2>
    <div class="row mx-4">
      <div class="col-md-8 cart_item">
        <div class="row px-5 pt-4 my-1 mr-1 shadow" v-for="(item,index) in cart" :key="index">
          <div class="col-md-4">
            <router-link :to="{ name: 'item', params: { id: item.id }}">
              <img :src="item.photo" class='img-fluid'>
            </router-link>
          </div>
          <div class="col-md-8">
            <router-link :to="{ name: 'item', params: { id: item.id }}" style="color:#000;">
              <h3 class="mt-3">{{item.name}}</h3>
            </router-link>
            <table class="table borderless">
              <thead>
                <tr>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;" width="140px">Item Number</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 30px;" width="80px">Price</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 25px; padding-right: 0px;">Quantity</th>
                  <th style="border-bottom: 0; border-top: 0; padding-left: 0px; padding-right: 0px;">SubTotal</th>
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
        <div class="row ml-1">
          <div class="col-md-12 my-1 shadow">
            <h3 class="mb-2 mt-3">ORDER SUMMERY</h3>
            <hr>
            <div class="row font-bold">
              <div class="col-8 total-label">
                <p>Item Total</p>
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
                <button class="btn btn-primary btn-block" style="background-color: #255d6c;" @click="order()">
                  Checkout
                </button>                
              </div>
            </div>
          </div>
        </div>
        <div class="row ml-1 my-2">
          <textarea class="md-textarea form-control shadow" style="height: 100px" placeholder="Enter Message"></textarea>
        </div>
        
      </div>
    </div>
    <hr>

  </div>
  <div v-else-if="cartItemsCount == 0">
    <h2 class="container-fluid animated animatedFadeInUp fadeInUp cart_container my-5 text-center" style="color:#ccbd0f;">Your Cart is Empty</h2>
  </div>
  <div v-else-if="orderDone">
    <h2 class="container-fluid animated animatedFadeInUp fadeInUp cart_container my-5 text-center" style="color:#ccbd0f;">Ordered Sucessfully</h2>
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
        selectedShippingOption: '',
        shippingOptionsArray: [
        {
          text: 'One day',
          rate: 20,
        },
        {
          text: 'Two days',
          rate: 15,
        },
        {
          text: 'Three to five days',
          rate: 10,
        },
        {
          text: 'One week or more',
          rate: 5,
        },
        ],
        salesTax: 0.05,
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
      },
      subtotal() {
        if (this.selectedShippingOption) {
          return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
        }
        return '---';
      },
      salesTaxPercentage() {
        return `${this.salesTax * 100}%`;
      },
      salesTaxApplied() {
        if (this.selectedShippingOption) {
          return (this.subtotal * this.salesTax).toFixed(2);
        }
        return '---';
      },
      total() {
        if (this.selectedShippingOption) {
          return Number(this.subtotal)
                 + Number(this.salesTaxApplied);
        }
        return '---';
      },
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
        let data = {shop_data: JSON.stringify(this.$store.state.cart),
          notes: this.notes,total: this.totalAmount};
          ItemService.createOrder(data)
          .then(response => {
            console.log(response)
            localStorage.clear();
            this.orderDone = true;
            this.$store.dispatch('getData')
          })
          .catch(error => {
            console.log('There was an error:',error.response)
          })
        }

      }
    }
</script>

<style type="text/css">
  .font-bold{
    font-weight: bold;
  }
</style>