<template>
	<div class="container mt-5 animated in-left shadow-lg">

		<div class="row">

			<div class="col-sm-9 mx-auto" style="padding-bottom: 280px;">
				<h4 class="text-center pt-4 pb-0">Orders</h4>
				<table class="table borderless" style="margin-top: 30px;">
					<thead>
						<tr>
							<th>Voucher No</th>
							<!-- <th style="padding-left: 0px; padding-right: 0px;">Photo</th> -->
							<th>Username</th>
							<th>Total</th>
							<th>Order Date</th>
							<th>Detail</th>

						</tr>
					</thead>
					<tbody>
						<tr v-for="(order,index) in orders" :key="index"  style="font-weight: 600; font-size: 15px;">
							<td>#{{order.order_voucherno}}</td>
							<!-- <td style="padding-left: 0px; padding-right: 0px;"><img :src="order.order_items.item_photo" width="150"></td> -->
							<td>{{order.order_user.user_name}}</td>
							<td>{{order.order_total}}</td>
							<td>{{order.order_date}}</td>
							<td><router-link class="badge badge-info ml-2" :to="{name: 'order-show', params: { id: order.order_id }}"><i class='fas fa-eye'></i></router-link></td>
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
				current_user_email: ''
			}
		},
		mounted(){
			this.getOrders();
		},
		methods:{
			getOrders(){
				console.log("Orders")
				ItemService.getOrders()
				.then(res => {
					this.orders = res.data.orders
					// console.log(this.orders.order_voucherno);
				})
			}
		},
	}
</script>

<style type="text/css">
	
</style>