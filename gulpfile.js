const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')
const config = require('./webpack.config')

// WebpackによるJavascriptへのビルド
gulp.task('build', () => {
  gulp.src('./index.jsx')
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(gulp.dest('./build'))
})

// ローカルサーバの起動
gulp.task('nodemon', cb => {
  var called = false;
  return nodemon({
    script: './server.js',
    watch: ['./server.js'],
    env: {
      TZ: 'UTC',
      NODE_ENV: 'development'
    }
  })
  // サーバ起動時の処理
  .on('start', () => {
    if(!called) cb()
    called = true
  })
  // サーバ再起動時の処理
  .on('restart', () => {
    setTimeout( () => {
      browserSync.reload({ stream: false })
    }, 100)
  })
})

// オートリロード
gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init({
    proxy: "http://localhost:3000",
    port: 3333,
    files: ['./build', './index.html']
  })
})

// ファイル監視
// ファイルに更新があったらビルドしてブラウザをリロードする
gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('./scripts/**/*', ['build'])
})

// gulpコマンドで起動したときのデフォルトタスク
gulp.task('default', ['build', 'watch'])
