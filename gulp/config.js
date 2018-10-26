const src = 'src',
  srcAssets = 'src/assets',
  build = 'build',
  buildAssets = 'build/assets';

module.exports = {
  src, build,
  html: {
    src: `${src}/html/**/*.html`,
    dest: `${build}/html/`
  },
  markdown: {
    src: `${src}/markdown/**/*.md`,
    dest: `${build}/html/`
  },
  css: {
    src: `${srcAssets}/style/**/*.css`,
    dest: `${buildAssets}/style/`
  },
  less: {
    src: `${srcAssets}/style/**/*.less`,
    dest: `${buildAssets}/style/`
  },
  sass: {
    src: `${srcAssets}/style/**/*.scss`,
    dest: `${buildAssets}/style/`
  },
  javascript: {
    entry: `${srcAssets}/script/main.js`,
    dest: `${buildAssets}/script/`
  },
  watch: {
    html: `${src}/html/**/*.html`,
    markdown: `${src}/markdown/**/*.md`,
    css:  `${srcAssets}/style/**/*.css`,
    less: `${srcAssets}/style/**/*.less`,
    sass: `${srcAssets}/style/**/*.scss`,
    // typescript: `${srcAssets}/script/**/*.ts`,
    javascript: `${srcAssets}/script/**/*.{js, ejs}`
  }
};