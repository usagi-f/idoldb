const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /.css?$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
