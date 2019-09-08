const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello': './src/hello.js',
        'lion': './src/lion.js'
    },
    output: {
        filename: '[name].bundle.js',
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
            filename: 'hello.html',
            chunks: ['hello'],
            title: 'Training with webpack',
            template: 'src/page-template.hbs',
            meta: {
                description: 'Introduction to webpack - hello'
            }
            //if we need change the filename: filename: ''
        }),
        new HtmlwebpackPlugin({
            filename: 'lion.html',
            chunks: ['lion'],
            title: 'Training with webpack',
            template: 'src/page-template.hbs',
            meta: {
                description: 'Introduction to webpack - lion'
            }
            //if we need change the filename: filename: ''
        })
    ]
}