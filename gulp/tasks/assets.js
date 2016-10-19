const gulp = require('gulp')
const minimist = require('minimist')

const env = minimist(process.argv.slice(2)).env
let config = require('../configs/development').assets
if (env === 'production') config = require('../configs/production').assets

gulp.task('assets', () => {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
})
