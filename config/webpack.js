
var path = require('path');

module.exports = {
  build: {
    entry: './src/index.js',
    output: {
      path: 'dist/',
      filename: 'todo-app.js',
      libraryTarget: 'amd'
    },
    module: {
      loaders: [
        {
          loader: 'babel',
          test: /\.jsx?$/,
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
        }
      ]
    },
    externals: [
      'react',
      'react-dom',
      'bluebird',
      'superagent'
    ],
    devtool: 'source-map',
    watch: true
  }
};
