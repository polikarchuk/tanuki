"use strict";
var gulp = require("gulp"),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create();


gulp.task('less', function() {
    return gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
gulp.task('default', function () {
    gulp.src('src/css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))

});
gulp.task('prefix', function () {
    gulp.src('src/less/styles.less')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css/styles.css'))
});






/* fileinclude tasks */
gulp.task('fileinclude', function() {
    gulp.src(['./src/templates/*.html'])
        .pipe(fileinclude())
        .pipe(gulp.dest('./src/'));
});

gulp.task('serve', ['less','fileinclude'], function() {
    browserSync.init({
        server: "../tanuki/src"
    });
    gulp.watch("src/templates/*.html", ['fileinclude']);
    gulp.watch("src/less/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('less:watch', function () {
    gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default', ['serve']);