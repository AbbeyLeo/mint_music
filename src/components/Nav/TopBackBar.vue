<template>
	<div id="backtop1">
		<mt-header title="嘤嘤音乐" fixed>
		  <router-link :to='{path:lastpath, query:obj}' replace slot="left" >
		    <mt-button icon="back"></mt-button>
		  </router-link> 
		</mt-header>
	</div>
</template>

<script>
	var topBackBar={
		data(){
			return{
				lastpath:'/',
				obj:{}
			}
		},
		install(Vue){
			Vue.component('top-backbar', topBackBar);
		},
		async mounted(){
			this.lastpath='.';
			this.obj=this.$route.query;
		}
	};
	
	export default topBackBar;
</script>

<style>
	#backtop1{
		width:100%;
	}
</style>