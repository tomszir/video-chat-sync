const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8000,
    hot: true,
    open: false,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.join(__dirname),
      '@': path.join(__dirname, 'src'),
      'styles': path.join(__dirname, 'src/styles'),
      'components': path.join(__dirname, 'src/components')
    },
    extensions: ['.js', '.scss', '.vue']
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      favicon: path.join(__dirname, 'favicon.png'),
      template: path.join(__dirname, 'index.html')
    })
  ]
}
