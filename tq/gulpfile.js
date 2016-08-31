//引入gulp
var gulp = require('gulp');
//引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');

//设置路径
var jsSrc = 'app/scripts/**/*.js';
var scssSrc = 'app/style/scss/**/*.scss';
var cssSrc = 'app/style/css/**/*.css'
var htmlSrc = 'app/html/**/*.html';

var jsDest = 'app/demo/js';
var cssDest = 'app/style/css';
var cssMinDest = 'app/demo/css'
var htmlDest = 'app/demo/html';
//检查脚本
gulp.task('lint',function(){
	gulp.src(jsSrc)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//编译sass
gulp.task('sass',function(){
	gulp.src(scssSrc)
	.pipe(sass())
	.pipe(gulp.dest(cssDest));
});


//合并压缩文件
gulp.task('scripts',function(){
	//读取JS文件，压缩合并，输出到新目录
	gulp.src(jsSrc)
	.pipe(gulp.dest(jsDest))
	.pipe(uglify())
	.pipe(gulp.dest(jsDest));

	//读取CSS文件，压缩合并，输出到新目录
	gulp.src(cssSrc)
	.pipe(concat('all.css'))
	.pipe(gulp.dest(cssMinDest))
	.pipe(rename('all.min.css'))
	.pipe(cssmin())
	.pipe(gulp.dest(cssMinDest));

	//读取压缩html文件
	gulp.src(htmlSrc)
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest(htmlDest));

});

//服务器插件中，监视文件并自动刷新
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
		gulp.run('lint','sass','scripts');
    gulp.watch([jsSrc,scssSrc,cssSrc,htmlSrc],function(){
		gulp.run('lint','sass','scripts');
		browserSync.reload();
	});
});


//默认行为,直接调用服务器
gulp.task('default',function(){
	gulp.run('serve');
});
