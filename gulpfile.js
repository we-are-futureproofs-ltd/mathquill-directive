var gulp = require('gulp');

var jade = require('gulp-jade');

gulp.task('jade', function () {
    gulp.src('./src/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copyLibs', function () {
    gulp.src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'));
});

gulp.task('js', function() {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['jade', 'copyLibs', 'js']);