const Webpack = require ('webpack');

module.exports = {
	entry: './src/microservices/functions.js',

	target: 'node',

	devtool: 'source-map',

	plugins: [
		new Webpack.optimize.DedupePlugin,
		new Webpack.optimize.OccurenceOrderPlugin
		// new Webpack.optimize.UglifyJsPlugin ({
		// 	minimize: true
		// })
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: [
					'babel-loader'
				]
			}
		]
	}
};
