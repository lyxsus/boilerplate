import Webpack from 'webpack';
import path from 'path';


export default {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/browser/index.js'
	],

	target: 'web',

	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	devtool: 'source-map',

	plugins: [
		new Webpack.HotModuleReplacementPlugin,
		// new Webpack.optimize.DedupePlugin,
		// new Webpack.optimize.OccurenceOrderPlugin
	],

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: [
					'babel-loader'
				]
			}
		]
	}
};
