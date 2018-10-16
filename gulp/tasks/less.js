const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano  = require('cssnano'),
  rename = require('gulp-rename'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  config = require('../config').less;

const devProcessors = [autoprefixer];
const prodProcessors = [...devProcessors, cssnano];

gulp.task('less',() => {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())  
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(postcss(devProcessors))
    .pipe(gulp.dest(config.dest));
});

gulp.task('less:production',() => {
  return gulp.src(config.src)
    .pipe(less())
    .pipe(postcss(prodProcessors))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest));
});