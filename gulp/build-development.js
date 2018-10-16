const gulp = require('gulp');

const tasks = [
  'css',
  'sass',
  'less',
  'javascript',
  //'typescript',
  'markdown',
  'html'
];

gulp.task('build', tasks);