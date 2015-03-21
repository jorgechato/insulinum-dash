var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    stylus = require('gulp-stylus'),
    // minHtml = require('gulp-minify-html'),
    minJs = require('gulp-jsmin'),
    mocha = require('gulp-mocha');

gulp.task('concat-css', function() {
  gulp.src([
      './css/developer/*.styl'
    ])
    .pipe(concat('base.styl'))
    .pipe(gulp.dest('./public/css/developer/full/'));
});

gulp.task('concat-js', function() {
  gulp.src([
      './public/js/developer/*.js'
    ])
    .pipe(concat('base.js'))
    .pipe(gulp.dest('./public/js/developer/full/'));
});

gulp.task('css-min',function(){
    gulp.src('./public/css/developer/full/base.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/css/production'));
});

gulp.task('js-min',function(){
    gulp.src('./js/developer/full/base.js')
        .pipe(minJs())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/js/production'));
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({reporter: 'spec'}))
        .on('error', gutil.log);
});

gulp.task('default',function(){
    gulp.watch('./public/css/developer/*.styl', ['concat-css']);
    gulp.watch('./public/css/developer/full/*.styl', ['css-min']);
    gulp.watch('./public/js/developer/*.js', ['concat-js']);
    gulp.watch('./public/js/developer/full/*.js', ['js-min']);
    gulp.watch(['lib/**', 'test/**'], ['mocha']);
});
