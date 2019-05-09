var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var shell = require('gulp-shell');


//Styles task
gulp.task('styles', function() {
  console.log("In styles task");
  //Generate the styles & styleguide
  gulp.src('assets/styles/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('assets/styles/'))
      .pipe(shell(['styleguide']))
      .pipe(browserSync.reload({
          stream: true
      }));
//U-M
// gulp.src('assets/themes/new-normal/styles/styles.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('assets/themes/new-normal/styles/'))
//     .pipe(browserSync.reload({
//         stream: true
//     }));

});

//Browsersync task
gulp.task('browserSync', function() {
   browserSync.init({
      server: {

      },
   })
});

// Reload all Browsers
gulp.task('bs-reload', function () {
  console.log("In bs-reload task");
  browserSync.reload();
});

//Watch task
gulp.task('default',['browserSync', 'styles'], function() {
    gulp.watch('assets/**/*.scss',['styles']);
    gulp.watch('**/*.html', ['bs-reload']);
    gulp.watch('**/*.js', ['bs-reload']);
});
