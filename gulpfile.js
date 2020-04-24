const gulp = require("gulp");
const sass = require("gulp-sass");
const cssMinify = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const rename = require('gulp-rename');
const PORT = 7000;

gulp.task("styles", () =>
  gulp
    .src("./sass/style.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssMinify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
);

gulp.task("serve", () => {
  browserSync.init({
    server: "./",
    port: PORT,
    ghostMode: false
  });
  gulp.watch(["./sass/**/*.scss", "./*.html"], gulp.series("styles"));
});

gulp.task("build", gulp.series("styles", "serve"));