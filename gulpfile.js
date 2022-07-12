const {src, dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const concat = require('gulp-concat');
// const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const clear = require ('clear');

function html() {
    return src ('src/**.html')
    .pipe (include ({
        prefix: '@@'
    }))
    .pipe(htmlmin ({
        collapseWhitespace: true
    }))
}
// gulp.task('server', function(){
//  //   browserSync.init({
//  //       server: {
//             baseDir: 'src/'
//   //      }
//    // });
//// });

// gulp.task('styles', function(){
//     //return gulp.src('src/sass/*.+(scss|sass')
//     .pipe(sass())
//     //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     //.pipe(gulp.dest('src/css'))
//   //  .pipe(browserSync.stream());
//// });
// //gulp.task('watch', function(){
//    // gulp.watch('src/sass/*.+(scss|sass)',gulp.parallel('styles'));
//     gulp.watch('src/css/style.css').on('change', browserSync.reload);

    

// //});

// //gulp.task('default', gulp.parallel('watch','server', 'styles'));

function scss (){
    return src('src/sass/*.+(sass|scss)')
        .pipe(sass())
       
        .pipe (csso())
        .pipe(concat('style.css'))
        .pipe(dest('src/css'))
}


function serve() {
    browserSync.init({
        server:'src'
    })

    watch('src/**.html', series(html)).on('change', browserSync.reload)
    watch('src/sass/**.+(sass|scss)', series(scss)).on('change',browserSync.reload)
    watch('src/css/**.css').on('change',browserSync.reload)


}
exports.build = series(scss, serve, html)
exports.serve = series (scss, serve, watch)
// exports.clear = clear