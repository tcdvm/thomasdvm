var gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat');

var jsSources = [
  'components/scripts/min/modernizr.custom.min.js',
  'components/scripts/min/bootstrap-hover-dropdown.min.js',
  'components/scripts/min/slippry.min.js',
  'components/scripts/min/contact-form.min.js',
  'components/scripts/min/scripts.min.js'
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