const path = require('path')
const config  = require('./config')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ENV = process.env.NODE_ENV

path.resolve(process.cwd(), '../fonts', 'fonts.conf')
path.resolve(process.cwd(), '../fonts', 'pingfang.ttf')

module.exports = {
    entry: path.resolve(config.basePath, 'src/index.js'),

    resolve: {
        extensions: [".js", ".json"],
        modules: ['node_modules'],
        alias: {
            '@': config.basePath,
            '@src': config.srcPath,
            '@examples': config.examplesPath
        }
    },  
    
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.(sc|c)ss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8920,
                    fallback: 'file-loader',
                    outputPath: './images'
                }
            }]
        }, {
            test:/\.(eot|woff2|woff|ttf|svg)/,
            use:[{
                loader:'url-loader',
                options:{
                    name:'[name][hash:5].min.[ext]',
                    limit:5000,
                    publicPath:'',
                    outputPath:'dist/',
                    useRelativePath:true
                }
            }]
        }, {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                }, {
                    loader: "markdown-loader",
                    options: {
                        /* your options here */
                    }
                }
            ]
        }]
    },
    plugins: [
        new ProgressBarPlugin()
    ]
}