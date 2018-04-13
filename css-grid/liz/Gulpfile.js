"use strict";

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var minify = require("gulp-minify");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sassdoc = require("sassdoc");
var browserSync = require("browser-sync").create();
var nunjucksRender = require("gulp-nunjucks-render");
var concat = require("gulp-concat");
var imagemin = require("gulp-imagemin");
var siteOutput = "./dist";

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var input1 = "./scss/_default/*.scss";
var input2 = "./scss/_site/*.scss";
var inputMain = "./scss/style.scss";
var output = siteOutput + "/css";
var inputTemplates = "./pages/*.html";
var inputPartials = "./templates/partials/*.html";
var sassOptions = { outputStyle: "compressed" };
var autoprefixerOptions = {
  browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
};
var sassdocOptions = { dest: siteOutput + "/sassdoc" };

function errorlog(error) {
  console.error.bind(error);
  this.emit("end");
}

// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------

gulp.task("sass", function() {
  return (gulp
      .src(inputMain)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on("error", sass.logError))
      //.pipe(sass(sassOptions)
      .on("error", errorlog)
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(sourcemaps.write("./maps"))
      .pipe(gulp.dest(output))
      .pipe(browserSync.stream()) );
});

// -----------------------------------------------------------------------------
// Javascript
// -----------------------------------------------------------------------------

gulp.task("scripts", function() {
  return gulp
    .src(["js/*"])
    .on("error", errorlog)
    .pipe(browserSync.reload({ stream: true }))
    .pipe(minify())
    .pipe(gulp.dest(siteOutput + "/js"));
});

// -----------------------------------------------------------------------------
// Templating
// -----------------------------------------------------------------------------

gulp.task("nunjucks", function() {
  nunjucksRender.nunjucks.configure(["./templates/"]);
  // Gets .html and .nunjucks files in pages
  return (gulp
      .src(inputTemplates)
      // Renders template with nunjucks
      .pipe(nunjucksRender())
      // output files in dist folder
      .pipe(gulp.dest(siteOutput)) );
});

// -----------------------------------------------------------------------------
// Imagemin
// -----------------------------------------------------------------------------

gulp.task("img", function() {
  return gulp
    .src("./img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest(siteOutput + "/img"));
});

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------

gulp.task("fonts", function() {
  return gulp.src(["./fonts/**"]).pipe(gulp.dest(siteOutput + "/fonts/"));
});

// -----------------------------------------------------------------------------
// Sass documentation generation
// -----------------------------------------------------------------------------

gulp.task("sassdoc", function() {
  return gulp
    .src(input)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});

// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------

gulp.task("watch", function() {
  // Watch the sass input folder for change,
  // and run `sass` task when something happens
  gulp.watch(input1, ["sass"]).on("change", function(event) {
    console.log(
      "File " + event.path + " was " + event.type + ", running tasks..."
    );
  });
  gulp.watch(input2, ["sass"]).on("change", function(event) {
    console.log(
      "File " + event.path + " was " + event.type + ", running tasks..."
    );
  });

  gulp.watch("./js/*", ["scripts"]).on("change", browserSync.reload);

  // Watch nunjuck templates and reload browser if change
  gulp.watch(inputTemplates, ["nunjucks"]).on("change", browserSync.reload);

  // Watch nunjuck templates and reload browser if change
  gulp.watch(inputPartials, ["nunjucks"]).on("change", browserSync.reload);
});

// -----------------------------------------------------------------------------
// Static server
// -----------------------------------------------------------------------------

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: siteOutput
    }
  });
});

// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task("default", [
  "sass",
  "nunjucks",
  "img",
  "scripts",
  "fonts",
  "watch",
  "browser-sync"
]);
