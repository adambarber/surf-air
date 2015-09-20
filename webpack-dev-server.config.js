var path = require("path");
var webpack = require('webpack');
var LessAutoPrefix = require('less-plugin-autoprefix')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./assets/js/app.js.jsx"
  ],
  output: {
    path: path.resolve(__dirname, "assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel', 'react-hot']
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /.(svg)?v=(.*)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
      },
      {
        test: /.(woff|ttf|eot|mp4|webm)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
      }
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessAutoPrefix({browsers: ["last 2 versions"]})
    ]
  },
  plugins: [commonsPlugin],
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    // proxy: {
    //  "*": "http://localhost:3000"
    // }
  }
};