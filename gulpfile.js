'use strict';

//      /$$$$$$$                                /$$
//     | $$__  $$                              |__/
//     | $$  \ $$  /$$$$$$   /$$$$$$  /$$   /$$ /$$  /$$$$$$   /$$$$$$   /$$$$$$$
//     | $$$$$$$/ /$$__  $$ /$$__  $$| $$  | $$| $$ /$$__  $$ /$$__  $$ /$$_____/
//     | $$__  $$| $$$$$$$$| $$  \ $$| $$  | $$| $$| $$  \__/| $$$$$$$$|  $$$$$$
//     | $$  \ $$| $$_____/| $$  | $$| $$  | $$| $$| $$      | $$_____/ \____  $$
//     | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$/| $$| $$      |  $$$$$$$ /$$$$$$$/
//     |__/  |__/ \_______/ \____  $$ \______/ |__/|__/       \_______/|_______/
//                               | $$
//                               | $$
//                               |__/

/**
 * Build script for the REI Cedar Framework
 */
var path = require( 'path' );
var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var download = require('gulp-downloader');
var brandAiURL = 'https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/style-params.less?key=rJf4Z1nS7Z';
var rename = require( 'gulp-rename' );
var minifyCss = require( 'gulp-cssnano' );
var a11y = require( 'gulp-a11y' );
var pa11y = require( 'gulp-pa11y' );
var gtenon = require('gulp-tenon-client');
var csscomb = require( 'gulp-csscomb' );
var inject = require( 'gulp-inject' );
var uglify = require( 'gulp-uglify' );
var streamify = require( 'gulp-streamify' );
var cssmin = require( 'gulp-cssmin' );
var csslint = require( 'gulp-csslint' );
var qunit = require( 'gulp-qunit' );
var sourcemaps = require( 'gulp-sourcemaps' );
var cssLintLessReporter = require( 'gulp-csslint-less-reporter' );
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );
var source = require( 'vinyl-source-stream' );
var browserify = require( 'browserify' );
var glob = require( 'glob' );
var del = require( 'del' );
var es = require( 'event-stream' );
var runSequence = require( 'run-sequence' );
var process = require( 'child_process' );
var pkg = require( './package.json' );
var globify = require( 'require-globify' );
var bourbon = require( 'node-bourbon' );
var browserSync = require( 'browser-sync' ).create();


var buffer = require( 'vinyl-buffer' );
var babelify = require( 'babelify' );


//       /$$$$$$                       /$$$$$$  /$$
//      /$$__  $$                     /$$__  $$|__/
//     | $$  \__/  /$$$$$$  /$$$$$$$ | $$  \__/ /$$  /$$$$$$
//     | $$       /$$__  $$| $$__  $$| $$$$    | $$ /$$__  $$
//     | $$      | $$  \ $$| $$  \ $$| $$_/    | $$| $$  \ $$
//     | $$    $$| $$  | $$| $$  | $$| $$      | $$| $$  | $$
//     |  $$$$$$/|  $$$$$$/| $$  | $$| $$      | $$|  $$$$$$$
//      \______/  \______/ |__/  |__/|__/      |__/ \____  $$
//                                                  /$$  \ $$
//                                                 |  $$$$$$/
//                                                  \______/

/**
 * Define directory paths
 */
