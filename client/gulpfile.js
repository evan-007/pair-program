var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var ngmin = require('gulp-ngmin');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var modRewrite = require('connect-modrewrite');
var runSequence = require('run-sequence');


//proxy all requests to /api to localhost:3000 for rails api
gulp.task('connect', function(){
	connect.server({
		root: './app',
		port: 8000,
		middleware: function() {
			return [
				modRewrite([
					'^/api/v1/(.*)$ http://localhost:3000/api/v1/$1 [P]'
				])
			];
		}
	});
});

gulp.task('clean', function(){
	return gulp.src('build', {read: false})
	.pipe(clean());
});

gulp.task('format-js', function(){
	return gulp.src(['app/*.js', 'app/**/*.js'])
	.pipe(ngmin())
	.pipe(gulp.dest('app'));
});

gulp.task('usemin', function() {
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css: [minifyCss(), 'concat', rev()],
		js: [uglify(), rev()]
	}))
	.pipe(gulp.dest('../public/'));
});

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('../public/'));
});

gulp.task('build', function() {
  runSequence('clean',
    ['copy-html-files', 'usemin']);
});