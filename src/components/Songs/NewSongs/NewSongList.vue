<!--新歌vue-->
<template>
	<div class="SongList">
		<!--<div class="Picbox"></div>-->
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul>
				<li v-for="(item,index) in newsongslist" :key="item.hash" :id="item.hash">
					<div class="songName" @click="savelist(item,index)"> 
						<span>{{item.filename}}</span>
					</div>
				</li>
			</ul>
		</mt-loadmore>
	</div>
</template>

<script>
	import { getNewSongs } from '@/server'
	var newSongsList={
		data(){
			return{
				newsongslist:[],
				allLoaded:true,
			}
		},
		async created() {
			let {
				data
			} = await getNewSongs();
			this.newsongslist = data.data;
		},
		methods:{
			loadBottom() {
				setTimeout(() => {
				let lastValue = this.newsongslist[(this.newsongslist.length - 1)];
				if (lastValue < this.newsongslist[this.newsongslist.length - 1]) {
					for (let i = 1; i <= 10; i++) {
					this.newsongslist.push(lastValue + i);
					}
					this.$refs.loadmore.onBottomLoaded();
				} else {
					this.allLoaded = true;								//数据加载完毕
				}
		        }, 1500);
			},
			savelist(item,index){
				/*if(JSON.parse(localStorage.getItem("songlist")) != null)
					localStorage.remove("songlist");*/
				localStorage.setItem("songlist",JSON.stringify(this.newsongslist));
				this.$router.push({path:'/newsong/player', query:{songindex:index, songhash:item.hash, albumid:item.album_id, tab:'1'}});
			}
			
		}
	}
	export default newSongsList;
</script>

<style>
</style>