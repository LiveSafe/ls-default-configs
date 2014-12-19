'use strict';

var _ = require('ls-lodash'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    gulp = require('gulp'),
    lsConfigs = require('./');

gulp.task('default', _.noop);

gulp.task('test', function() {
    gulp.src(['*.js'])
        .pipe(jshint(lsConfigs.jshintrc))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs(lsConfigs.jscsrc));
});
