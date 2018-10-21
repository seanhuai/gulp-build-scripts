const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano  = require('cssnano'),
  rename = require('gulp-rename'),
  sass = require('gulp-ruby-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect'),
  config = require('../config').sass;
  
const devProcessors = [autoprefixer];
const prodProcessors = [...devProcessors, cssnano];

gulp.task('sass',() => {
  return sass(config.src, { noCache: true, sourcemap: true})
    .pipe(sourcemaps.write())
    .pipe(postcss(devProcessors))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
}); 

gulp.task('sass:production',() => {
  return sass(config.src, {noCache: true})
    .pipe(postcss(prodProcessors))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest));
}); 