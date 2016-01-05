const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

gulp.task('default', function () {
  gulp.src('src/*.js')
    .pipe(
      babel({
        presets: ['es2015','react']
      })
    )
    .pipe(browserify())
    .pipe(gulp.dest('build'));
  return gulp.src('src/*.html').pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
 gulp.watch('src/**/*', ['default']);
});
