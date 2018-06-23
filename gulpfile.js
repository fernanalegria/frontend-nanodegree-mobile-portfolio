'use strict';

var csso = require('gulp-csso');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./css/*.css')
        .pipe(csso())
		.pipe(rename({
		    suffix: '.min'
		}))
        .pipe(gulp.dest('./css_min'));
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
		.pipe(rename({
		    suffix: '.min'
		}))
        .pipe(gulp.dest('./js_min'));
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
    return gulp.src('./index_unmin.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
		.pipe(rename('./index.html'))
        .pipe(gulp.dest('./'));
});

// Gulp task to minify all files
gulp.task('default', gulp.parallel(
    'styles',
    'scripts',
    'pages'
));