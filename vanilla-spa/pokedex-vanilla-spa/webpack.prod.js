const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  },
}