var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./project/css/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./project/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./project/css/**/*.scss', ['sass']);
});