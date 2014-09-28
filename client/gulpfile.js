var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var ngAnnotate = require('gulp-ng-annotate');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var modRewrite = require('connect-modrewrite');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var shell = require('gulp-shell');

var paths ={

}

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

gulp.task('rails-start', shell.task([
  'rails s -d'
]));

gulp.task('rails-kill', shell.task([
  "kill `cat ../tmp/pids/server.pid`"
]));

gulp.task('db-setup', shell.task([
  'bundle exec rake db:setup'
]));

gulp.task('protractor', shell.task([
  'protractor protractorConfig.js'
]));

gulp.task('clean', function(){
	return gulp.src('../public/assets/', {read: false})
	.pipe(clean({force: true}));
});

gulp.task('format-js', function(){
	return gulp.src(['../public/assets/*.js'])
	.pipe(ngAnnotate())
	.pipe(gulp.dest('app'));
});

gulp.task('js', function(){
  return gulp.src(['!./app/bower_components/**/*', '!./app/core/combined.js',
   '!./app/**/*Spec.js', '!./app/test/**', './app/core/app.js', './app/**/*.js'])
  .pipe(concat('combined.js'))
  .pipe(gulp.dest('./app/core/'));
});

gulp.task('usemin', function() {
	gulp.src('./app/index.html')
	.pipe(usemin({
		css: [minifyCss(), 'concat', rev()],
		js: [ngAnnotate(), uglify(), rev()]
	}))
	.pipe(gulp.dest('../public/'));
});

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html',
	'!./app/bower_components/**/*.html'],
	 {base: './app'})
    .pipe(gulp.dest('../public/'));
});

gulp.task('build', function() {
  runSequence('clean',
    ['copy-html-files', 'usemin']);
});

gulp.task('watch', function(){
	gulp.watch('./app/**/*.js', ['js'])
});

gulp.task('e2e-test', function(){
  // start servers, setup test db,
  // run e2e tests,
  // reset db, kill rails daemon
	//NOTE, this doesn't actually work for some reason
  runSequence('build','rails-start', 'db-setup', 'protractor',
              'rails-kill')
})

gulp.task('default', ['connect', 'js', 'watch']);
