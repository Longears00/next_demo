const config = {
	default: true,
	version: '1.2.0',
	ios_version: '1.2.0',
	android_version: '1.2.0',
	nodeEnv: process.env.NODE_ENV,
	sdb: {
		url: 'http://192.168.4.177'
	},
	mongodb: {
		host: '192.168.4.158',
		port: '27017',
		database: 'bcf',
		auto_reconnect: true,
		poolsize: 10
	},
	redis: {
		port: 6379, // Redis port
		host: '192.168.4.159', // Redis host
		family: 4, // 4 (IPv4) or 6 (IPv6)
		password: '',
		db: 4
	},
	secret: new Buffer('http://laplace.', 'base64'),
	issuer: 'laplace',
	wechat_public: {
		// 微信公众平台
		appId: 'wx2d3d1d9b47fe0a8d',
		appSecret: '0799c691c40be55cece5182f64d111fa',
		token: 'laplace'
	}
};

export default config;
