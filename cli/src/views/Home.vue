<template>
	<div>
		<div class="jumbotron jumbotron-fluid animated in-left" style="padding-bottom: 500px;">
			
		</div>

		<div class="container-fluid">
			<div class="row animated animatedFadeInUp fadeInUp px-5">
				<div class="col-md-3 mb-5 mt-2"  style="padding: 0 12px; line-height: 10px;" v-for="(item,index) in items" :key="index">
					<ItemCard :item="item"></ItemCard>
				</div>
			</div>
		</div>
	</div>


</template>

<script type="text/javascript">
  import ItemCard from '@/components/ItemCard.vue'
  import ItemService from '@/services/ItemService.js'
  export default{
    components:{
      ItemCard
    },
    data(){
      return{
        items: [],
      }
    },
    mounted(){
      this.getItems();
    },
    methods:{
      getItems(){
        ItemService.getItems()
            .then(res => {
              this.items = res.data.items
              // for (var i = 0; i < this.items.length; i++) {
              // 	//../assets/img/1.jpg
              // 	this.items[i].item_photo = (i+1) + ".jpg";
              // }
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      }
    }
  }
</script>

<style type="text/css">
  .checked {
  color: orange;
}
</style>