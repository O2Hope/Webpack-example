const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/hello.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: ''
    },
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname, "./dist"),
        index: 'index.html',
        port: 9000
    },
    module:{
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-laoder',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlwebpackPlugin({
            title: 'Training with webpack',
            template: 'src/page-template.hbs',
            meta: {
                description: 'Introduction to webpack'
            }
            //if we need change the filename: filename: ''
        })
    ]
}