var webpack = require('webpack');
var LessAutoPrefix = require('less-plugin-autoprefix');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'common.js'
});


var serverLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['babel']
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
      'file?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack?optimizationLevel=7&interlaced=false'
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
];

var browserLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['babel']
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
];

module.exports = [{
  name: "server",
  target: 'node',
  entry: {
    app: './assets/js/app.js.jsx',
    routes: "./assets/js/routes.js.jsx"
  },
  output: {
    path: "./dist",
    publicPath: "/assets/",
    filename: "[name].server.js",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: serverLoaders
  },
  lessLoader: {
    lessPlugins: [
      new LessAutoPrefix({browsers: ["last 2 versions"]})
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {
      allChunks: true
    })
  ]
},
{
  name: "browser",
  entry: {
    vendor: ['react', 'react-router', 'reflux'],
    app: "./assets/js/app.js.jsx"
  },
  output: {
    path: "./dist",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: browserLoaders
  },
  lessLoader: {
    lessPlugins: [
      new LessAutoPrefix({browsers: ["last 2 versions"]})
    ]
  },
  plugins: [
    commonsPlugin
  ]
}];