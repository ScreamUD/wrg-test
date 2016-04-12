module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      prod: {
        options: {
          style: 'compressed',
          loadPath: [
            'node_modules/bootstrap-sass/assets/stylesheets'
          ]
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['style.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      },
      dev: {
        options: {
          style: 'expanded',
          loadPath: [
            'node_modules/bootstrap-sass/assets/stylesheets'
          ]
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['style.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'js/main.js']
    },
    concat: {
      options: {
        separator: ';\n'
      },
      plugins: {
        src: [
          'node_modules/bootstrap-sass/assets/javascripts/bootstrap/*.js'
        ],
        dest: 'js/plugins.js'
      }
    },
    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: true
      },
      plugins: {
        src: 'js/plugins.js',
        dest: 'js/plugins.min.js'
      },
      main: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    copy: {
      bootstrap_fonts: {
        expand: true,
        cwd: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
        src: ['*'],
        dest: 'fonts/bootstrap/'
      }
    },
    scsslint: {
      allFiles: [
        'scss/*.scss'
      ],
      options: {
        colorizeOutput: true,
        config: '.scss-lint.yml'
      }
    },
    watch: {
      sass: {
        files: 'scss/*.scss',
        tasks: ['sass:dev']
      },
      js: {
        files: ['js/main.js', 'Gruntfile.js'],
        tasks: ['jshint']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('buildcss', ['sass:dev', 'scsslint']);
  grunt.registerTask('buildjs', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('copyfiles', ['copy:bootstrap_fonts']);
};