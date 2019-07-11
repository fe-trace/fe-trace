const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    mode: "development",
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 提取 node_modules 中代码
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                },
                // 提取公用代码
                commons: {
                    chunks: "initial",
                    name: 'commons',
                    minSize: 0,
                    // 至少为两个 chunks 的公用代码
                    minChunks: 2
                }
            }
        },
        runtimeChunk: { 
            name: 'manifest'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.ejs',
            filename: 'index.html'
        })
    ]
};