const path = require('path');
const { AutomaticPrefetchPlugin } = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    index: {
      import: './src/index.js'
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  devServer: {
    compress: true,
    allowedHosts: 'auto',
    static: './public',

    headers: {
      'Cache-Control': 'max-age=90',
    },
    port: 8080,
  },
};