var PATHS = {
    /**
     * DIST: REI-Cedar Root
     *
     * NOTE: This is the root of 'REI-Cedar'. In here you
     * will find all of the associate document files that are used to
     * build out the Jeckyll site
     */
    SRC: path.join( __dirname, 'src' ),

    /**
     * DIST: Distribution Artifact Build Directory
     *
     * NOTE: This is the main Build directory for the REI-Cedar
     * This directory contains the main deliverables for the
     * ui framework, namely:
     *     - The tested and minified CSS
     *     - The tested and minifed JS
     *
     * These deliverables are also consumed by the "Pattern Library" site
     * which contains all of the documentation and examples
     * surrounding the REI-Cedar. This directory is to remain otherwise
     * devoid of *any* other files!
     */
    DIST: path.join( __dirname, 'dist' ),

    /**
     * DOCS_SRC: Pattern Lib Root
     *
     * NOTE: This is the root of the "Pattern Library" site
     * which is a consumer of the `REI-Cedar` assets,
     * namely:
     *     - The tested and minified CSS
     *     - The tested and minifed JS
     *
     * This serves as the
     */
    DOCS_SRC: path.join( __dirname, 'docs_src' ),

    /**
     * DOCS_DIST: Pattern Lib Distribution Artifact
     *
     * NOTE: This is the main Build directory for the "Pattern Library" site.
     * This is the directory consumed by the Jekyll site
     */
    DOCS_DIST: path.join( __dirname, 'docs_dist' ),
    DOCS_TEMPLATES: path.join( __dirname, 'docs_src', '_includes', 'markup-templates' ), // Docs templates directory
    LESS: path.join( __dirname, 'node_modules' ), // Less import directory
    TEST: path.join( __dirname, 'test' ), // Specified folder for test / autogenerated files
};

var SHOULD_STOP_FOR_LINT_FAILURE = false;

var USE_DOCKER = false;

/**
 * Options for [a11y](https://github.com/addyosmani/a11y)
 */
var A11Y_OPTIONS = pkg.a11y;
/**
 * Options for [tenon.io](https://tenon.io/)
 */
var TENON_OPTIONS = pkg.tenon;
/**
 * Options for [pa11y](https://github.com/nature/pa11y#available-options)
 */
var PA11Y_OPTIONS = pkg.pa11y;

//      /$$$$$$$$                  /$$
//     |__  $$__/                 | $$
//        | $$  /$$$$$$   /$$$$$$$| $$   /$$  /$$$$$$$
//        | $$ |____  $$ /$$_____/| $$  /$$/ /$$_____/
//        | $$  /$$$$$$$|  $$$$$$ | $$$$$$/ |  $$$$$$
//        | $$ /$$__  $$ \____  $$| $$_  $$  \____  $$
//        | $$|  $$$$$$$ /$$$$$$$/| $$ \  $$ /$$$$$$$/
//        |__/ \_______/|_______/ |__/  \__/|_______/
//
//
//
// --[ Default ]----------------------------------------------------------------
gulp.task( 'default', [ 'master' ] );

// --[ CSS ]--------------------------------------------------------------------
gulp.task( 'css', [ 'css:minify' ] );

// --[ Javascript ]-------------------------------------------------------------
gulp.task( 'js', [ 'js:build' ] );

// --[ Docs ]-------------------------------------------------------------------
gulp.task( 'docs:clean', [
    'docs:clean-dist',
    'docs:clean-copied-from-src',
    'docs:clean-copied-package',
    'docs:clean-copied-less'
] );

gulp.task( 'docs:copy-all', [
    'docs:copy-css',
    'docs:copy-js',
    'docs:copy-package',
    'docs:copy-less'
] );

gulp.task( 'docs', [
    // autoprefixer
    'docs:autoprefixer-css',
    'docs:autoprefixer-examples',

    // csscomb
    'docs:csscomb-css',
    'docs:csscomb-examples',

    // cssmin
    'docs:cssmin-css',

    // Jekyll-ify docs
    'docs:jekyll'
] );

// --[ Accessibility ]----------------------------------------------------------
// Audit all accessibility
gulp.task( 'accessibility:audit', [
    'accessibility:audit-templates',
    'accessibility:audit-docs'
] );

// Audit all experimental accessibility
gulp.task( 'accessibility:audit-exp', [
    'accessibility:audit-pa11y'
] );

//      /$$      /$$                       /$$
//     | $$$    /$$$                      | $$
//     | $$$$  /$$$$  /$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$
//     | $$ $$/$$ $$ |____  $$ /$$_____/|_  $$_/   /$$__  $$ /$$__  $$
//     | $$  $$$| $$  /$$$$$$$|  $$$$$$   | $$    | $$$$$$$$| $$  \__/
//     | $$\  $ | $$ /$$__  $$ \____  $$  | $$ /$$| $$_____/| $$
//     | $$ \/  | $$|  $$$$$$$ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$
//     |__/     |__/ \_______/|_______/    \___/   \_______/|__/
//
//
//

