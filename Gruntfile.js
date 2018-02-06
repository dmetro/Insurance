
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            app: {
                src: './app/dist/app.bundle.js',
                dest: './app/dist/app.bundle.js'
            },
            libs: {
                src: './app/dist/libs.bundle.js',
                dest: './app/dist/libs.bundle.js'
            }
        },
        concat: {
            libs: {
                src: [
                    './bower_components/angular/angular.js',
                    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
                    './bower_components/angular-jwt/dist/angular-jwt.js',
                    './bower_components/jquery/jquery.js',
                    './bower_components/lodash/lodash.js',
                    './bower_components/moment/moment.js',
                    './bower_components/ngDatepicker/src/js/ngDatepicker.js',
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/angular-bootstrap/ui-bootstrap.min.js',
                    './bower_components/ngstorage/ngStorage.min.js',
                    './bower_components/angular-wizard/dist/angular-wizard.min.js',
                ],
                dest: './app/dist/libs.bundle.js',
            },
        },
        browserify: {
            app: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    plugin: [
                        [
                            'remapify', [
                                {
                                    src: '**/*.js',
                                    expose: 'helpers',
                                    cwd: './app/helpers'
                                },
                                {
                                    src: '**/*.js',
                                    expose: 'services',
                                    cwd: './app/config/services'
                                },
                                {
                                    src: '**/*.js',
                                    expose: 'controllers',
                                    cwd: './app/controllers'
                                },
                                {
                                    src: '**/*.js',
                                    expose: 'directives',
                                    cwd: './app/directives'
                                }
                            ]
                        ]
                    ]
                },
                files: {
                    './app/dist/app.bundle.js': './app/entry.js'
                }
            }
        },
        clean: {
            app: ['./app/dist/app.bundle.js'],
            libs: ['./app/dist/libs.bundle.js']
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            noProcess: {
                files: [
                    './app/**/*.html',
                    './*.html'
                ]
            },
            scripts: {
                files: [
                    './app/config/**/*.js',
                    './app/controllers/**/*.js',
                    './app/directives/**/*.js',
                    './app/helpers/**/*.js',
                    './app/services/**/*.js',
                    './app/*.js'
                ],
                tasks: ['app']
            },
            css: {
                files: ['./app/style/**/*.less'],
                tasks: ['less']
            }
        },
        less: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    './app/dist/style.css': './app/style/**/*.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['app', 'libs', 'watch']);
    grunt.registerTask('app', ['clean:app', 'browserify:app']);
    grunt.registerTask('libs', ['clean:libs', 'concat:libs']);
    grunt.registerTask('release', ['libs', 'app', 'uglify']);
};
