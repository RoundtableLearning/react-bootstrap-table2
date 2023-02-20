import webpack from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";

module.exports = {
	mode: "none",
	devtool: "source-map",
	externals: [
		{
			react: {
				root: "React",
				commonjs2: "react",
				commonjs: "react",
				amd: "react",
			},
		},
		{
			"react-dom": {
				root: "ReactDOM",
				commonjs2: "react-dom",
				commonjs: "react-dom",
				amd: "react-dom",
			},
		},
	],
	module: {
		rules: [
			{
				enforce: "pre",
				exclude: /node_modules/,
				test: /\.js?$/,
				loader: "babel-loader",
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
				},
			},
		],
	},
	plugins: [
		new ESLintPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		new webpack.SourceMapDevToolPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
	],
};
