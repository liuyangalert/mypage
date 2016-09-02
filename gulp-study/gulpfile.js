//引入gulp
var gulp = require('gulp');
//引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

var htmlObj = {
		collapseWhitespace: true
};
//设置路径js css html 读取和保存的路径
var jsSrc = 'source/javascript/**/*.js';
var sassSrc = 'source/scss/**/*.scss';
var imgSrc = 'source/images/*';
var cssSrc = 'source/css/**/*.css'
var htmlSrc = 'source/html/**/*.html';
//输出目录
var sassDest = 'source/css';
var jsDest = 'dist/pages/js';
var cssDest = 'dist/pages/css/';
var htmlDest = 'dist/pages/page';
var imgDest = 'dist/pages/images';

//检查脚本
gulp.task('jslint',function(){
	gulp.src(jsSrc)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
//编译sass
gulp.task('sass',function(){
	gulp.src(sassSrc)
	.pipe(sass())
	.pipe(gulp.dest(sassDest));
});
//压缩图片
gulp.task('imgmin',function(){
	gulp.src(imgSrc)
	.pipe(imagemin())
	.pipe(gulp.dest(imgDest));
});
//读取JS文件，压缩，输出到新目录
gulp.task('jsmin',function(){
	gulp.src(jsSrc)
	.pipe(uglify())
	.pipe(gulp.dest(jsDest));
});
//读取CSS文件，压缩合并，输出到新目录
gulp.task('cssmin',function(){
	gulp.src(cssSrc)
	.pipe(concat('all.css'))
	.pipe(rename('all.min.css'))
	.pipe(cssmin())
	.pipe(gulp.dest(cssDest));
});
//压缩html文件
gulp.task('htmlmin',function(){
	gulp.src(htmlSrc)
	.pipe(htmlmin(htmlObj))
	.pipe(gulp.dest(htmlDest));
});
//服务器插件中，监视文件并自动刷新
gulp.task('serve', function() {
	gulp.run(['jslint','jsmin','sass','cssmin','htmlmin','imgmin']);
	browserSync.init({
	   server: {
		   baseDir: 'dist/pages'
	   }
   });

	gulp.watch(jsSrc,function(){
		gulp.run('jslint');
		gulp.run('jsmin');
		browserSync.reload();
	});

	gulp.watch(sassSrc,function(){
		gulp.run('sass');
		gulp.run('cssmin');
		browserSync.reload();
	});

	gulp.watch(htmlSrc,function(){
		gulp.run('htmlmin');
		browserSync.reload();
	});

	gulp.watch(imgSrc,function(){
		gulp.run('imgmin');
		browserSync.reload();
	});
});

//默认行为,直接调用服务器
gulp.task('default',function(){
	gulp.run('serve');
});
