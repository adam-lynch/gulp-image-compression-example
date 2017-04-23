var gulp    = require('gulp');
// the following will contain any dependencies listed in your package.json starting with `gulp-`
var $       = require('gulp-load-plugins')();

gulp.task('default', ['build']);

gulp.task('build', function(){
    var destination = './dist/images';

    gulp.src('./images/**/*', { base: './images' })
        
        .pipe($.changed(destination)) // only passes through files which are new / have changed

        // see https://github.com/sindresorhus/gulp-imagemin if you want to tweak the compression levels, etc.
        .pipe($.imagemin())

        .pipe(gulp.dest(destination));
});