import gulp from 'gulp';
import deploy from 'gulp-gh-pages';
import server from 'browser-sync';

import cssnano from 'gulp-cssnano';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';

import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import { deleteAsync } from 'del';

const sass = gulpSass(dartSass);

const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'dist/css/',
  },
  scripts: {
    src: 'src/scripts/*.js',
    dest: 'dist/js/',
  },
  html: {
    src: '*.html',
    dest: 'dist/',
  },
  images: {
    src: 'src/images/**/*.{png,jpg,jpeg,gif,svg}',
    dest: 'dist/src/images/',
  },
};

gulp.task('clean', async function () {
  const deletedPaths = await deleteAsync(['dist']);

  return deletedPaths;
});

gulp.task('styles', function () {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(cssnano())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', function () {
  return gulp
    .src(paths.scripts.src, {
      sourcemaps: true,
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('serve', function () {
  server.create().init({
    server: '.',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(paths.styles.src, gulp.series('styles'));
  gulp.watch(paths.scripts.src, gulp.series('scripts'));
});

gulp.task('html', function () {
  return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest));
});

gulp.task('images', function () {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
});

export const start = gulp.task(
  'default',
  gulp.series('clean', gulp.parallel('styles', 'scripts', 'images'), 'serve'),
);

export const build = gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('styles', 'scripts', 'images', 'html')),
);

gulp.task('deploy', function () {
  return gulp.src('dist/**/*').pipe(deploy());
});

export default build;
