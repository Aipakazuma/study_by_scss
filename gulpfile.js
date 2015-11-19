var gulp       = require('gulp');
var sass       = require('gulp-sass');
var minifyCss  = require('gulp-minify-css');
var src        = '.';

gulp.task('sass', function() {
  gulp.src(src + '/sass/*scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest(src + '/css'));
});

// watch
gulp.task('watch', function() {
  var w_sass = gulp.watch(src + '/sass/*scss', ['sass']);
  w_sass.on('change', function(event){
    console.log('CSS File ' + event.path + ' was ' + event.type + ', running task sass...');
  });
});