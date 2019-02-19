<template>
	<div class="SingClassBox">
		<ul>
			<li v-for="item in singerClass" :key="item.classid" >
				<router-link :to="{path:'/singerclass/singers', query:{Singersid:item.classid,tab:'4'}}">  
					<div class="classname" :id='item.classid'>
						{{item.classname}}
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { getSingerClass } from '@/server'
	export default {
		name: 'singerClass',
		data() {
			return {
				singerClass: []
			}
		},
		async created() {
			let {
				data
			} = await getSingerClass();
			this.singerClass = data.data;
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	*{
		text-decoration: none;
		color:#FFFFFF;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	.classname {
		width: 80%;
		line-height: 2.5em;
		margin: 1.5em auto;
		border: 0.04em solid rgba(188,188,188,0.5);
		border-bottom: 2px solid #BCBCBC;
		border-radius: 6px;
		padding-left: 1.3em;;
	}
	
	.SingClassBox {
		margin-top: 5.5em;
	}
</style>