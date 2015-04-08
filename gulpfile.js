var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha');

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
    gulp.watch(['./lib/**/*', './test/**/*','./app/modules/**/*','./server.js','./gulpfile.js'], ['mocha']);
});
