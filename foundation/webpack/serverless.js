const Webpack = require ('webpack');
const base = './src/microservices/';


module.exports = {
	entry:
		require ('fs')
			.readdirSync (base)
			.map ((i) =>
				base + i + '/handler.js'
			),
	
	target: 'node',

	devtool: 'source-map',

	plugins: [
		new Webpack.optimize.DedupePlugin,
		new Webpack.optimize.OccurenceOrderPlugin,
		new Webpack.optimize.UglifyJsPlugin ({
			minimize: true
		})
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
