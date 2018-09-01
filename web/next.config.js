const webpack = require('webpack');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const withSass = require('@zeit/next-sass');

const extractSASS = new ExtractTextPlugin({ filename: 'static/style.css' });
const extractCSS = new ExtractTextPlugin({ filename: 'static/theme.css' });
const extractLESS = new ExtractTextPlugin({ filename: 'static/theme.css' });

const nextConfig = {
	// distDir: 'build',
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]___[hash:base64:5]'
	},
	//extractCSSPlugin: extractSASS,
	sassLoaderOptions: {},
	plugins: {
		'postcss-css-variables': {}
	},
	postcssLoaderOptions: {
		parser: true,
		config: {
			ctx: {
				theme: JSON.stringify(process.env.REACT_APP_THEME)
			}
		}
	}
};

module.exports = withSass({
	...nextConfig,
	webpack: (config, options) => {
		const { dev, isServer } = options;

		

		let env = '"development"';
		if (process.env.ENV === 'production') {
			env = '"production"';
		} else if (process.env.ENV === 'localhost') {
			env = '"localhost"';
		} else {
			env = '"development"';
		}
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.ENV': env
			})
		);

		return config;
	}
});