// This will run in this order:
// * js and css in parallel
// * docs
// * Finally call the callback function
gulp.task( 'master', callback =>
    runSequence( [ 'js', 'css' ], 'docs', 'compile-riot', callback )
);

gulp.task( 'build-docker', callback => {
    USE_DOCKER = true;
    runSequence( [ 'js', 'css' ], 'docs', 'compile-riot', callback )
});

//       /$$$$$$   /$$$$$$   /$$$$$$
//      /$$__  $$ /$$__  $$ /$$__  $$
//     | $$  \__/| $$  \__/| $$  \__/
//     | $$      |  $$$$$$ |  $$$$$$
//     | $$       \____  $$ \____  $$
//     | $$    $$ /$$  \ $$ /$$  \ $$
//     |  $$$$$$/|  $$$$$$/|  $$$$$$/
//      \______/  \______/  \______/
//
//
//

// CSS:Clean
gulp.task( 'css:clean', () => del( [ path.join( PATHS.DIST, '**/*.css' ) ] ) );

// Compile the UI framework's Less --> ./dist.
gulp.task( 'css:build', [ 'css:clean' ], () => {

    const lessc = less( {
        paths: [ PATHS.LESS ]
    } ).on( 'error', err => {
        console.log( 'There was a problem compiling the LESS files...' );
        throw new Error( err );
    } ); // Break on less compile errors

    const lintLessReporter = cssLintLessReporter().on( 'error', err => {
        // TODO: decide whether to throw the error
        if ( SHOULD_STOP_FOR_LINT_FAILURE ) {
            throw new Error( err );
        }
    } );

    return gulp.src( path.join( PATHS.SRC, '/less/main.less' ) )
        .pipe( sourcemaps.init() )
        .pipe( rename( {
            basename: pkg.name
        } ) ) // Rename the bundle basename to $PROJECT_NAME-$VERSION
        .pipe( lessc ) // Build the dev bundle
        .pipe( csslint() )
        .pipe( lintLessReporter )
        .pipe( csscomb() )
        .pipe( postcss( [ autoprefixer( {
            browsers: [ 'last 2 versions' ]
        } ) ] ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( PATHS.DIST ) );
} );

gulp.task('get-tokens', function(){
  return download(brandAiURL)
    .pipe(rename('brandai.variables'))
    .pipe(gulp.dest('src/less/themes/default/settings/'));
});

// minify the css
gulp.task( 'css:minify', [ 'css:build' ], () =>
    gulp.src( path.join( PATHS.DIST, '/rei-cedar.css' ) )
    .pipe( rename( {
        suffix: '.min'
    } ) ) // Build the minified bundle
    .pipe( minifyCss() )
    .pipe( gulp.dest( PATHS.DIST ) )
);

//         /$$$$$                                                             /$$             /$$
//        |__  $$                                                            |__/            | $$
//           | $$  /$$$$$$  /$$    /$$ /$$$$$$   /$$$$$$$  /$$$$$$$  /$$$$$$  /$$  /$$$$$$  /$$$$$$
//           | $$ |____  $$|  $$  /$$/|____  $$ /$$_____/ /$$_____/ /$$__  $$| $$ /$$__  $$|_  $$_/
//      /$$  | $$  /$$$$$$$ \  $$/$$/  /$$$$$$$|  $$$$$$ | $$      | $$  \__/| $$| $$  \ $$  | $$
//     | $$  | $$ /$$__  $$  \  $$$/  /$$__  $$ \____  $$| $$      | $$      | $$| $$  | $$  | $$ /$$
//     |  $$$$$$/|  $$$$$$$   \  $/  |  $$$$$$$ /$$$$$$$/|  $$$$$$$| $$      | $$| $$$$$$$/  |  $$$$/
//      \______/  \_______/    \_/    \_______/|_______/  \_______/|__/      |__/| $$____/    \___/
//                                                                               | $$
//                                                                               | $$
//                                                                               |__/

// Compile the UI framework's Javascript --> ./dist. Include the minified version.
gulp.task( 'js:build', [], () =>
    browserify( PATHS.SRC + '/js/main.js' ).bundle()
    .pipe( source( PATHS.SRC + '/js/main.js' ) )
    .pipe( streamify( sourcemaps.init() ) )
    .pipe( rename( {
        dirname: '/',
        basename: 'rei-cedar'
    } ) )
    .pipe( streamify( sourcemaps.write() ) )
    .pipe( gulp.dest( PATHS.DIST ) )
    .pipe( rename( {
        dirname: '/',
        basename: 'rei-cedar',
        suffix: '.min'
    } ) )
    .pipe( streamify( uglify() ) )
    .pipe( gulp.dest( PATHS.DIST ) )
);

//      /$$$$$$$
//     | $$__  $$
//     | $$  \ $$  /$$$$$$   /$$$$$$$  /$$$$$$$
//     | $$  | $$ /$$__  $$ /$$_____/ /$$_____/
//     | $$  | $$| $$  \ $$| $$      |  $$$$$$
//     | $$  | $$| $$  | $$| $$       \____  $$
//     | $$$$$$$/|  $$$$$$/|  $$$$$$$ /$$$$$$$/
//     |_______/  \______/  \_______/|_______/
//
//
//

// docs:clean-dist: deletes everything in the docs_dist folder
gulp.task( 'docs:clean-dist', () => del( [ path.join( PATHS.DOCS_DIST, '/*' ) ] ) );

// docs:clean-copied-from-src: deletes the copied REI-Cedar.* from docs_src
gulp.task( 'docs:clean-copied-from-src', () => del( [ path.join( PATHS.DOCS_SRC, '/rei-cedar*' ) ] ) );

// docs:clean-copied-package: deletes `/less/variables.less` from docs_src
gulp.task( 'docs:clean-copied-package', () => del( [ path.join( PATHS.DOCS_SRC, '/_data/package.json' ) ] ) );

// docs:clean-copied-variables: deletes `/less/variables.less` from docs_src
gulp.task( 'docs:clean-copied-less', () => del( [ path.join( PATHS.DOCS_SRC, '/_includes/less/*' ) ] ) );

// Build REI-Cedar CSS and copy into docs_src directory
gulp.task( 'docs:copy-css', [ 'docs:clean-copied-from-src' ], () =>
    gulp.src( path.join( PATHS.DIST, '*.css' ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_SRC ) ) )
);

