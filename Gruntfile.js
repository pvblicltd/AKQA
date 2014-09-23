module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // SCSS compressor
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'src/assets/css/style.css': 'src/assets/sass/global.scss'
        }        
      }
    },
    //concat the js
    concat: {
      dist: {
        src: [
          'src/lib/jquery/dist/jquery.min.js',
          'src/lib/jquery-migrate/jquery-migrate.min.js',
          'src/lib/modernizr/modernizr.js',
          'src/assets/js/*.js'
        ],

        dest: 'public/assets/js/<%= pkg.name %>.js'
      }

    },
    // copy the css files over public
    copy: {
      main: {
        src: 'src/assets/css/style.css',
        dest: 'public/assets/css/<%= pkg.name %>.css'
      }
    },
    // Uglify and compress the js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/assets/js/<%= pkg.name %>.js',
        dest: 'public/assets/js/<%= pkg.name %>.min.js'
      }
    },
    // Compress the images
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'src/assets/img/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'public/assets/img/'
          }]
      }
    },
    // build the html (index in this case) and replace the dev scripts & css with compressed
    htmlbuild: {
      dist: {
        src: 'src/index.html',
        dest: 'public/',
        options: {
          beautify: true,
          scripts: {
            main: 'public/assets/js/<%= pkg.name %>.min.js'
          },  
          styles: {
            main: 'public/assets/css/<%= pkg.name %>.css'
          }
        }
      }
    },
    // Watch the scss
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'src/assets/sass/**/*.scss',
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-html-build');

  // run build to build in the public folder
  grunt.registerTask('build', ['sass', 'copy', 'imagemin', 'concat', 'uglify', 'htmlbuild']);

  // run grunt just for the watch
  grunt.registerTask('default', ['watch']);
}