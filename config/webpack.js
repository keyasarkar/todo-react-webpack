
var path = require('path');

module.exports = {
  build: {
    entry: './src/index.js',
    output: {
      path: 'dist/',
      filename: 'bundle.js',
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
        }
      ]
    }
  }
};