// Build old Bootstrap JS and copy into the docs_src directory
gulp.task( 'docs:copy-js', [ 'docs:clean-copied-from-src' ], () =>
    gulp.src( path.join( PATHS.DIST, '*.js' ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_SRC ) ) )
);

// Copy packages to docs_src directory
gulp.task( 'docs:copy-package', [ 'docs:clean-copied-package' ], () =>
    gulp.src( './package.json' )
    .pipe( gulp.dest( path.join( PATHS.DOCS_SRC, '_data' ) ) )
);

// Copy variables to docs_src directory
gulp.task( 'docs:copy-less', [ 'docs:clean-copied-less' ], () =>
    gulp.src( path.join( path.join( PATHS.SRC, '/less/**/*' ) ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_SRC, '_includes/less' ) ) )
);

// --[ docs:autoprefixer ]----------------------------------------------------------
gulp.task( 'docs:autoprefixer-css', [ 'docs:clean', 'docs:copy-all' ], () =>
    gulp.src( [ 'docs/assets/css/anchor.css', 'docs/assets/css/src/docs.css' ] )
    .pipe( sourcemaps.init() )
    .pipe( postcss( [ autoprefixer( {
        browsers: [ 'last 2 versions' ]
    } ) ] ) )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_DIST, 'css' ) ) )
);

