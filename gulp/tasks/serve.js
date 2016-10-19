const gulp = require('gulp')
const minimist = require('minimist')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')

const env = minimist(process.argv.slice(2)).env
let config = require('../configs/development')
if (env === 'production') config = require('../configs/production')

gulp.task('nodemon', (cb) => {
  let called = false
  return nodemon({
    script: './server/app.js',
    watch: ['./server/'],
    env: {
      TZ: 'UTC',
      NODE_ENV: 'development',
    },
  })
  .on('start', () => {
    if (!called) cb()
    called = true
  })
  .on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false })
    }, 3000)
  })
})

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 3333,
    files: ['./www/'],
  })
})

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(config.template.src, ['template'])
  gulp.watch(config.script.src, ['script'])
  gulp.watch(config.style.src, ['style'])
  gulp.watch(config.assets.src, ['assets'])
})
