const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    flux: './src/flux/main.js',
    mvp: './src/mvp/main.js',
    mvc: './src/mvc/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
    filename: '[name]/script.js',
  },
  mode: 'development',
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          keep_classnames: true,
        },
      },
    }),
  ];
} else {
  config.devtool = 'source-map';
}

module.exports = config;
