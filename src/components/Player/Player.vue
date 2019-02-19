<template>
	<div class="playerpage">
		<div class="songname">
			<span>{{songinfo.audio_name}}</span>
		</div>
		<div class="songimg">
			<img :src="songinfo.img" class="imgCss"/>
		</div>
		<!--<div class="songlrc"></div>-->
		<div class="audioControler">
			<div class="songRangeLine">
				<mt-range v-model="rangeValue" :min="0" :max="100">
					<div slot="start">{{curTime}}</div>
					<div slot="end">{{endTime}}</div>
				</mt-range>
			</div>
			<div class="BtField">
				<div class="preSong" @click="preSong()">
					<img src="../../../static/actionIcon/play_prev.png" class="preBt"/>
				</div>
				<div class="playSong" @click="isPlay()">
					<img id="playBt" src="../../../static/actionIcon/play_pause.png" class="pauseBt"/>
				</div>
				<div class="nextSong" @click="nextSong()">
					<img src="../../../static/actionIcon/play_next.png" class="nextBt">
				</div>
			</div>
		</div>
		<frame target='audioframe'>
		<audio :src="songinfo.play_url" id="audio" autoplay="autoplay" ref="ado" >
		</audio>
		</frame>
	</div>
</template>

<script>
	import axios from 'axios';
	var playerpg={
		data(){
			return{
				curTime:'00:00',
				endTime:"00:00",
				rangeValue:0,
				isplay:true,
				songhash: this.$route.query.songhash,
				albumid: this.$route.query.albumid,
				songinfo:{}
			}
		},
		mounted(){
			var ado = this.$refs.ado;
			ado.addEventListener("timeupdate",() => {
			    this.curTime = parseInt(ado.currentTime/60) + ":" + parseInt(ado.currentTime%60);
			    this.rangeValue = (ado.currentTime/ado.duration)*100;
			    this.endTime = parseInt(ado.duration/60) + ":" + parseInt(ado.duration%60);
			  });

		},
		async created() {
			this.req(this.songhash, this.albumid);
		},
		update() {
			if(this.isplay == true)
			{
				sc.src="../../../static/actionIcon/play_play.png";
			}
			else
			{
				sc.src="../../../static/actionIcon/play_pause.png";
			}
		},
		methods:{
			isPlay(){
				var audio = document.getElementById('audio');
				var sc = document.getElementById('playBt');
				if(this.isplay == true)
					{
						audio.pause();
						this.isplay = false;
						sc.src="../../../static/actionIcon/play_play.png";
					}
				else
					{
						audio.play();
						this.isplay = true;
						sc.src="../../../static/actionIcon/play_pause.png";
					}
			},
			preSong(){
				var songlist = JSON.parse(localStorage.getItem("songlist"));
				var sindex = this.$route.query.songindex;
				if(sindex-1>=0)
				{
					var audio = document.getElementById('audio');
					var shash = songlist[sindex-1].hash;
					var salbumid = songlist[sindex-1].album_id;
					this.songhash = songlist[sindex-1].hash;
					this.albumid = songlist[sindex-1].album_id;
					/*刷新*/
					this.$router.push({path:'/player', query:{songindex:sindex-1, songhash:shash, albumid:salbumid, tab:'1'}})
					this.req(shash,salbumid);
				}
			},
			nextSong(){
				var songlist = JSON.parse(localStorage.getItem("songlist"));
				var sindex = this.$route.query.songindex;
				if(sindex+1<songlist.length)
				{
					var audio = document.getElementById('audio');
					var shash = songlist[sindex+1].hash;
					var salbumid = songlist[sindex+1].album_id;
					this.songhash = songlist[sindex+1].hash;
					this.albumid = songlist[sindex+1].album_id;
					/*刷新*/
					this.$router.push({path:'/player', query:{songindex:sindex+1, songhash:shash, albumid:salbumid, tab:'1'}})
					this.req(shash,salbumid);
				}
			},
			req(songhash,albumid){
				axios('/getsongapi/yy/index.php?r=play/getdata&hash=' 
						+ songhash
						+ '&album_id=' 
						+ albumid 
						+ '&_=1497972864535').then((res) => {
					this.songinfo = res.data.data;
					console.log(this.songinfo.song_name);
				}).catch((e) => {
					console.log(e);
				});
			}
		}
	};
	export default playerpg;
</script>

<style>
	
</style>