/** @format */

const _path = require("path")
const webpack = require("webpack")
const config = {
	entry: "./src/index",
	mode: "production",
	resolve: {
		modules: [_path.resolve(__dirname, "./src"), "node_modules"],
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	externals: {
		react: "react",
		"react-dom": "react-dom",
		"email-misspelled": "email-misspelled",
		"styled-components": "styled-components",
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(t|j)sx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
						plugins: [
							"babel-plugin-styled-components",
							"@babel/plugin-proposal-object-rest-spread",
							"@babel/plugin-proposal-class-properties",
							"@babel/plugin-proposal-optional-chaining",
						],
					},
				},
			},
		],
	},
}
const configWeb = {
	...config,
	target: "web",
	output: {
		path: _path.resolve(__dirname, "lib"),
		filename: "index.js",
		libraryTarget: "umd",
	},
}
const configNode = {
	...config,
	target: "node",
	output: {
		path: _path.resolve(__dirname, "lib"),
		filename: "index.node.js",
		libraryTarget: "umd",
	},
}
module.exports = [configWeb, configNode]
