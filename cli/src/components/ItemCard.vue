<template>

  <div >
    <h3 class="card-title">{{item.item_name}}</h3>
    <p class="card-text">Price: {{item.item_price}}</p>
    <p class="card-text">Product Code: {{item.item_codeno}}</p>
    <p><img :src="require(`../assets/img/${item.item_photo}`)"  class="img-fluid"></p>
    <p class="text-center">
      <router-link class="btn d-block py-2 text-white hvr-icon-forward" style="background-color: #255d6c;" :to="{ name: 'item', params: { id: item.item_id }}" role="button">View details <i class="fa fa-chevron-circle-right hvr-icon"></i>
      </router-link>
    </p>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      item: Object
    },
  }
</script>

<style type="text/css">
  
</style>