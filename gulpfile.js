const gulp=require('gulp'),
      webpack=require('gulp-webpack'),
      browser=require('browser-sync').create(),
      sass=require('gulp-sass');

gulp.task('default',['copy-html','script','copysass','copyimg'],()=>{
    browser.init({
        server:{},
        startPath:'/dist/index.html'
    });
    gulp.watch('source/**/*.js',['script']);
    gulp.watch('source/sass/**/*.scss',['copysass']);
    gulp.watch('source/img/*',['copyimg']);
    gulp.watch('*.html',['copy-html']);
});


gulp.task('copy-html',()=>{
    return gulp.src("*.html")
               .pipe(gulp.dest("dist"))
               .pipe(browser.stream());
})

gulp.task('copysass', ()=>{
    return gulp.src("source/sass/*.scss")
               .pipe(sass())
               .pipe(gulp.dest("dist/css"))
               .pipe(browser.stream());
});

gulp.task('copyimg', ()=>{
    return gulp.src("source/img/*")
               .pipe(gulp.dest("dist/img"))
               .pipe(browser.stream());
});

gulp.task('script', ()=>{
    return gulp.src("source/js/main.js")
               .pipe(webpack(
                   {
                       devtool: 'source-map',
                       entry:__dirname.concat("/source/js/main.js"),
                       output:{
                           path:__dirname.concat("/dist/js"),
                           filename:'main.js'
                       },
                       module:{
                           loaders:[
                               {
                                   test:/\.js|\.jsx|\.es6$/,
                                   exclude:/node_modules/,
                                   loader:"babel-loader",
                                   query:{
                                       "presets":["es2015"]
                                   }
                               }
                           ]
                       }
                   }
               ))
               .pipe(gulp.dest("dist/js"))
               .pipe(browser.stream());
})
