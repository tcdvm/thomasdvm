var gulp = require('gulp'),
  gutil = require('gulp-util'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat');

var jsSources = [
  'components/scripts/min/modernizr.custom.min.js',
  'components/scripts/slippry.js',
  'components/scripts/contact-form.js',
  'components/scripts/scripts.js'
];

var htmlSources = ['builds/development/*.html'];

gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat('scripts.js'))
      .on('error', gutil.log)
    .pipe(gulp.dest('builds/development/assets/js/'))
      .on('error', gutil.log)
    .pipe(connect.reload());
});

// Watch js & html files
gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(htmlSources, ['html']);
});

// Connect
gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

// Html - reload
gulp.task('html', function(){
  gulp.src(htmlSources).
  pipe(connect.reload());
});

// By default run the js, connect, and watch tasks
gulp.task('default', ['js', 'connect', 'watch']);
