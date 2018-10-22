const gulp = require('gulp'),
  rollup = require('rollup'),
  { uglify } = require('rollup-plugin-uglify'),
  babel = require('rollup-plugin-babel'),
  resolve = require('rollup-plugin-node-resolve'),
  cjs = require('rollup-plugin-commonjs'),
  connect = require('gulp-connect'),
  config = require('../config').javascript;

const jsBuild = async ({entry, plugins = null, sourcemap = true, file}) => {
  const bundle = await rollup.rollup({
    input: entry,
    plugins
  });

  await bundle.write({
    file,
    format: 'umd',
    sourcemap
  });
};

gulp.task('javascript', () => {
  jsBuild({
    entry: config.entry,
    file: config.dest+'/main.js',
    sourcemap: true,
    plugins: [resolve(), cjs(), babel()]
  });
  gulp.src(config.entry).pipe(connect.reload());
});

gulp.task('javascript:production', () => jsBuild({
  entry: config.entry,
  file: config.dest+'/main.js',
  sourcemap: false,
  plugins: [resolve(), cjs(), babel(), uglify()]
})); 