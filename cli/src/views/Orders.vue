<template>
	<div class="container" style="margin: 20px 100px;">
		<div class="row">
			<div class="col-md-12 shadow" style="padding-left: 100px; padding-right: 100px; padding-bottom: 350px">
				<table class="table borderless" style="margin-top: 50px;">
					<thead>
						<tr>
							<th style="border-top: 0; padding-left: 0px; padding-right: 0px;" >Voucher No</th>
							<!-- <th style="padding-left: 0px; padding-right: 0px;">Photo</th> -->
							<th style="border-top: 0; padding-left: 0px; padding-right: 20px;">Username</th>
							<th style="border-top: 0; padding-left: 25px; padding-right: 0px;">Total</th>
							<th style="border-top: 0; padding-left: 25px; padding-right: 0px;">Order Date</th>
							<th style="border-top: 0; padding-left: 0px; padding-right: 0px;">Detail</th>

						</tr>
					</thead>
					<tbody>
						<tr v-for="(order,index) in orders" :key="index"  style="font-weight: 600; font-size: 15px;">
							<td style="padding-left: 0px; padding-right: 0px;">{{order.order_voucherno}}</td>
							<!-- <td style="padding-left: 0px; padding-right: 0px;"><img :src="order.order_items.item_photo" width="150"></td> -->
							<td style="padding-left: 0px; padding-right: 0px;">{{order.order_user.name}}</td>
							<td style="padding-left: 25px; padding-right: 0px;">{{order.order_total}}</td>
							<td style="padding-left: 25px; padding-right: 0px;">{{order.order_date}}</td>
							<td style="padding-left: 10px; padding-right: 0px;"><span class="badge badge-info ml-2"><i class='fas fa-eye'></i></span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!-- <h3 class="text-center">Thank you for your order</h3> -->
	</div>
</template>

<script type="text/javascript">
	import ItemService from '@/services/ItemService.js'
	export default{
		data(){
			return{
				orders: [],
			}
		},
		mounted(){
			this.getOrders();
		},
		methods:{
			getOrders(){
				ItemService.getOrders()
				.then(res => {
					this.orders = res.data.orders
					console.log(this.orders.order_voucherno);
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