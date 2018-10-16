const gulp = require('gulp'),
  rollup = require('rollup'),
  uglify = require('rollup-plugin-uglify'),
  babel = require('rollup-plugin-babel'),
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

gulp.task('javascript', () => jsBuild({
  entry: config.entry,
  file: config.dest+'/main.js',
  sourcemap: true,
  plugins: [babel()]
}));

gulp.task('javascript:production', () => jsBuild({
  entry: config.entry,
  file: config.dest+'/main.js',
  sourcemap: false,
  plugins: [babel(), uglify()]
})); 