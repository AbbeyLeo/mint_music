// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/common.css'
import '@/assets/css/my-mint.css'
import '@/assets/css/song-list.css'
import '@/assets/css/player.css'
import '@/assets/css/animate.css'

import Music from './App.vue'

Vue.prototype.$axios=axios;
Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(Music);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
