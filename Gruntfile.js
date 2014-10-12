//Gruntfile
    module.exports = function(grunt) {

    //Initializing the configuration object
      grunt.initConfig({

        // Task configuration
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: [
              './bower_components/jquery/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './bower_components/assets/javascript/src/main.js'
            ],
            dest: './app/assets/javascript/main.js',
          },
        },
        less: {
          default: {
            options: {
              compress: true,
            },
            files: {
              "./public/assets/stylesheets/main.min.css":"./app/assets/stylesheets/src/main.less",
            }
          }
        },
        uglify: {
          options: {
            mangle: false
          },
          build: {
            files: {
              './public/assets/javascript/main.min.js': './app/assets/javascript/main.js',
            }
          },
        },
        watch: {
          javascript: {
            files: [
              './bower_components/jquery/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './app/assets/javascript/src/main.js'
            ],
            tasks: ['concat:dist','uglify'],
            options: {
              livereload: true
            }
          },
          less: {
            files: ['./app/assets/stylesheets/src/*.less'],
            tasks: ['less'],
            options: {
              livereload: true
            }
          },
        }
      });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Register Task
    grunt.registerTask('default', ['watch']);

  };
