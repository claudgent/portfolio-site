const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
 
gulp.task('css', () => {
    gulp.src('css/*.css')
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(rename({extname:'.min.css' }))
    .pipe(gulp.dest('css'));
});

gulp.task('js', () => {
    gulp.src('js/*.js')
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('js'));
});

gulp.task('images', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
);

gulp.task('default', ['css','js','images'] );