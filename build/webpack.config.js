const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('../config');
function assetsPath(_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: path.join(__dirname,'../app/main.js'), 
    output: {
        path:  config.dev.assetsRoot,
        filename: 'bundle.js',
        publicPath: process.env.NODE_ENV === 'production'
                    ? config.build.assetsPublicPath
                    : config.dev.assetsPublicPath,   
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    devtool: '#eval-source-map',
    module: {
        rules: [
             {
                test: /\.vue$/,
                loader: 'vue-loader', 
                exclude:path.join(__dirname,'../node_modules/'),
                options:{
                    loaders:{
                        scss:'style-loader!css-loader!postcss-loader'
                    }
                }
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: 'css-loader',
                        options: {
                            // modules: true,  // true css模块化 命名空间
                            modules: false    // false 按原来的样式
                        }
                    },{
                        loader: 'postcss-loader'
                    }
                ]
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public'],{
            root: path.join(__dirname,"../"),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname ,"../index.html") //new 一个这个插件的实例，并传入相关的参数
        })
    ]
}