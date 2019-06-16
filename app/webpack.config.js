const path = require('path');

module.exports = {
  entry: './src/main.js',
  watch: true,
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ],
  }
};

