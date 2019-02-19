import Vue from 'vue'
import Router from 'vue-router'
import ShowSongsList from '@/components/Songs/ShowSongsList.vue'
import topBackBar from '@/components/Nav/TopBackBar.vue'
import navbar from '@/components/Nav/Navbar.vue'
import newSongsList from '@/components/Songs/NewSongs/NewSongList'
import playerpg from'@/components/Player/Player.vue'
import songRank from '@/components/Rank/SongRank.vue'
import testv from'@/components/Testv.vue'
import songMenu from'@/components/SongMenu/SongsMenu.vue'
import singerClass from '@/components/Singers/SingerClass.vue'
import songList from '@/components/SongMenu/MenuSongs.vue'
import singerList from '@/components/Singers/SingersList.vue'
import rankSongList from '@/components/Rank/RankSongList.vue'
import singerSongList from '@/components/Singers/SingerSongList.vue'

Vue.use(Router);
Vue.use(ShowSongsList);
Vue.use(topBackBar);
export default new Router({
	mode:'history',
	base:'/mint-music/',
  routes: [
    {
      path: '/',
      name: 'songRank',
      components: {
      	nav:navbar,
      	contentbox:songRank
      }
    },
    {
		path: '/player',
		name: 'playerpg',
		components: {
			nav:topBackBar,
			contentbox:playerpg
		}
	},
	{
		path: '/rank',
		name: 'songRank',
		components: {
			nav:navbar,
			contentbox:songRank
		}
	},
	{
		path: '/songmenu',
		name: 'songMenu',
		components: {
			nav:navbar,
			contentbox:songMenu
		}
	},
	{
		path: '/singerclass',
		name: 'singerClass',
		components: {
			nav:navbar,
			contentbox:singerClass
		}
	},
	{
		path: '/newsong',
		name: 'newSongsList',
		components: {
			nav:navbar,
			contentbox:newSongsList
		}
	},
	{
		path: '/songmenu/songs',
		name: 'songList',
		components: {
			nav:topBackBar,
			contentbox:songList
		}
	},
	{
		path: '/singerclass/singers',
		name: 'singerList',
		components: {
			nav:topBackBar,
			contentbox:singerList
		}
	},
	{
		path: '/rank/song',
		name: 'rankSongList',
		components: {
			nav:topBackBar,
			contentbox:rankSongList
		}
	},
	{
		path: '/singerclass/singers/songs',
		name: 'singerSongList',
		components: {
			nav:topBackBar,
			contentbox:singerSongList
		}
	},
    {
		path: '/newsong/player',
		name: 'playerpg',
		components: {
			nav:topBackBar,
			contentbox:playerpg
		}
	},
    {
		path: '/rank/song/player',
		name: 'playerpg',
		components: {
			nav:topBackBar,
			contentbox:playerpg
		}
	},
    {
		path: '/singerclass/singers/songs/player',
		name: 'playerpg',
		components: {
			nav:topBackBar,
			contentbox:playerpg
		}
	},
	{
		path: '/songmenu/songs/player',
		name: 'playerpg',
		components: {
			nav:topBackBar,
			contentbox:playerpg
		}
	}
	
  ]
})
