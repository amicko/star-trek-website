module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'scripts/main.js',
        dest: 'scripts/bundle.min.js'
      }
    },
    babel: {
        options: {
            sourceMap: true,
            presets: ['babel-preset-es2015']
        },
        dist: {
            files: {
                'scripts/components/': 'scripts/main.js'
            }
        }
    },
    browserify: {
      // options: {
      //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      // },
      build: {
        src: 'scripts/main.js',
        dest: 'scripts/bundle.js'
      }
    },
    sass: {
      // options: {
      //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      // },
      build: {
        src: 'styles/main.scss',
        dest: 'styles/main.sass.css'
      }
    },
    watch: {
      styles: {
        files: 'styles/main.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: 'scripts/main.js',
        tasks: ['browserify'],
        option: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          open: true,
          keepalive: false,
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'babel', 'browserify', 'sass', 'connect', 'watch']);

};