const path = require('path');

module.exports = [
	// {
    //     // Pack Server
	// 	entry: path.join(__dirname, 'src', 'server', 'app', 'index.js'),
	// 	output: {
	// 		path: path.join(__dirname, 'dist'),
	// 		filename: 'bundle.js',
	// 	},
	// },
	{
        // Pack Client
		entry: path.join(__dirname, 'src', 'client', 'app', 'index.js'),
		output: {
			path: path.join(__dirname, 'dist', 'client'),
			filename: 'bundle.js',
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					include: path.join(__dirname, 'src', 'client', 'app'),
					loader: 'babel-loader',
				},
				{
					test: /\.jsx$/,
					include: path.join(__dirname, 'src', 'client', 'app'),
					loader: 'babel-loader',
				},
			],
		},
	},
];


