<template>
	<mt-navbar v-model="selected" fixed>
			<mt-tab-item id="1">新    歌</mt-tab-item>
			<mt-tab-item id="2">排    行</mt-tab-item>
			<mt-tab-item id="3">歌    单</mt-tab-item>
			<mt-tab-item id="4">歌    手</mt-tab-item>
	</mt-navbar>
</template>

<script>
	export default{
		name:'navbar',
		data(){
			return{
				selected:this.$route.query.tab
			
			}
		},
		updated(){
			if(this.selected=='1')
			{
				this.$router.push({path:'/newsong',query:{tab:'1'},replace:true});
			}
			if(this.selected=='2')
			{
				this.$router.push({path:'/',query:{tab:'2'},replace:true});
			}
			if(this.selected=='3')
			{
				this.$router.push({path:'/songmenu',query:{tab:'3'},replace:true});
			}
			if(this.selected=='4')
			{
				this.$router.push({path:'/singerclass',query:{tab:'4'},replace:true});
			}
		},
		created(){
			if(this.selected=='1')
			{
				this.$router.push({path:'/newsong',query:{tab:'1'},replace:true});
			}
			if(this.selected=='2')
			{
				this.$router.push({path:'',query:{tab:'2'},replace:true});
			}
			if(this.selected=='3')
			{
				this.$router.push({path:'/songmenu',query:{tab:'3'},replace:true});
			}
			if(this.selected=='4')
			{
				this.$router.push({path:'/singerclass',query:{tab:'4'},replace:true});
			}
		}
	}
</script>

<style>
</style>