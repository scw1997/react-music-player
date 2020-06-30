const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		proxy('/dossier-server/**', {
			target: 'http://113.125.201.131:9200/',
			changeOrigin: true
		})
	)

	// 项目报表
	app.use(
		proxy('/DM/**', {
			target: 'http://192.168.64.40:8011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/PT/business/**', {
			target: 'http://192.168.64.40:8011/',
			changeOrigin: true
		})
	)

	// 日志
	app.use(
		proxy('/PT/business/**', {
			target: 'http://192.168.64.26:8011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/DM/**', {
			target: 'http://192.168.64.26:8011/',
			changeOrigin: true
		})
	)

	// //  产品宣讲
	// app.use(
	//   proxy('/DM/gr/xq/**', {
	//     target: 'http://192.168.53.34:8011/',
	//     changeOrigin: true
	//   })
	// )
	// app.use(
	//   proxy('/DM/cpxj/kh/**', {
	//     target: 'http://192.168.53.34:8011/',
	//     changeOrigin: true
	//   })
	// )

	//  客户解决方案
	app.use(
		proxy('/DM/**', {
			target: 'http://192.168.64.22:8011//',
			// target: 'http://113.125.201.131:16014/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/PT/business/**', {
			target: 'http://192.168.64.22:8011/',
			// target: 'http://113.125.201.131:16014/',
			changeOrigin: true
		})
	)
	// app.use(
	//   proxy('/PT/business/**', {
	//     // target: 'http://192.168.53.31:8011/',
	//     target: 'http://222.222.216.74:10052/mock/842',
	//     changeOrigin: true
	//   })
	// )
	app.use(
		proxy('/PT/business/**', {
			target: 'http://192.168.53.27:8011/',
			// target: 'http://113.125.201.131:16014/',
			changeOrigin: true
		})
	)

	app.use(
		proxy('/Zzjg/**', {
			// target: 'http://192.168.53.31:8011/',
			target: 'http://113.125.201.131:16014/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/BPM/**', {
			// target: 'http://192.168.53.31:8011/',
			target: 'http://113.125.201.130:32033',
			changeOrigin: true
		})
	)

	app.use(
		proxy('/EAMS/business/**', {
			// target: 'http://113.125.201.130:32129',
			target: 'http://113.125.201.131:16014/',
			changeOrigin: true
		})
	)

	app.use(
		proxy('/fk/**', {
			target: 'http://192.168.45.82:8018/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/pt-web/zmd/**', {
			target: 'http://113.125.201.130:32010/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/DM/jkbx/gr/**', {
			target: 'http://192.168.53.52:8011/',
			changeOrigin: true
		})
	)

	app.use(
		proxy('/PT/business/common/**', {
			target: 'http://192.168.53.25:8011/',
			changeOrigin: true
		})
	)

	app.use(
		proxy('/EAMS/business/**', {
			target: 'http://113.125.201.130:32129',
			changeOrigin: true
		})
	)
	// 中台附件接口
	app.use(
		proxy('/Jcsx/wjgl/wjsc/**', {
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/group1/**', {
			target: 'http://113.125.201.131:9300/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/api-auth/authority/**', {
			// target: 'http://192.168.0.209:9200/',
			target: 'http://113.125.201.131:9200/',
			// target: 'http://222.222.216.74:30337/',
			changeOrigin: true
		})
	)

	//  app.use(
	//     proxy('/DM/baocan/jg/', {
	//         target: 'http://192.168.53.83:8011/',
	//         changeOrigin: true
	//     })
	// )

	//  app.use(
	//     proxy('/DM/jg/ycsq/', {
	//         target: 'http://192.168.53.83:8011/',
	//         changeOrigin: true
	//     })
	// )
	// app.use(
	//     proxy('/PT/**', {
	//         target: 'http://113.125.201.131:18014/',
	//         changeOrigin: true
	//     })
	// )
	// app.use(
	//     proxy('/api-auth/authority/**', {
	//         // target: 'http://192.168.0.209:9200/',
	//         target: 'http://113.125.201.131:9200/',
	//         // target: 'http://222.222.216.74:30337/',
	//         changeOrigin: true
	//     })
	// )

	// app.use(
	//   proxy('/DM/**', {
	//   //   target: 'http://222.222.216.74:28041/',
	//     target: 'http://113.125.201.131:18014/',
	//   // target: 'http://113.125.201.131:18014/',
	//     changeOrigin: true
	//   })
	// )
	app.use(
		proxy('/qg/cggl/**', {
			// target: 'http://127.0.0.1:8011/',
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)

	//  app.use(
	//     proxy('/DM/jg/yjjy/', {
	//         target: 'http://192.168.53.83:8011/',
	//         changeOrigin: true
	//     })
	// )

	// app.use(
	//     proxy('/PT/**', {
	//       target: 'http://113.125.201.131:18014/',
	//         changeOrigin: true
	//     })
	// )
	app.use(
		proxy('/PT/**', {
			target: 'http://192.168.53.25:8011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/DM/**', {
			target: 'http://192.168.53.204:8011/',
			changeOrigin: true
		})
	)

	//  app.use(
	//     proxy('/DM/jg/ycsq/', {
	//         target: 'http://192.168.53.83:8011/',
	//         changeOrigin: true
	//     })
	// )
	// app.use(
	//     proxy('/DM/yg/**', {
	//         target: 'http://192.168.53.206:8011/',
	//        // target: 'http://113.125.201.131:18011/',
	//         changeOrigin: true
	//     })
	// )
	// app.use(
	//     proxy('/DM/kh/**', {
	//         target: 'http://192.168.53.206:8011/',
	//        // target: 'http://113.125.201.131:18011/',
	//         changeOrigin: true
	//     })
	// )

	// app.use(
	//     proxy('/api-auth/**', {
	//         target: 'http://113.125.201.131:9200/',
	//         changeOrigin: true
	//     })
	// )
	app.use(
		proxy('/qg/cggl/**', {
			// target: 'http://127.0.0.1:8011/',
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/apm/common/**', {
			// target: 'http://127.0.0.1:8011/',
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/ZZJG/**', {
			target: 'http://192.168.5.198:7001/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/FM/**', {
			target: 'http://192.168.5.123:8082/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/IM/**', {
			target: 'http://192.168.5.123:8082/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/EAMS/**', {
			target: 'http://192.168.5.123:8082/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/app-web/**', {
			// target: 'http://113.125.201.131:18011/',
			target: 'http://113.125.201.131:16004/',
			// target: 'http://113.125.201.131:18012/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/server/report/**', {
			target: 'http://192.168.5.123:7001/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/APM/**', {
			// target: 'http://127.0.0.1:8011/',
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)

	//   app.use(
	//     proxy('/DM/**', {
	//       target: 'http://192.168.53.25:8011/',
	//       changeOrigin: true
	//     })
	//   )

	app.use(
		proxy('/apm/**', {
			//  target: 'http://127.0.0.1:8011/',
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/PB/**', {
			target: 'http://113.125.201.131:38083/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/hqgl/**', {
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/khgl/**', {
			// target: 'http://192.168.53.28:8011/',
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	app.use(
		proxy('/swgl/**', {
			target: 'http://113.125.201.131:18011/',
			changeOrigin: true
		})
	)
	// app.use(
	//     proxy('/DM/**', {
	//       target: 'http://113.125.201.131:18014/',
	//         changeOrigin: true
	//     })
	// )
}
