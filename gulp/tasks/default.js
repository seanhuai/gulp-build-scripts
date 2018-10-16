const gulp = require('gulp');
const config = require('../config').watch;

gulp.task('watch', ['build'], () => {
  gulp.watch(config.html, ['html']);
  gulp.watch(config.css, ['css']);
  gulp.watch(config.less, ['less']);
  gulp.watch(config.sass, ['sass']);  
  gulp.watch(config.javascript, ['javascript']);
  gulp.watch(config.markdown, ['markdown']);
});
gulp.task('default', ['watch']);