var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    removeLogs = require('gulp-removelogs'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlreplace = require('gulp-html-replace'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),    
    rimraf = require('rimraf');


// log a message
gulp.task('start', function() {
  return gutil.log('Gulp is running!')
});

// Проверка синтаксиса javascript
gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// compass sass
gulp.task('compass', function() {
  gulp.src('./src/sass/*.scss')
      .pipe(compass({
        config_file: 'src/prod.rb',
        css: 'src/css',
        sass: 'src/sass'
      }))
    .pipe(gulp.dest('build/css'));
});

// Билд и минифицирование css из sass compass
gulp.task('css', function() {
  gulp.src('./src/sass/*.scss')
      .pipe(compass({
        config_file: './src/prod.rb',
        css: 'src/css',
        sass: 'src/sass'
      }))
      // .pipe(sourcemaps.init())
      .pipe(gulp.dest('build/css'))
      .pipe(minify({keepBreaks: false}))
      .pipe(rename({suffix: '.min'}))
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('build/css'))


});

// Минифицирование css
gulp.task('minify-css', function () {
    gulp.src('build/css/*.css')
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css'))
    ;
});

// Удаление console.log из кода
gulp.task('remove-logs', function(){
  gulp.src('src/**/*.js')
    .pipe(removeLogs())
    .pipe(gulp.dest('build/'));
});

// Минифицирование javascript
gulp.task('compress-js', function () {
  gulp.src('build/**/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/'));
});

// Билд js
gulp.task('js', function () {
  gulp.src('src/**/*.js')
      .pipe(removeLogs())
      .pipe(gulp.dest('build/'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('build/'));
});

// Перенос html и замена стилей и скриптов
// на минифицированные
gulp.task('html', function() {
  gulp.src('src/index.html')
    .pipe(htmlreplace({
        'css': 'css/main.min.css',
        'js': 'js/app.min.js'
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('html-min', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'))
});

// Сжатие изображений
gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
        .pipe(gulp.dest('build/')).on('end', cb).on('error', cb);
});

// Перенос шрифтов
gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));
});

// Перенос favicon
gulp.task('ico', function() {
  gulp.src('src/ico/**/*.*')
        .pipe(gulp.dest('build/ico'));
});

// Очитска build
gulp.task('clean', function (cb) {
    rimraf('build', cb);
});

// Сборка проекта
gulp.task('build', [
    'start',
    'jshint',
    'css',
    'js',
    'html',
    'images',
    'fonts',
    'ico'
]);