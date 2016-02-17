var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var del = require('del');

var paths = {
  scripts: ['client/app/**/*.js'],
  tpl: ['client/app/**/*.jade'],
  indexTpl: 'client/index.jade',
  styl: ['client/assets/styles/main.styl']
};

var webroot = 'www';
var dests = {
  scripts: webroot
};

var filenames = {
  webchatJs: 'webchat.js',
  webchatTpl: 'webchat-tpl.js'
};

gulp.task('clean', function () {
  return del([webroot]);
});

gulp.task('styl', [], function () {
  return gulp.src(paths.styl)
    .pipe(stylus())
    .pipe(gulp.dest(webroot));
});

gulp.task('index', [], function () {
  return gulp.src(paths.indexTpl)
    .pipe(jade({

    }))
    .pipe(gulp.dest(webroot));
});

gulp.task('tpl', [], function () {
  return gulp.src(paths.tpl)
    .pipe(jade({
      
    }))
    .pipe(templateCache())
    .pipe(sourcemaps.init())
    .pipe(concat(filenames.webchatTpl))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dests.scripts));
});

gulp.task('scripts', [], function () {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat(filenames.webchatJs))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dests.scripts));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.tpl, ['tpl']);
  gulp.watch(paths.indexTpl, ['index']);
  gulp.watch(paths.styl, ['styl']);
});

gulp.task('build', ['tpl', 'index', 'scripts', 'styl']);

gulp.task('default', ['watch', 'scripts', 'tpl', 'index', 'styl']);
