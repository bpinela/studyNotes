const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "POKE_API": JSON.stringify("https://pokeapi.co/api/v2/")
    })
  ],
  devServer: {
    publicPath: "/",
    contentBase: path.resolve(__dirname, 'src'),
    host: '0.0.0.0',
    hot: true,
    inline: true,
    port: 9876
  },
}