var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var Firebase = require("firebase");

var paths = {
	'bower': './bower_components',
	'assets': './assets'
};

var gulp = require('gulp');
var markdown = require('gulp-markdown');
 
gulp.task('default', function () {
	return gulp.src('test.md')
		.pipe(markdown())
		.pipe(gulp.dest(''));
});

gulp.task('styles', function() {
	return gulp.src([
		paths.assets + './styles/app.scss'
	])
	.pipe(sass({
		includePaths: [
			paths.bower + '/foundation/scss'
		]
	}))
	.pipe(concat('app.css'))
	.pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
	gulp.src([
		paths.bower + '/jquery/dist/jquery.js',
		paths.bower + '/foundation/js/foundation.js',
		paths.bower + '/foundation/js/foundation/foundation.alert.js',
		paths.assets + '/scripts/app.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./public/js'));

	return gulp.src(paths.bower + './modernizr/modernizr.js')
		.pipe(gulp.dest('./public/js'));
});


gulp.task('watch', function() {
	gulp.watch(paths.assets + '/styles/**/*.scss', ['styles']);
	gulp.watch(paths.assets + '/scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts']);
