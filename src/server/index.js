import axios from 'axios'
let getSonginfo = axios.create({
	responseType: 'json',
	transformRequest(data) {
		return data;
	},
	transformResponse(data) {
		let Obj = {}
		if(data.list) {
			Obj.data = data.list;
			Obj.origin = 'singer'
		} else if(data.banner) {
			Obj.data = data.data;
			Obj.banner = data.banner;
			Obj.origin = 'newSongsList'
		} else if(data.rank) {
			Obj.data = data.rank.list;
			Obj.origin = 'rank'
		} else if(data.plist) {
			Obj.data = data.plist;
			Obj.origin = 'plist'
		} else if(data.singers) {
			Obj.data = data.singers;
			Obj.origin = 'singers'
		} else if(data.songs) {
			Obj.data = data.songs;
			Obj.info = data.info;
		}

		return Obj;

	}

})

//获取新歌列表
export const getNewSongs = () => {
	return getSonginfo('/apiv1?json=true');
}
//获得歌曲排行
export const getRankSongs = () => {
	return getSonginfo('/apiv1/rank/list?json=true');
}
//获取歌单
export const getSongMenu = (pageNum) => {
	return getSonginfo('/apiv1/plist/index?json=true&page=' + pageNum);
}
//获取歌手分类的列表
export const getSingerClass = () => {
	return getSonginfo('/apiv1/singer/class?json=true');
}
//获取歌手类别中的歌手列表
export const getSingerList = (menuid,page) => {
	return getSonginfo('/apiv1/singer/list/' + menuid + '?json=true&page=' + page);
}
//获取歌单中的歌曲
export const getSongsList = (songsid,page) => {
	return getSonginfo('/apiv1/plist/list/' + songsid + '?json=true&page=' + page);
}
//获取热榜中的歌曲
export const getRankSongsList = (rankid,page) => {
	return getSonginfo('/apiv1/rank/info/' + rankid + '?json=true&page=' + page);
}
//获取歌手的歌曲
export const getSingerSongList = (singerid,page) => {
	return getSonginfo('/apiv1/singer/info/' + singerid + '?json=true&page=' + page);
}