var gulp = require('gulp');
var compass = require('gulp-compass');
var watch = require('gulp-watch');

gulp.task('compass', function() {
    gulp.src('Resources/sass/*.scss')
            .pipe(compass({
                css: 'Resources/css',
                sass: 'Resources/sass/'
            }))
            .pipe(gulp.dest('Build/'));
});
gulp.task('watch', function() {
    // Endless stream mode 
    return watch('Resources/sass/*.scss')
            .pipe(gulp.dest('Build/'));
});


