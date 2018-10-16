const gulp = require('gulp');
const fs = require('fs');
const config = require('./config');

const tasks = [
  'css:production',
  'sass:production',
  'less:production',
  'javascript:production',
  //'typescript:production',
  'markdown:production',
  'html:production'
];

const deleteFolderRecursive = path => {
  if(fs.existsSync(path)) {
    fs.readdirSync(path).forEach(file => {
      const curPath = `${path}/${file}`;
      if(fs.statSync(curPath).isDirectory()) return deleteFolderRecursive(curPath);
      else fs.unlinkSync(curPath);
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive(config.build);
gulp.task('build:production', tasks);