gulp.task( 'docs:autoprefixer-examples', [ 'docs:clean', 'docs:copy-all' ], () =>
    gulp.src( path.join( PATHS.DOCS_SRC, 'docs/examples/**/*.css' ) )
    .pipe( sourcemaps.init() )
    .pipe( postcss( [ autoprefixer( {
        browsers: [ 'last 2 versions' ]
    } ) ] ) )
    .pipe( sourcemaps.write( '.' ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_DIST, 'docs/examples/' ) ) )
);

// --[ docs:csscomb ]----------------------------------------------------------
gulp.task( 'docs:csscomb-css', [ 'docs:clean', 'docs:copy-all' ], () =>
    gulp.src( [ 'docs/assets/css/anchor.css', 'docs/assets/css/src/docs.css' ] )
    .pipe( csscomb( {
        expand: true,
        cwd: 'dist/css/',
        src: [ '*.css', '!*.min.css' ],
        dest: 'dist/css/'
    } ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_DIST, 'css' ) ) )
);

gulp.task( 'docs:csscomb-examples', [ 'docs:clean', 'docs:copy-all' ], () =>
    gulp.src( path.join( PATHS.DOCS_SRC, 'docs/examples/**/*.css' ) )
    .pipe( csscomb( {
        expand: true,
        cwd: 'dist/css/',
        src: [ '*.css', '!*.min.css' ],
        dest: 'dist/css/'
    } ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_DIST, 'docs/examples/' ) ) )
);

// --[ docs:cssmin ]----------------------------------------------------------
gulp.task( 'docs:cssmin-css', [ 'docs:clean', 'docs:copy-all' ], () =>
    gulp.src( PATHS.DOCS_DIST + '/assets/css/src/*.css' )
    .pipe( cssmin() )
    .pipe( rename( {
        dirname: '/',
        suffix: '.min'
    } ) )
    .pipe( gulp.dest( path.join( PATHS.DOCS_DIST, 'css' ) ) )
);

// Build docs CSS and copy into docs src directory
gulp.task( 'docs:less:compile', [ 'docs:clean', 'docs:copy-all' ], () => {
    const lessc = less( {
        paths: [ PATHS.LESS ]
    } ).on( 'error', err => {
        console.log( 'There was a problem compiling the LESS files...' );
        throw new Error( err );
    } ); // Break on less compile errors

    return gulp.src( path.join( PATHS.DOCS_SRC, '/assets/less/docs.less' ) )
        .pipe( lessc )
        .pipe( gulp.dest( path.join( PATHS.DOCS_SRC, '/assets/css/src' ) ) );
} );

gulp.task( 'docs:jekyll', [ 'docs:less:compile' ], gulpCallBack => {

    if ( USE_DOCKER ) {
        console.log('Using docker for jekyll build')
        process.exec( `docker run --rm -v "${__dirname}:/data" reicoop/jekyll:3.4.3 build`, (err, stdout, stderr) => {
            console.log(stdout);
        } ).on( 'exit', code => gulpCallBack( code === 0 ? null : 'ERROR: Docker process failed: ' + code ) )
    } else {
        console.log("Building docs natively with Jekyll")
        process.spawn( 'jekyll', [ 'build' ], {
            stdio: 'inherit'
        } ).on( 'exit', code => gulpCallBack( code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code ) )
    }

});



//       /$$$$$$                                                   /$$ /$$       /$$ /$$ /$$   /$$
//      /$$__  $$                                                 |__/| $$      |__/| $$|__/  | $$
//     | $$  \ $$  /$$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$ /$$$$$$$ /$$| $$$$$$$  /$$| $$ /$$ /$$$$$$   /$$   /$$
//     | $$$$$$$$ /$$_____/ /$$_____/ /$$__  $$ /$$_____//$$_____/| $$| $$__  $$| $$| $$| $$|_  $$_/  | $$  | $$
//     | $$__  $$| $$      | $$      | $$$$$$$$|  $$$$$$|  $$$$$$ | $$| $$  \ $$| $$| $$| $$  | $$    | $$  | $$
//     | $$  | $$| $$      | $$      | $$_____/ \____  $$\____  $$| $$| $$  | $$| $$| $$| $$  | $$ /$$| $$  | $$
//     | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$ /$$$$$$$//$$$$$$$/| $$| $$$$$$$/| $$| $$| $$  |  $$$$/|  $$$$$$$
//     |__/  |__/ \_______/ \_______/ \_______/|_______/|_______/ |__/|_______/ |__/|__/|__/   \___/   \____  $$
//                                                                                                     /$$  | $$
//                                                                                                    |  $$$$$$/
//                                                                                                     \______/

