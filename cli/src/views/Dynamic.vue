<template>
	<div>
		<h1>Dynamic Route Component</h1>
		<p>This is dynamic route for child components <span class="text-danger" id="msg" v-if="seen"> with id = {{id}}</span> </p>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					
				</div>
				<div class="col-md-3">
					<input class="form-control" v-model="data" placeholder="Enter ID">
				</div>
				<div class="col-md-1">
					<router-link class="btn btn-success" @click.native="seen = true" :to="'/dynamic_route/' + data">GOTO</router-link>
				</div>
			</div>
		</div>
			
			
		
		<!-- <p>This is dynamic route for child components with id = <span class="text-danger">{{id}}</span></p> -->
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				data: '',
				seen : false,
			}
		},
		computed: {
			id: function () {
				return this.$route.params.id
			}
		}
	}
</script>

<style type="text/css">
	
</style>