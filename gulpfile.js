var nunjucksRender  = require('gulp-nunjucks-render'),
    browserSync     = require('browser-sync'),
    sourcemaps      = require('gulp-sourcemaps'),
    imagemin        = require('gulp-imagemin'),
    uglify          = require('gulp-uglify'),
    shell           = require('gulp-shell'),
    gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    del             = require('del');
    // cache           = require('gulp-cache'),

// Clean Dist
gulp.task('clean:public', function () {
  return del.sync('public');
});

// Browser Sync
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });
});

// Sass
gulp.task('sass', function () {
  // Gets all files ending with .scss in source/sass
  return gulp.src('source/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' })).on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/styles'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('vendor', function () {
  return gulp.src('source/static/vendor/**/*')
    .pipe(gulp.dest('public/vendor'));
});

gulp.task('image', function () {
  return gulp.src('source/static/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'));
});

gulp.task('js', function () {
  return gulp.src('source/static/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

// Nunjucks
gulp.task('nunjucks', function () {
  nunjucksRender.nunjucks.configure(['source/templates/']);

  // Gets .html and .nunjucks files in pages
  return gulp.src('source/templates/**/[^_]*.html')
    // Renders template with nunjucks
    .pipe(nunjucksRender({ path: 'source/templates' }))
    // output files in app folder
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('deploy', ['sass', 'js', 'image', 'nunjucks', 'vendor'], shell.task([
  'git subtree push --prefix public origin gh-pages'
]));

gulp.task(
  'watch',
  ['browserSync', 'sass', 'js', 'image', 'nunjucks', 'vendor'],
  function () {
    gulp.watch('source/static/**/*.js', ['js']);
    gulp.watch('source/sass/**/*.scss', ['sass']);
    gulp.watch('source/templates/**/*.html', ['nunjucks']);
    gulp.watch('source/static/vendor/**/*.js', ['vendor']);
    gulp.watch('source/static/vendorimages/**/*', ['images']);
    // Other watchers
  }
);

gulp.task('default', ['watch']);
