const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: ['babel-polyfill', SRC_DIR + '/index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader'
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
};