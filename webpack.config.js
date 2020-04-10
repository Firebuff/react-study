const path = require('path')

//启用热更新 引入webpack
const webpack = require('webpack')

// 启用热更新 引入webpack
// new webpack.HotModuleReplacementPlugin()


const HtmlWebapckPlugin = require('html-webpack-plugin') 

const htmlPlugin = new HtmlWebapckPlugin({
	template: path.join(__dirname,'./src/index.html'),
	filename: 'index.html'
})




module.exports = {
	mode: 'development', //有两个模式开发模式和生产模式： development 和 production
	//在webpack 4.x 中默认的入口文件是 src -> index.js
	plugins: [
		htmlPlugin
	],
	module: { 
		rules: [
			{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },

			//css-loader?modules: 对普通的css开启模块化，但是模块化只对 class类选择器，id选择器生效，标签选择器不会生效
			//  css-loader?modules&localIdentName=[name]_[local]_[hash:5] 这样配置是私有类名 在页面标签上有更好的可读性

			// { test:/\.css$/, use: ['style-loader','css-loader?modules'] },

			// { test:/\.css$/, use: [ 'style-loader','css-loader?modules&localIdentName=[name]_[local]_[hash:5]' ] },
			{ test:/\.css$/, use: [ 'style-loader','css-loader' ] },
			{ test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' },

			// 对less scss 开启

			{ test: /\.scss$/, use: ['style-loader','css-loader?modules&localIdentName=[name]_[local]_[hash:5]','sass-loader'] }
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],//不写文件后缀，自动给你补全，所以import引入js jsx json文件时，可以不写文件名后缀
		alias: {
			'@': path.join(__dirname, './src') //这样@ 就相当于 '/src', 根目录下的src这一层路径
		}
	}
	
}

// export default {}