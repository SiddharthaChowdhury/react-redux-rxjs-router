const gulp  = require("gulp"),
    less    = require("gulp-less"),
    cssmin  = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename');

/* 
    This will extract [name].css file from any [name].less file in the project 
    - It is useful only in case when you need to implement style specific to a feature 
*/
gulp.task('compile-less', () => {
    return gulp.src(['./**/*.less', '!./node_modules/**'])
    .pipe(less())
    .pipe(gulp.dest('./'))
})

gulp.task('less', function () {
    return gulp.src('./app/src/index.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./app/src/styles'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/src/styles'))
});

gulp.task('watch', function(){
    gulp.watch('./app/features/**/*.less', gulp.series('less'));
});