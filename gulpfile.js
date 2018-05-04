const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('Image Optimization', () =>
	gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
);
