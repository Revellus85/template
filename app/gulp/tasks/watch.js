var gulp = require('gulp'),
watch = require('gulp-watch'),
broswerSync = require('browser-sync').create();

gulp.task('watch', function(){
    broswerSync.init({
    notify: false,
     server: {
         baseDir: "app"
     }
 });

 watch('./app/index.html', function() {
     broswerSync.reload();
 });

 watch('./app/assets/styles/**/*.css', function() {
     gulp.start('cssInject');
 });

watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
});

});

gulp.task('cssInject', ['styles'],function(){
    return gulp.src('./app/temp/styles/styles.css')
     .pipe(broswerSync.stream());
 });

 gulp.task('scriptsRefresh', ['scripts'], function() {
     broswerSync.reload();
 });