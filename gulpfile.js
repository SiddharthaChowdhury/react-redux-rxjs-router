const gulp = require("gulp");
const less = require("gulp-less")

gulp.task('compile-less', () => {
    return gulp.src(['./**/*.less', '!./node_modules/**'])
    .pipe(less())
    .pipe(gulp.dest('./'))
})