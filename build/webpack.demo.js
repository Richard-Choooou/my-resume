const path = require('path')
const merge = require('webpack-merge')
const webpackDevConfig = require('./webpack.dev')
const config = require('./config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMarkdownToPdfPlugin = require('webpack-markdown-pdf-plugin')
const through2 = require('through2')


const webpackDemoConfig = merge(webpackDevConfig, {
    entry: path.resolve(config.srcPath, 'index.js'),
    output: {
        filename: 'js/index.js',
        path: path.resolve(config.basePath, './docs'),
        publicPath: 'https://cdn.jsdelivr.net/gh/richard-choooou/my-resume/docs/'
    },

    module: {
        rules: [{
            test: /\.html$/,
            use: [{loader: 'html-loader'}]
        }, ]
    }, 
    
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(config.srcPath, 'index.html'),
            inject: 'body'
        }),
        new WebpackMarkdownToPdfPlugin({
            filename: './pdf/[name].pdf',
            paperBorder: '2cm',
            paperFormat: 'A3',
            preProcessHtml: function() {
                let isBegin = true
                return through2({ objectMode: true, allowHalfOpen: false }, function (chunk, enc, callback) {
                    if (isBegin) {
                        const prefix = Buffer.from('<div class="markdown-body"><img style="position: absolute; right: 20px; top: 20px; width: 80px;" src="https://user-images.githubusercontent.com/23492006/153324006-1ccb9b52-4fb5-4d80-95d0-b2f56617965f.png" />', 'UTF-8')
                        this.push(Buffer.concat([prefix, chunk]))
                        isBegin = false
                    } else {
                        this.push(chunk)
                    }
                    callback()
                }, function(cb) {
                    this.push(Buffer.from('</div>', 'UTF-8'));
                    cb()
                })
            }
        })
    ]
})


module.exports = webpackDemoConfig