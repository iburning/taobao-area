// const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production', //'development',
  // target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'taobao-area.js',
    library: 'taobaoArea',
    // libraryExport: 'default',
    // libraryTarget: 'umd'
  },

  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      }
    }]
  }
}
