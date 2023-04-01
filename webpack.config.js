//引入一个包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//webpack 中所有的配置信息都应带写在module.exports中
module.exports = {
    //指定入口文件
    entry:"./src/index.ts",

    //指定输出文件所在目录
    output:{
        //指定打包文件的目录
        path:path.resolve(__dirname,"dist"),
        //打包后的文件
        filename:"bundle.js"
    },

    //指定webpack打包时使用的模块
    module:{
        //指定要加载的规则
        rules:[{
            //指定规则生效的文件
            test:/\.ts$/,
            //要使用的loader
            use:"ts-loader",
            //要排除的文件
            exclude:/node_modules/
        },
        //指定设置less
        {
            test:/\.less$/,
            use:[
                "style-loader",
                "css-loader",
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[[
                                "postcss-preset-env",
                                {
                                    browsers:'last 3 versions'
                                }
                            ]]
                        }
                    }
                },
                "less-loader"
            ]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            // title:'这是我的title'
            template:'./src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode:"production",
}