<template>
	<p>{{songinfo.audio_name}}</p>
</template>

<script>
	import axios from 'axios';
	//	import { getThisSonginfo } from '@/server'
	export default {
		data() {
			return {
				songhash: this.$route.query.songhash,
				albumid: this.$route.query.albumid,
				songinfo: {}
			}
		},
		async created() {
			axios('/getsongapi/yy/index.php?r=play/getdata&hash=' 
						+ this.songhash
						+ '&album_id=' 
						+ this.albumid 
						+ '&_=1497972864535').then((res) => {
				this.songinfo = res.data.data;
			}).catch((e) => {
				console.log(e);
			})
		}
	};
</script>

<style>
</style>