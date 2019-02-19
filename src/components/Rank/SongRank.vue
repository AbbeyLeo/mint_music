<template>
	<div class='SongBox'>
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmorerank">
			<ul>
				<li v-for="item in ranklist" :key="item.rankid">
				    <router-link :to="{path:'/rank/song', query:{rankid:item.rankid,tab:'2'}}">  
						    <div class="imgAndName">
								<span>
									<img :src="item.imgurl" align="middle"/>
								</span>
								<span id="rankname">
									{{item.rankname | kugou}}
								</span>
							</div>	
					</router-link>
					<div class="bottomLine"></div>
				</li>
			</ul>
			</mt-loadmore>
	</div>
</template>

<script>
	import { getRankSongs } from '@/server'
	var songRank={
		data() {
			return {
				rankid: this.$route.query.rankid,
				ranklist: [],
				allLoaded:false
			}
		},
		async created() {
			let rankdata;
			rankdata = await getRankSongs(this.rankid);
			this.ranklist = rankdata.data.data;
			for(var i = 0; i<this.ranklist.length; i++)
			{
				this.ranklist[i].imgurl = "/static/rankListPic/" + this.ranklist[i].id + ".png";
			}
		},
		filters: {
			kugou(val) {

				if(!val.indexOf("酷狗")) {
					val = val.replace("酷狗", "嘤嘤");
					return val
				} else {
					return val
				}
			}
		},
		methods:{
			loadBottom() {
				setTimeout(() => {
				let lastValue = this.ranklist[4];
				if (lastValue < this.ranklist[this.ranklist.length - 1]) {
					for (let i = 1; i <= 5; i++) {
					this.ranklist.push(lastValue + i);
					}
				} else {
					this.allLoaded = true;								//数据加载完毕
				}
				this.$refs.loadmorerank.onBottomLoaded();
		        }, 1500);
			}
		}
	};
	export default songRank;
</script>

<style>
	*{
		text-decoration: none;
		color: #ffffff;
	}
	.SongBox{
		background:rgba(0,255,255,0);
		height:100%;
		width:100%;
		margin-top: 3em;
	}
	#rankname {
		margin-left: 0.5em;
		
	}
	
	.SongBox ul {
		margin: 0px;
		padding: 0px;
	}
	
	.SongBox ul li {
		list-style: none;
		font-size: 1em;
		padding: 0.01em 0.01em;
		margin-top: 0.3em;
		margin-bottom: 0.3em;
	}
	
	.SongBox ul li img {
		width: 6em;
		height: 6em;
		margin:0.3em;
		margin-left: 0.3em;
		border-bottom-left-radius: 2em;
		border-top-right-radius: 2em;
	}
	.imgAndName{
		width:100%;
		height:100%;
		display:flex;
    	align-items:center;	
    	padding-left: 3%;
	}
	.bottomLine{
		width:95%;
		height:2px;
		background:rgba(255,255,255,0.1);
		border-radius: 1em;
		margin:1px auto;
	}
</style>