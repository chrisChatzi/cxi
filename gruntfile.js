module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
                options: {
                    configFile: './eslint.json',
                    // rulePaths: ['conf/rules']
                },
                target: ['./src/**/*.js']

        },
        sass: {
                options: {
                    sourceMap: true
                },
                dist: {
                    files: {
                        './dist/css/style.css': './src/css/style.scss',
                        '../cxi-server/dist/css/style.css': './src/css/style.scss',
                    }
                }
        },
        browserify: {
                dist: {
                    files: {
                        './dist/bundle.js': ['./src/index.js'],
                        '../cxi-server/dist/bundle.js': ['./src/index.js'],
                    },
                    options: {
                        transform: [
                            [
                                'babelify',
                                {
                                    'presets': ["react", "es2015"]
                                }
                            ]
                        ]
                    }
                }
        },
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    '../cxi-server/dist/bundle.min.js': ['./dist/bundle.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["eslint", 'sass', "browserify", "uglify"]);
};
