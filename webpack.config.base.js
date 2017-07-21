const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getConfig = require('./webpackConfig/webpack.config.all.js');


function getWebpackConfig(dev, options) {
    let template = dev ? path.resolve('app/index_dev.html') : path.resolve('app/index.html');

    return merge(getConfig("starterKit", dev, {
            rx: ['rxjs',],
            react: ['react', 'react-dom', 'react-fastclick', 'react-router', 'redux', 'react-redux', 'redux-logger', 'react-router-redux', 'redux-observable',],
            lib: ['style-loader/addStyles', 'styled-components',],
            entry1: path.resolve('app/index.js'),
            // entry2: path.resolve('src/entry2.js')
        }, [
            new HtmlWebpackPlugin({
                filename: `index.html`,
                template,
                chunks: ['manifest', 'rx', 'react', 'lib', 'entry1']
            }),
            // new HtmlWebpackPlugin({
            //     filename: 'entry2.html',
            //     template,
            //     chunks: ['manifest', 'libs', 'vendor', 'entry2']
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['lib', 'react', 'rx', 'manifest'],
            }),
        ], options),
        {
            devServer: {
                disableHostCheck: true,
                historyApiFallback: true,
                // proxy: {
                //     '/path/remote/api/': {
                //         target: 'https://remoteServer.com',
                //         secure: true,
                //     },
                // }
            }
        });
}
module.exports = getWebpackConfig;