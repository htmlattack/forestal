var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var order = require('gulp-order');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var fileinclude = require('gulp-file-include');
var plumber = require('gulp-plumber');

var srcPath = 'src/';
var buildPath = 'build/';

var	path = {
	source: {
		home: srcPath,
		html: srcPath + '**/*.html',
		htmlHome: srcPath + '*.html',
		htmlRigger: srcPath + '*.html',
		htmlRiggerFiles: srcPath + '**/*.html',
		js:   srcPath + 'js/**/*.js',
		jsPath: srcPath + 'js/',
		jsLib: srcPath + 'js/libs/**/*.js',
		jsLibPath: srcPath + 'js/libs/',
		sass: srcPath + 'sass/*.+(sass|scss)',
		sassPath: srcPath + 'sass/**/*.+(sass|scss)',
	},

	build: {
		home: buildPath,
		js: buildPath+'assets/js/',
		css: buildPath+'assets/css/',
		html: buildPath,
	}
};

var onError = function(err) {
    notify.onError({
    	title: "Error in " + err.plugin,
    	message: err.message
    })(err);
    this.emit('end');
};


// Server
gulp.task('openServer', function () {
	browserSync({
		proxy: 'js.loc/',
		online: true,
		host: 'localhost',
    port: 9000,
		logPrefix: 'openServer'
	});
});

gulp.task('webServer', function () {
	browserSync({
		server: {
			baseDir: './build/',
		},
		online: true,
		host: 'localhost',
		port: 777,
		logPrefix: 'webServer'
	});
});


// HTML
gulp.task('html:build', function () {
	gulp.src(path.source.htmlRigger)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
		}))
		.pipe(gulp.dest(path.build.home))
		.pipe(reload({
			stream: true
		}));
});


// JS
gulp.task('js:build', function(){
	return gulp.src(path.source.jsLib)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(order([
			'jquery.min.js',
			path.source.jsLib
		]))
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
    	//.pipe(gulp.dest(path.build.js))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = '.min.js'
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js))
		.on('error', function(err) {
			console.error('Error in compress task', err.toString());
		});
});


// SASS/SCSS
gulp.task('sass:build', function () {
	return gulp.src(path.source.sass)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer(['last 2 versions', '> 0.5%', 'IE 9-11']))
		// .pipe(rename(function (path) {
		// 	path.extname = '.css'
		// }))
		// .pipe(sourcemaps.write())
		// .pipe(gulp.dest(path.build.css))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(rename(function (path) {
			path.extname = '.min.css'
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});


// Clean
gulp.task('clean:dist', function () {
	return gulp.src(path.build.home, {
		read: false,
	}).pipe(plumber({
		errorHandler: onError
	})).pipe(clean());
});


// Dist
gulp.task('dist', ['clean:dist'], function () {
	gulp.src(path.build.css)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(gulp.dest(path.build.css))
	gulp.src(path.source.js)
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(gulp.dest(path.build.js))
});


// Watch
gulp.task('watch', function () {
	gulp.watch(path.source.htmlRiggerFiles, ['html:build']);
	gulp.watch(path.source.htmlHome).on('change', browserSync.reload);
	gulp.watch(path.source.sass, ['sass:build']);
	gulp.watch(path.source.sassPath, ['sass:build']);
	gulp.watch(path.source.jsLib, ['js:build']);
	gulp.watch(path.source.js).on('change', browserSync.reload);
});


// Gulp task default
gulp.task('default', [
	'html:build',
	'sass:build',
	'js:build',
	'webServer',
	'watch',
]);