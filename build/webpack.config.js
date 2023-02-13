// @ts-check
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const dist = path.resolve(__dirname, '..', 'dist');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    entry: './src/ui/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/preset-typescript', 'solid'],
                },
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:8]',
                            },
                            importLoaders: 1,
                            url: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: dist,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/ui/index.html',
        }),
        new ForkTsCheckerWebpackPlugin({
            async: true,
            // devServer: true,
        }),
        new ErrorOverlayPlugin(),
    ],

    stats: 'minimal',
    devtool: 'cheap-module-source-map',
    devServer: {
        liveReload: true,
        port: 8000,
        open: false,
        static: dist,
        historyApiFallback: true,
    },
};
