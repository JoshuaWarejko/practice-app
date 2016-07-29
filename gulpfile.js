'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function() {
	return gulp.src(['www/js/app.js', 'www/js/**/*.js'])
	.pipe(concat('appFinal.js'))
	.pipe(ngAnnotate())
	.pipe(gulp.dest('./www/assets'))
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest('./www/assets'))
	.pipe(livereload());
});

gulp.task('scss', function() {
	return gulp.src('www/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./www/assets'))
	.pipe(minifyCss())
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('./www/assets'))
	.pipe(livereload());
});

gulp.task('server', function() {
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['js*', 'assets*']
	});
});

gulp.task('watch:scss', function() {
	livereload.listen();
	gulp.watch('www/scss/**/*.scss', ['scss']);
});

gulp.task('watch:js', ['js'], function() {
	livereload.listen();
	gulp.watch('www/js/**/*.js', ['js']);
});

gulp.task('default', ['watch:js', 'watch:scss', 'server']);