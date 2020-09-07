<template>
  <div class="container animated animatedFadeInUp fadeInUp">
    <h1 class="text-center mt-5 mb-4">Product Detail</h1>
    <div class="row">
      <div class='shadow col-md-4 mt-2 animated in-left'>
        <p><img :src='require(`../assets/img/${item.item_photo}`)' class='img-fluid'></p>
      </div>
      <div class='col-md-6 offset-2 pt-5 mt-4 animated in-right'>
        <table class='table table bordered'>
          <tbody>
            <tr>
              <td width="150px;">Product Name:</td>
              <td>{{item.item_name}}</td>
            </tr>
            <tr>
              <td>Product Code:</td>
              <td>{{item.item_codeno}}</td>
            </tr>
            <tr>
              <td>Product Price:</td>
              <td>${{item.item_price}}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{{item.item_description}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <hr> -->
        <p class='text-center'><a class='btn btn-primary px-2 add_to_cart hvr-icon-buzz-out' style='background-color: #255d6c;' href='#' role='button'>Add to Cart  <i class='fa fa-shopping-cart hvr-icon' aria-hidden='true'></i></a></p>
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
        item: Object
      }
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
      }
    }
  }
</script>

<style type="text/css">
  
</style>