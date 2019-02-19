<!--新歌vue-->
<template>
	<div id="Song" class="SongList">
		<!--<div class="Picbox"></div>-->
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul>
				<li v-for="item in list">
					<router-link :to="{path:'/'}">
					<div class="songName"> {{item}}</div>
					</router-link>
				</li>
			</ul>
		</mt-loadmore>
	</div>
</template>

<script>
	var SongsList={
		data(){
			return{
				list:['asd3w','haijsh','haijsh00','haijsh99','haijsh9','haijs8','haijs7','haijs6','haijsh5','haijsh4','haijsh3','haijsh2','haijsh1',],
				allLoaded:false
			}
		},
		methods:{
			loadBottom() {
				setTimeout(() => {
				let lastValue = this.list[(this.list.length - 1)/2];
				if (lastValue < this.list[this.list.length - 1]) {
					for (let i = 1; i <= 10; i++) {
					this.list.push(lastValue + i);
					}
				} else {
					this.allLoaded = true;								//数据加载完毕
				}
				this.$refs.loadmore.onBottomLoaded();
		        }, 1500);
			}
		},
	}
	export default SongsList;

</script>

<style>
</style>