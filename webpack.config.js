var path = require("path");

module.exports = {
    entry: {
        form: './src/index.js',
    },
    output: {
        filename: './build/bundle.js',
    },
	resolve: {
        root: [path.join(__dirname, "/src/")]
    },
	module: {
		loaders: [
			{ test: /\.html$/, loader: "html" },
			{ test: /\.md$/, loader: "html!markdown" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}
};