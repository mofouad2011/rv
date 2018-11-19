var gulp = require('gulp'),
    scss = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();


var paths = {
    scss: [
        'scss/app.scss',
    ],
    scssWatch :[
        'scss/*.scss',
    ],
    js : 'js/app.js',
    css :'css/'
};



gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch', ['browser-sync', 'scss'], function () {
    gulp.watch(paths.scssWatch, ['scss']),
    gulp.watch('./*.html')
});

