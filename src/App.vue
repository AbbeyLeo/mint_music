<template>
  <div id="content">
			<!--<top-backbar></top-backbar>-->
			
			<router-view name="nav"/>
				<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
					<router-view class="contentbox" name="contentbox"/>
				</transition>
				<!--搜索页开始-->
					<div id="searchpage">
						<div>
							<input type="text" name="searchtext" id="searchtext" value="" v-model="searchWord" />
						</div>
						<ul class="ScrobarForUl">
							<li v-for="item in searchResultList">
								<router-link :to="{path:'/newsong/player', query:{songhash:item.hash,albumid:item.album_id}}">
									<div @click="closesearch">{{item.filename}}</div>
								</router-link>
							</li>
						</ul>
					</div>
					<!--搜索页结束-->
					<div class="searchBtn" id="searchBtn" @click="isShowSearch" ><span>搜索</span> </div>
			<!--<song-list></song-list>-->
  </div>
</template>

<script>
	import axios from 'axios'
	import { getSearchSonginfo } from '@/server'
	var Music = {
		data() {
			return {
				searchWord: '',
				searchResultList: [],

			}
		},
	  install(Vue){
	  	Vue.component('music', Music)
	  },
		methods: {
			
			isShowSearch() {
				let searchpage = document.getElementById('searchpage')
				if(parseInt(searchpage.style.height)) {
					searchpage.style.height = 0

				} else {
					searchpage.style.height = '80%'

				}

			},
			closesearch() {
				let searchpage = document.getElementById('searchpage')
				searchpage.style.height = 0
			}

		},
		updated() {
			axios('/search/api/v3/search/song?format=jsonp&keyword=' + this.searchWord + '&page=1&pagesize=30&showtype=1&callback=kgJSONP323906052').then((res) => {
				let temp = res.data
				var a = temp.indexOf('(') + 1
				var b = temp.lastIndexOf(')')
				temp = JSON.parse(temp.slice(a, b))
				this.searchResultList = temp.data.info
			}).catch((e) => {
				console.log(e);
			})

		},
	};
	export default Music;
</script>

<style>
	* {
		text-decoration: none;
		color: #ffffff;
		font-family: "微软雅黑";
	}
	
	#searchtext {
		width: 90%;
		line-height: 2.2em;
		border: 0px;
		margin: 1em;
		border-radius: 1px;
		padding-left: 1em;
		outline: none;
		border:2px solid  rgba(255,255,255,0.4);
		background-color: rgba(50,50,50,1);
	}
	
	#searchpage {
		position: fixed;
		width: 95%;
		height: 0%;
		top: 14%;
		z-index: 100;
		background-color: rgba(0,0,0,0.88);
		border-bottom-left-radius: 2em;
		border-bottom-right-radius: 2em;
		transition: all 0.5s;
		overflow: hidden;
		margin-left: 5%;
	}
	
	.searchBtn {
		border-radius: 50%;
		position: fixed;
		width: 4em;
		height: 4em;
		right: 1em;
		bottom: 1em;
		box-shadow: 1px 1px 6px #8A8B8B, -1px -1px 6px #8A8B8B;
		z-index: 100;
		display:flex;
    align-items:center;	
    justify-content:center;
	}
	.ScrobarForUl {
		margin: 0;
		padding: 0;
		overflow: auto;
		height: 85%;
	}
	
	.ScrobarForUl li {
		list-style: none;
		text-align: left;
		padding-left: 4%;
		padding-right: 4%;
		height: 5em;
	}
	
	
	.toLarge{
		-webkit-animation: toLarge 0.55s ease 0ms 1 normal forwards;
	}
	@-webkit-keyframes toLarge{
		from{
			height: 4em;
			width: 4em;
			 -webkit-transform: scale3d(1, 1, 1);
    		transform: scale3d(1, 1, 1);
		}
		
			30% {
		    -webkit-transform: scale3d(1.45, 0.75, 1);
		    transform: scale3d(1.45, 0.75, 1);
		  }
		
		  40% {
		    -webkit-transform: scale3d(0.75, 1.25, 1);
		    transform: scale3d(0.75, 1.25, 1);
		  }
		
		  50% {
		    -webkit-transform: scale3d(1.15, 0.85, 1);
		    transform: scale3d(1.15, 0.85, 1);
		  }
		
		  65% {
		    -webkit-transform: scale3d(0.95, 1.05, 1);
		    transform: scale3d(0.95, 1.05, 1);
		  }
		
		  75% {
		    -webkit-transform: scale3d(1.05, 0.95, 1);
		    transform: scale3d(1.05, 0.95, 1);
		  }
		
		to{
			height: 4.5em;
			width: 4.5em;
			 -webkit-transform: scale3d(1, 1, 1);
    		transform: scale3d(1, 1, 1);
			
		}
	}

	@-webkit-keyframes toSmall{
		from{
			height: 4em;
			width: 4em;
			 -webkit-transform: scale3d(1, 1, 1);
    		transform: scale3d(1, 1, 1);
		}
		
			30% {
		    -webkit-transform: scale3d(1.45, 0.75, 1);
		    transform: scale3d(1.45, 0.75, 1);
		  }
		
		  40% {
		    -webkit-transform: scale3d(0.75, 1.25, 1);
		    transform: scale3d(0.75, 1.25, 1);
		  }
		
		  50% {
		    -webkit-transform: scale3d(1.15, 0.85, 1);
		    transform: scale3d(1.15, 0.85, 1);
		  }
		
		  65% {
		    -webkit-transform: scale3d(0.95, 1.05, 1);
		    transform: scale3d(0.95, 1.05, 1);
		  }
		
		  75% {
		    -webkit-transform: scale3d(1.05, 0.95, 1);
		    transform: scale3d(1.05, 0.95, 1);
		  }
		
		to{
			height: 4.5em;
			width: 4.5em;
			 -webkit-transform: scale3d(1, 1, 1);
    		transform: scale3d(1, 1, 1);
			
		}
	}
</style>