// Audit templates before they are compiled. This task has the fastest feedback
// loop
gulp.task( 'accessibility:audit-templates', () =>
    gulp.src( path.join( PATHS.DOCS_TEMPLATES, '**', '*.html' ) )
    .pipe( a11y( A11Y_OPTIONS ) )
    .pipe( a11y.reporter() )
    .pipe( gtenon( TENON_OPTIONS ) )
);

// Audit compiled docs. This task is slower, but will cover more. It can give
// color recommendations.
gulp.task( 'accessibility:audit-docs', [ 'docs' ], () =>
    gulp.src( path.join( PATHS.DOCS_DIST, 'components', 'index.html' ) )
    .pipe( a11y( A11Y_OPTIONS ) )
    .pipe( a11y.reporter() )
);

// --[ Accessibility Audits - EXPERIMENTAL ]------------------------------------
// Audit using pa11y.
gulp.task( 'accessibility:audit-pa11y', () => pa11y( PA11Y_OPTIONS )() );



//      /$$$$$$                                                                              /$$
//     /$$__  $$                                                                            | $$
//    | $$  \__/  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
//    | $$       /$$__  $$| $$_  $$_  $$ /$$__  $$ /$$__  $$| $$__  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
//    | $$      | $$  \ $$| $$ \ $$ \ $$| $$  \ $$| $$  \ $$| $$  \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
//    | $$    $$| $$  | $$| $$ | $$ | $$| $$  | $$| $$  | $$| $$  | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
//    |  $$$$$$/|  $$$$$$/| $$ | $$ | $$| $$$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
//     \______/  \______/ |__/ |__/ |__/| $$____/  \______/ |__/  |__/ \_______/|__/  |__/   \___/ |_______/
//                                      | $$
//                                      | $$
//                                      |__/


const destinationFolder = __dirname + '/dist';
const riotCompiler = require( 'riot-compiler' );
const concat = require('gulp-concat');

// Custom stream transformation
function compileTagFile() {
    // Vinyl files as chunks
    function transform(file, cb) {
        // read and modify file contents
        file.contents = new Buffer( String( riotCompiler.compile( file.contents.toString() ) ) );
        cb( null, file );
    }

    // returning the map will cause your transform function to be called
    // for each one of the chunks (files) you receive. And when this stream
    // receives a 'end' signal, it will end as well.
    return es.map( transform );
}

// Custom stream transformation
function transormFileContents() {
    function transform(file, cb) {
        file.contents = new Buffer( String( `${ file.contents.toString() }` ) );
        cb( null, file );
    }
    return es.map( transform );
}

gulp.task( 'compile-riot', done => {

    // gather all the tag files
    return gulp.src( [ './src/components/**/*.tag' ], ( err, files ) => {
        if ( err ) done( err );

        let tasks = files.map( file => {
            return gulp.src( [ file ] )
                .pipe( compileTagFile() );
        } );

        // Merge the streams
        es.merge( tasks )
            .pipe( concat( 'rei-cedar-components.js' ) )
            .pipe( transormFileContents() )
            .pipe( gulp.dest( destinationFolder ) );
    } )
} );

gulp.task( 'browserSync-watch', [ 'compile-riot' ], () => {
    browserSync.reload();
} );

gulp.task( 'serve', [ 'compile-riot' ], () => {

    browserSync.init( {
        proxy: "https://localhost:8443"
    } );

    return gulp.watch( __dirname + './src/components/**/*.*', [ 'browserSync-watch' ] );
} );
