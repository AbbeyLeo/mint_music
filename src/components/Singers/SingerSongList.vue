<template>
	
	<div class="SongList">
		<!--<div class="Picbox"></div>-->
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul>
				<li v-for="(item,index) in songlist">
					<div class="songName" @click="savelist(item,index)"> 
						<span>{{item.filename}}</span>
					</div>
				</li>
			</ul>
		</mt-loadmore>
	</div>
</template>

<script>
	import { getSingerSongList } from '@/server'
	var singerSongList={
		data(){
			return{
				singerid: this.$route.query.Singerid,
				imgurl: this.$route.query.imgurl,
				songlist:[],
				total:0,
				pagesize:30,
				page:1,
				allLoaded:true
			}
		},
		async created() {
			let songs1 = await getSingerSongList(this.singerid,1);
			this.songlist = songs1.data.data.list;
			this.total = songs1.data.data.total;
			console.log(this.total);
			this.pagesize = songs1.data.data.pagesize;
			
			window.onscroll = () => {
				   	//变量scrollTop是滚动条滚动时，距离顶部的距离
				   	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
				   	//变量windowHeight是可视区的高度
				   	var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				   	//变量scrollHeight是滚动条的总高度
				   	var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
				               //滚动条到底部的条件
				               if(scrollTop+windowHeight==scrollHeight){
				                //写后台加载数据的函数
				         		this.allLoaded = false;
				              }
				               else{
				               		this.allLoaded = true;
				               }
				        }
		},
		methods:{
			loadBottom() {
		        if (this.songlist.length+1 >= this.total) {
		          this.allLoaded = true;
		        }
		        setTimeout(() => {
		        	this.getList();
		        	this.$refs.loadmore.onBottomLoaded();
		        }, 1500);
		      },
		      async getList(){
		      	this.page++;
		      	let songsdata = await getSingerSongList(this.singerid,this.page);
				var templist =  songsdata.data.data.list;
				this.songlist = this.songlist.concat(templist);
				console.log(templist);
		      },
		       savelist(item,index){
				/*if(JSON.parse(localStorage.getItem("songlist")) != null)
					localStorage.remove("songlist");*/
				localStorage.setItem("songlist",JSON.stringify(this.songlist));
				this.$router.push({path:'/singerclass/singers/songs/player', query:{songindex:index, songhash:item.hash, albumid:item.album_id, tab:'1'}});
			}
		}
	}
	export default singerSongList;
</script>

<style>
</style>