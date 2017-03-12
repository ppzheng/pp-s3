const path = require('path');
const webpack = require('webpack');
const APP_PATH = path.resolve(__dirname, './index.jsx');



module.exports={
  entry:[
     APP_PATH
  ],
//output.publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换
  output:{
    path: path.resolve(__dirname,'build'),//与APP_PATH一致的文件目录
    filename: 'devClient.bundle.js',
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{ 
          loader:'babel-loader',
        },
       
      },
    ]
  },
}


