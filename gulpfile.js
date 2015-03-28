var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    stylus = require('gulp-stylus'),
    // minHtml = require('gulp-minify-html'),
    minJs = require('gulp-jsmin'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha');

gulp.task('concat-css', function() {
  gulp.src([
      './public/css/developer/*.styl'
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
    return gulp.src(['./test/helpers/setup.js','./test/*.js'], { read: false })
        .pipe(mocha(
            {
                reporter: 'spec',
            }))
        .on('error', gutil.log);
});

gulp.task('start',function () {
    nodemon({
        script: 'server.js',
        env: {
            'NODE_ENV': 'development'
        }
    })
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('default',['start'],function(){
    gulp.watch('./public/css/developer/*.styl', ['concat-css']);
    gulp.watch('./public/css/developer/full/**', ['css-min']);
    gulp.watch('./public/js/developer/*.js', ['concat-js']);
    gulp.watch('./public/js/developer/full/**', ['js-min']);
    gulp.watch(['./lib/**', './test/**','./app/modules/**','./server.js','./gulpfile.js'], ['mocha']);
});
