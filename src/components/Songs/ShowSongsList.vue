<template>
	<div id="ListContent">
		<songs></songs>
	</div>
</template>

<script>
	import SongsList from '@/components/Songs/Songs-components/SongsList.vue';
	import { Loadmore } from 'mint-ui';

	var ShowSongsList={
		install(Vue){
			Vue.component('song-list', ShowSongsList);
			Vue.component('songs', SongsList);
			Vue.component(Loadmore.name, Loadmore);
		}
	};

export default ShowSongsList;
</script>

<style>
</style>