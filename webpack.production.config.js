const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello': './src/hello.js',
        'lion': './src/lion.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: ''
    },
    mode: 'production',
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
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlwebpackPlugin({
            title: 'Training with webpack',
            template: 'src/index.hbs',
            meta: {
                description: 'Introduction to webpack'
            }
            //if we need change the filename: filename: ''
        })
    ]
}