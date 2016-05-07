module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');

    grunt.initConfig({
      screenshot: {
        default_options: {
          options: {
            path: './screenshots',
            files: [{
                type: 'local',
                path: '.',
                port: 8000,
                src: 'index.html?encode=does%20this%20work?',
                dest: 'main.png',
                delay: 4850
            }],
            viewport: ['1920x1080','1024x768','640x960','320x480']
          }
        }
      }
    });

    grunt.registerTask('default', ['screenshot'])
}
