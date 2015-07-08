/**
 * Created by charles on 7/8/15.
 */

var gulp = require("gulp");

// Include plugins
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var sass = require('gulp-ruby-sass');
var slim = require("gulp-slim");
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');


//-----------------------------------//

/** Using Coffee now

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'));
});

 **/

// Concatenate sass and compile
gulp.task('sass', function() {
    return sass('sass/style.sass', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

// Compile slim
gulp.task('slim', function(){
    gulp.src("./slim/*.slim")
        .pipe(slim({
            pretty: true
        }))
        .pipe(gulp.dest("./"));
});

// Compile coffeescript
gulp.task('coffee', function() {
    gulp.src('./coffeescript/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('build/js'))
});


//-----------------------------------//


// Watching Files
gulp.task('watch', function() {
    // Watch .slim files
    gulp.watch('slim/*.slim', ['slim']);

    // Watch .sass file
    gulp.watch('sass/style.sass', ['sass']);

    // Watch .coffee files
    gulp.watch('coffeescript/*.coffee', ['coffee']);
});

// Default Task
gulp.task('default', ['sass', 'slim', 'coffee', 'watch']);