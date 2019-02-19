'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			//获取单首歌曲信息
			'/getsongapi': {
				target: 'http://www.kugou.com/',
//				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/getsongapi': '/' //target后面的文件夹名字	
				},
			},
			//从m.kugou.com获取数据
			'/apiv1': {
				target: 'http://m.kugou.com/', //请求数据的地址
				secure: false, //false:请求方式为http，true:请求方式为https
				changeOrigin: true, //是否进行跨域
				pathRewrite: {
					'^/apiv1': '/' //target后面的文件夹名字	
				},

			},
			'/search': {
				target: 'http://mobilecdn.kugou.com/', //请求数据的地址
				changeOrigin: true,
				pathRewrite: {
					'^/search': '/' //target后面的文件夹名字	
				}

			},

			headers: {
				'User-Agent': 'Mozilla / 5.0(Linux; Android 6.0; Nexus 5 Build / MRA58N) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 55.0 .2883 .87 Mobile Safari / 537.36'
			}

		},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8048, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
