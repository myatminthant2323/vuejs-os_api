<template>

  <div class="shadow col-md-12 mb-5 mt-2 hvr-grow hvr-underline-from-center">
    <router-link :to="{ name: 'item', params: { id: item.item_id }}" style="text-decoration: none; color:#000;">
      <h3 class="card-title mt-2">{{item.item_name}} <span class="badge badge-danger float-right mt-2" style="font-size: 12px;">{{item.item_discount}}% OFF</span></h3>
      <!-- <p>{{item.item_codeno}}</p> -->
      <p class="card-text"><span style="color: orange; letter-spacing: 0.4px;">${{discount_price}}</span> <span class="ml-2" style="text-decoration: line-through;">${{ formatPrice(item.item_price) }}</span></p>

      <p><span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </p>
      <!-- <p class="card-text">Product Code: {{item.item_codeno}}</p> -->
      <p><img :src="require(`../assets/img/${item.item_photo}`)"  class="card-img-top"></p>
    </router-link>
    <p class="text-center">
      <a class="btn d-block py-2 text-white hvr-icon-forward" style="background-color: #255d6c;" @click="addToCart()" role="button">Add to Cart <i class="fa fa-shopping-cart hvr-icon" aria-hidden="true"></i><!-- <i class="fa fa-chevron-circle-right hvr-icon"></i> -->
      </a>
    </p>
  </div>
</template>

<script type="text/javascript">
  export default{
    
    props:{
      item: Object
    },
    methods: {
      addToCart() {
        // alert("Clicked")
        let myitem = {id:this.item.item_id,name:this.item.item_name,photo:this.item.item_photo,price:this.currency(this.discount_price),qty:1};
        // console.log(myitem);
        this.$store.dispatch('addToCart', myitem)
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
      }
    },
    
    mounted(){
      
    },
    computed: {
      discount_price(){
        return this.formatPrice(this.currency(this.item.item_price - (this.item.item_price*(this.item.item_discount/100))));
      }
    },
  }
</script>

<style type="text/css">
  .checked {
  color: orange;
}
</style>