const gulp = require('gulp'),
  markdown = require('gulp-markdown'),
  rename = require('gulp-rename'),
  htmlmin = require('gulp-htmlmin'),
  config = require('../config').markdown;

gulp.task('markdown',() => {
  return gulp.src(config.src)
    .pipe(markdown())  
    .pipe(rename({ extname: '.html'}))
    .pipe(gulp.dest(config.dest));
});

gulp.task('markdown:production',() => {
  return gulp.src(config.src)
    .pipe(markdown())    
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(rename({ extname: '.html'}))
    .pipe(gulp.dest(config.dest));
});