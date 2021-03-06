const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function getExternals() {
	const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'));
	return nodeModules.reduce(function(ext, mod) {
		ext[mod] = 'commonjs ' + mod;
		return ext;
	}, {});
}
module.exports = {
	target: 'node',
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		hot: true,
		hotOnly: true,
		port: 5000,
		inline: true,
		open: true
	},
	externals: getExternals(),
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [ path.resolve(__dirname, 'src') ],
				loader: 'babel-loader'
				//options: {
				//  presets: ['@babel/preset-react'],
				//  plugins: ['@babel/plugin-proposal-class-properties']
				//}
			}
		]
	},
	plugins: [ new CleanWebpackPlugin([ 'dist' ]) ]
};
