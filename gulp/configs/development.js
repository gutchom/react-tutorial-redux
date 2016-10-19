const dest = 'www'
const src = 'src'

const webpack = require('webpack')

module.exports = {
  script: {
    src: `${src}/scripts/**/*`,
    dest: `${dest}/assets/js`,
  },
  style: {
    src: `${src}/styles/**/!(_)*.scss`,
    dest: `${dest}/assets/css`,
    autoprefixer: {
      browsers: ['last 1 versions'],
    },
    minify: false,
  },
  template: {
    src: `${src}/templates/**/!(_)*.pug`,
    dest: `${dest}/html`,
    options: { pretty: true },
  },
  assets: {
    src: `${src}/assets/**/*`,
    dest: `${dest}/assets`,
  },
  webpack: {
    entry: `./${src}/scripts/index.jsx`,
    output: {
      filename: 'app.js',
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules'],
    },
    devtool: 'source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      ],
    },
  },
}
