var gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat');

var jsSources = [
  'components/scripts/min/modernizr.custom.min.js',
  'components/scripts/min/bootstrap-hover-dropdown.min.js',
  'components/scripts/slippry.js',
  'components/scripts/contact-form.js',
  'components/scripts/scripts.js'
];

gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat('scripts.js'))
      .on('error', gutil.log)
    .pipe(gulp.dest('builds/development/assets/js/'))
      .on('error', gutil.log);
});

gulp.task('log', function(){
  gutil.log("Workflows are awesome");
});

gulp.task('default', ['js']);

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
});