const gulp = require('gulp')
const plumber = require('gulp-plumber')
const minimist = require('minimist')
const webpack = require('webpack-stream')

const env = minimist(process.argv.slice(2)).env
let config = require('../configs/development')
if (env === 'production') config = require('../configs/production')

gulp.task('script', () => {
  gulp.src(config.script.src)
    .pipe(plumber())
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.script.dest))
})
