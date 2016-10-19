const dest = 'build'
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
      browsers: ['last 3 versions'],
    },
    minify: true,
  },
  template: {
    src: `${src}/templates/**/!(_)*.pug`,
    dest: `${dest}/html`,
    options: { pretty: false },
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
