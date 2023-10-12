const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const imagemin = require("gulp-imagemin")
const htmlmin = require("gulp-htmlmin")

function comprimeSass()
{
    return gulp.src("./src/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./dist/styles"))
}
function comprimeHTML()
{
    return gulp.src("./src/index.html")
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest("./dist"))
}
function comprimeImagens()
{
    return gulp.src("./src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img"))
}

exports.imagemin = comprimeImagens

exports.default = function()
{
    gulp.watch("./src/styles/*.scss", {ignoreInitial: false}, gulp.series(comprimeSass))
    gulp.watch("./src/index.html", {ignoreInitial: false}, gulp.series(comprimeHTML))
}