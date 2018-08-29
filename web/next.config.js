const webpack = require('webpack');
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
	lessLoaderOptions: {
		javascriptEnabled: true
	},
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

		/*************** sass ***************/
		const cssConfig = {
			cssModules: true,
			cssLoaderOptions: {
				importLoaders: 1,
				localIdentName: '[local]___[hash:base64:5]'
			},
			extractCSSPlugin: extractSASS
			// sassLoaderOptions   : {},
			// plugins             : {
			//   'postcss-css-variables': {}
			// },
			// postcssLoaderOptions: {
			//   parser: true,
			//   config: {
			//     ctx: {
			//       theme: JSON.stringify(process.env.REACT_APP_THEME)
			//     }
			//   }
			// }
		};
		options.defaultLoaders.sass = cssLoaderConfig(config, extractSASS, {
			...cssConfig,
			dev,
			isServer,
			loaders: [
				{
					loader: 'sass-loader',
					options: {}
				}
			]
		});

		config.module.rules.push(
			{
				test: /\.scss$/,
				use: options.defaultLoaders.sass
			},
			{
				test: /\.sass$/,
				use: options.defaultLoaders.sass
			}
		);
		config.plugins.push(extractSASS);
		if (!isServer) {
			config = commonsChunkConfig(config, /\.sass/);
		}
		/*************** sass ***************/

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
