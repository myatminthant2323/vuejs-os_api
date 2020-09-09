<template>
  <div class="container animated animatedFadeInUp fadeInUp">
    <!-- <h1 class="text-center mt-5 mb-4">Product Detail</h1> -->
    <div class="row">
      <div class='col-md-6 mt-2 animated in-left'>
        <p><img :src='require(`../assets/img/${item.item_photo}`)' class='img-fluid'></p>
      </div>
      <div class='col-md-5 offset-1 pt-3 mt-4 animated in-right'>
        <h2>{{item.item_name}}</h2>
        <p style="font-size: 15px;" class="mb-3">Product code: <span>{{item.item_codeno}}</span></p>
        <p><span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </p>
        <p>
          <span class="mr-2"> <b-icon icon="tag-fill" variant="dark"></b-icon> {{item.brand.brand_name}}</span>
          <span> <b-icon icon="tag-fill" variant="dark"></b-icon> {{item.subcategory.subcategory_name}}</span>
        </p>
        <p><span class="" style="font-size: 20px; color: red">${{formatPrice(discount_price | currency)}} ({{item.item_discount}}% OFF) </span>  <span class="ml-2" style="text-decoration: line-through;">${{formatPrice(item.item_price)}}</span> <span class="badge badge-danger mt-2 mx-2 py-1" style="font-size: 12px;">Save  ${{formatPrice(item.item_price - currency(discount_price))}}</span></p>
        <h4 style="font-size: 18px;">COLOR: TERRACOTTA</h4>
        <div class="foo blue"></div>
        <div class="foo purple"></div>
        <div class="foo wine"></div>
        <div style="clear:both;"></div>
        <h4 style="font-size: 18px;" class="pt-3 pb-1">AUS SIZE : 18</h4>
        <div class="foo one"><span class="ml-1">12</span></div>
        <div class="foo two"><span class="ml-1">18</span></div>
        <div class="foo three"><span class="ml-1">23</span></div>
        <div style="clear:both;"></div>
        <h4 style="font-size: 18px;"  class="my-3">AVAILIBILITY: <span class="ml-1" style="font-weight: normal"> HURRY! ONLY 10 ITEMS LEFT</span></h4>

        <h4 style="font-size: 18px;"  class="my-3">QUANTITY: <span class="ml-2"> <input type="number" name="qty" v-model="qty" class="form-control w-25 d-inline-block mt-1" min="1"></span></h4>
        <div class="col-md-12 pl-0"><a class='btn btn-primary add_to_cart hvr-icon-buzz-out' style='background-color: #255d6c; padding: 8px 150px;' href='#' role='button' @click='addToCart()'>Add to Cart  <i class='fa fa-shopping-cart hvr-icon' aria-hidden='true'></i></a></div>
      </div>

    <hr>

  </div>
</div>

</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
    data (){
      return {
        qty: 1,
        item: Object
      }
    },
    computed: {
      discount_price(){
        return this.item.item_price - (this.item.item_price*(this.item.item_discount/100))
      },
      
    },
    mounted(){
      this.getDetail();
    },
    methods:{
      getDetail(){
        let id = this.$route.params.id;
        ItemService.getItem(id)
            .then(res => {
              this.item = res.data.item
              this.item.item_photo =  this.item.item_id + ".jpg";
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      },
      addToCart() {
        let item = {id:this.item.item_id,name:this.item.item_name,photo:this.item.item_photo,price:this.currency(this.discount_price),qty:this.qty};
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
      }
    },
    filters: {
      
    }
  }
</script>

<style type="text/css">
  .foo {
  float: left;
  width: 30px;
  height: 30px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, .2);
}

.blue {
  background: #44619e;
}

.purple {
  background: #2e3337;
}

.wine {
  background: #5f6273;
}
</style>