/**
 * Created by Chad on 2017/7/24.
 */
const merge = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function getConfig(publicPath, dev, entry, htmlPlugins, options) {
    return merge(getBaseConfig(publicPath, dev, entry, htmlPlugins), dev ? getDevConfig(options) : getProdConfig(options));
}

function getBaseConfig(publicPath, dev, entry, plugins, options) {
    return {
        entry,
        output: {
            path: path.resolve(__dirname, `../build/${publicPath}`),
            publicPath: `/${publicPath}/`,
            filename: dev ? '[name].js' : '[name].[chunkhash:8].js',
            chunkFilename: dev ? '[name].js' : '[name].[chunkhash:8].js'
        },
        resolve: {
            alias: {'babel-runtime/core-js/promise': 'es6-promise'}
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                        {loader: "postcss-loader"}
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ],
                },
                // {
                //     test: /\.less$/,
                //     loader: 'styles!css!less'
                // },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=25000'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin(
                {
                    'process.env': {'NODE_ENV': dev ? '"dev"' : '"production"'},
                    '__DEVTOOLS__': !!dev
                }
            ),
            dev ? (
                    new webpack.LoaderOptionsPlugin({
                        options: {context: __dirname},
                        debug: true
                    })) : (
                    new webpack.LoaderOptionsPlugin({
                        options: {context: __dirname},
                        minimize: true
                    })),
            ...plugins,
            // new HtmlWebpackPlugin({
            //     filename: 'entry1.html',
            //     template,
            //     chunks: ['manifest', 'libs', 'vendor', 'entry1']
            // }),
            // new HtmlWebpackPlugin({
            //     filename: 'entry2.html',
            //     template,
            //     chunks: ['manifest', 'libs', 'vendor', 'entry2']
            // }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     names: ['vendor', 'libs', 'manifest'],
            // }),
        ]
    }
}

function getDevConfig(options) {
    return {
        cache: true,
        devtool: '#source-map',
        performance: {hints: false},
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }
}

function getProdConfig(options) {
    const plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            output: {comments: false}
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    ];
    if (options && options.analyzeBundle) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    return {plugins}
}

module.exports = getConfig;

