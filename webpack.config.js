var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var autoprefixer = require('autoprefixer');

const extractCssLoaders = [{
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[local]--[hash:base64:6]',
        minimize: true,
    },
},{
    loader: 'postcss-loader',
    options: {
        plugins: [
            autoprefixer({
                remove: false
            }),
        ],
    },
},{
    loader: 'less-loader',
}];

/*DeprecationWarning: loaderUtils.parseQuery() received a 
non-string value which can be problematic*/
process.traceDeprecation = true
process.noDeprecation = true

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'babel-polyfill',
            "webpack-dev-server/client?http://127.0.0.1:3000/",
            "webpack/hot/only-dev-server",
            "./dev/js/index.js"
        ],
        react: ['react', 'react-dom'],
        redux: ['redux', 'react-redux'],
    },
    output: {
        path: path.join(__dirname, 'src/'),
        filename: './js/[name].[chunkhash:8].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/, 
                use: ExtractTextPlugin.extract({ use: extractCssLoaders, fallback: 'style-loader' }),
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new ExtractTextPlugin({
            filename: './style/[name].css?module&=[chunkhash:8]',
            allChunks: true,
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['react', 'redux'],
            filename: './js/com/[name].js', // 公共模块文件名
            minChunks: ({resource}) => {
                resource &&
                resource.indexOf('node_modules') &&
                resource.match(/.js$/)
            }   
        }),
        new HtmlwebpackPlugin({
            title:'demo',
            template: './dev/index.html', // 源模板文件
            filename: 'index.html', 
            showErrors: true,
            inject: 'body',
            js: [
                "./src/js/com/react.js",
                "./src/js/com/redux.js",
                "./src/js/app.bundle.js"]
        }),
    ],
}