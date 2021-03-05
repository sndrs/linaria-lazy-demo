const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production',
						},
					},
				],
			},

			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@linaria'],
						},
					},
					{
						loader: '@linaria/webpack-loader',
						options: {
							sourceMap: process.env.NODE_ENV !== 'production',
						},
					},
					{ loader: 'ts-loader' },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles-[contenthash].css',
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		}),
	],
}
