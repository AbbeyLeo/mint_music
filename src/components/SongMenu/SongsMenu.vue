<template>
	<div class="SongBox">
		<!--<div class="Picbox"></div>-->
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul>
				<li v-for="item in songlist">
				    <router-link :to="{path:'/songmenu/songs',  query:{Songsid:item.specialid,Songsimg:item.imgurl,tab:'3'}}">  
						    <div class="imgAndName">
								<span>
									<img :src="item.imgurl | getRigthImgUrl" align="middle"/>
								</span>
								<span class="name">
									{{item.specialname}}
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
	import { getSongMenu } from '@/server'
	var songMenu={
		data() {
			return {
				songlist: [],
				allLoaded:true,
				total:0,
				pagesize:30,
				nowpage:1
			}
		},
		async created() {
			let {
				data
			} = await getSongMenu(this.nowpage);
			this.songlist = data.data.list.info;
			this.total = data.data.list.total;
			this.pagesize = data.data.pagesize;
			
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
		filters: {
			getRigthImgUrl(val) {
				val = val.replace("{size}", "400");
				return val
			}
		},
		methods:{
			loadBottom() {
		        if (this.songlist.length+1 == this.total) {
		          this.allLoaded = true;
		        }
		        setTimeout(() => {
		        	this.getList();
		        	this.$refs.loadmore.onBottomLoaded();
		        }, 1500);
		      },
		      async getList(){
		      	this.nowpage++;
		      	let {
					data
				} = await getSongMenu(this.nowpage);
				var templist = data.data.list.info;
				this.songlist = this.songlist.concat(templist);
		      }
		}
	};
	export default songMenu;
</script>

<style  scoped="scoped">
	*{
		text-decoration: none;
		color: #ffffff;
	}
	.SongBox{
		background:rgba(0,255,255,0);
		padding:0.01em;
		padding-top: 0.5em;
		display: flex;
		flex: 1;
		flex-direction: column;
		height:100%;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		overflow: touch;
		
	}
	.name {
		margin-left: 0.5em;
		display: inline-block;
		height: 2.5em;
		width: 13em;
		
	}
	
	ul {
		margin: 1px;
		padding: 1px;
		width:100%;
		height:100%;
	}
	
	ul li {
		list-style: none;
		font-size: 1em;
		padding: 0.01em 0.01em;
		margin-top: 0.3em;
		margin-bottom: 0.3em;
	}
	
	ul li img {
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
    	overflow: hidden;
	}
	.bottomLine{
		width:95%;
		height:2px;
		background:rgba(255,255,255,0.1);
		border-radius: 1em;
		margin:1px auto;
		
	}
</style>