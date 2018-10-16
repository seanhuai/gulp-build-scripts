const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  atImport = require('postcss-import'),
  rename = require('gulp-rename'),
  cssnano  = require('cssnano'),
  config = require('../config').css;

const devProcessors = [autoprefixer, atImport];
const prodProcessors = [...devProcessors, cssnano];

gulp.task('css',() => {
  return gulp.src(config.src)
    .pipe(postcss(devProcessors))
    .pipe(gulp.dest(config.dest));
});

gulp.task('css:production',() => {
  return gulp.src(config.src)
    .pipe(postcss(prodProcessors))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest));
});