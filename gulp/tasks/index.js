const gulp = require('gulp')

gulp.task('default', [
  'template',
  'style',
  'script',
  'assets',
])

gulp.task('run', [
  'template',
  'style',
  'script',
  'assets',
  'watch',
])

gulp.task('build', [
  'template',
  'style',
  'script',
  'assets',
])
