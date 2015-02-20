module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias : {
			"kendo": "kendo-ui-webpack"
		}
	},
	entry: './index.js',
	output: {
		path: './build/js',
		publicPath: '/public/js/',
		filename: '[name].js'
	},
	module: {
		loaders: [
		{ test: /\.css$/, loader: 'style!css' },
		{ test: /\.jsx?/, loader: 'jsx-loader' },
		{ test: /\.json$/, loader: 'json-loader'},
		{ test: /kendo\-ui\-core[\///].*\.js$/, loader: "imports?jQuery=jquery" }
		]
	},
	stats: {
		colors: true
	},
	// devtool: 'source-map',
	// watch: true,
	// keepalive: true
}
