import defaultConfig from '../../config/default';

let env = process.env.NODE_ENV;

let config = defaultConfig;
if (env === 'development') {
	config = defaultConfig;
} else if (env === 'production') {
	config = defaultConfig;
}

export default config;
