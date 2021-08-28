const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			'@Components': path.resolve(__dirname, 'src/components/'),
			'@Fonts': path.resolve(__dirname, 'src/fonts/'),
			'@Pages': path.resolve(__dirname, 'src/pages/'),
			'@Source': path.resolve(__dirname, 'src/'),
			'@Styles': path.resolve(__dirname, 'src/scss/')
		}
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	}
}