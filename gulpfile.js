


// // wamp下www目录


// let gulp = require('gulp');
// let htmlmin = require('gulp-htmlmin');
// let cssmin = require('gulp-clean-css');
// let imgmin = require('gulp-imagemin');
// let jsmin = require ('gulp-uglify');
// let babel = require ('gulp-babel');//Es6转Es5


// gulp.task('default',async()=>{
//     gulp.watch('./src/*.html',async()=>{
//         gulp.src('./src/*.html')
//         .pipe(htmlmin({
//             collapseWhitespace:true,
//             removeComments:true
//         }))
//         .pipe(gulp.dest('C:\\wamp64\\www\\nzphp\\shopping-project'))
//     })
//     gulp.watch('./src/css/*.css',async()=>{
//         gulp.src('./src/css/*.css')
//         .pipe(cssmin())
//         .pipe(gulp.dest('C:\\wamp64\\www\\nzphp\\shopping-project\\css'))
//     })
//     gulp.watch('./src/images/**/*',async()=>{
//         gulp.src('./src/images/**/*')
//         // .pipe(imgmin())
//         .pipe(gulp.dest('C:\\wamp64\\www\\nzphp\\shopping-project\\images'))
//     })
//     gulp.watch('./src/js/*.js',async()=>{
//         gulp.src('./src/js/*.js')
//         // .pipe(babel({
//         //     presets: ['@babel/env']
//         //  }))
//         // .pipe(jsmin())
//         .pipe(gulp.dest('C:\\wamp64\\www\\nzphp\\shopping-project\\js'))
//     })
//     gulp.watch('./src/icon/**/*',async()=>{
//         gulp.src('./src/icon/**/*')
//         .pipe(gulp.dest('C:\\wamp64\\www\\nzphp\\shopping-project\\icon'))
//     })
//     gulp.watch('./shoppingPHP/**/*',async()=>{
//         gulp.src('./shoppingPHP/**/*')
//         .pipe(gulp.dest('C:\\wamp64\\www\\nzphp\\shopping-project\\shoppingPHP'))
//     })
// })








// phpstudy下www目录   D:\\phpStudy\\WWW\\project


let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let cssmin = require('gulp-clean-css');
let imgmin = require('gulp-imagemin');
let jsmin = require ('gulp-uglify');
let babel = require ('gulp-babel');//Es6转Es5


gulp.task('default',async()=>{
    gulp.watch('./src/*.html',async()=>{
        gulp.src('./src/*.html')
        // .pipe(htmlmin({
        //     collapseWhitespace:true,
        //     removeComments:true
        // }))
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\project'))
    })
    gulp.watch('./src/css/*.css',async()=>{
        gulp.src('./src/css/*.css')
        // .pipe(cssmin())
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\project\\css'))
    })
    gulp.watch('./src/images/**/*',async()=>{
        gulp.src('./src/images/**/*')
        // .pipe(imgmin())
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\project\\images'))
    })
    gulp.watch('./src/js/*.js',async()=>{
        gulp.src(['./src/js/*.js','!./src/js/jquery-3.2.1.min.js'])
        // .pipe(babel({
        //     presets: ['@babel/env']
        //  }))
        // .pipe(jsmin())
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\project\\js'))
    })
    gulp.watch('./src/icon/**/*',async()=>{
        gulp.src('./src/icon/**/*')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\project\\icon'))
    })
    gulp.watch('./shoppingPHP/**/*',async()=>{
        gulp.src('./shoppingPHP/**/*')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\project\\shoppingPHP'))
    })
})