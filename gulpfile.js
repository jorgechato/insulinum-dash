var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    stylus = require('gulp-stylus'),
    // minHtml = require('gulp-minify-html'),
    minJs = require('gulp-jsmin');

gulp.task('concat-css', function() {
  gulp.src([
      './css/developer/*.styl'
    ])
    .pipe(concat('base.styl'))
    .pipe(gulp.dest('./css/developer/'));
});

gulp.task('concat-js', function() {
  gulp.src([
      './js/developer/*.js'
    ])
    .pipe(concat('base.js'))
    .pipe(gulp.dest('./js/developer/'));
});

gulp.task('css-min',function(){
    gulp.src('./css/developer/base.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/production'));
});

gulp.task('js-min',function(){
    gulp.src('./js/developer/base.js')
        .pipe(minJs())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js/production'));
});

gulp.task('default', ['concat-css','concat-js','css-min','js-min']);
