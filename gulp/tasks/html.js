const gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  connect = require('gulp-connect'),
  config = require('../config').html;

gulp.task('html',() => {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload()); 
});

gulp.task('html:production',() => {
  return gulp.src(config.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.dest));
});