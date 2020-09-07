<template>
	<div>
		<div class="jumbotron jumbotron-fluid animated in-left" style="padding-bottom: 500px;">
			
		</div>

		<div class="container">
			<div class="row animated animatedFadeInUp fadeInUp">
				<div class="col-md-3" v-for="(item,index) in items" :key="index">
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
        myItems: []
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
              for (var i = 0; i < this.items.length; i++) {
              	//../assets/img/1.jpg
              	this.items[i].item_photo =  (i+1) + ".jpg";
              }
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