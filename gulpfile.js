const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', () =>
	gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
);

gulp.task('default', ['images'] );