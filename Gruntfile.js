module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.initConfig({
        screenshot: {
            default_options: {
                options: {
                    path: './screenshots',
                    files: [{
                        parallel: true,
                        type: 'local',
                        path: '.',
                        port: 8000,
                        src: './docs/index.html',
                        dest: 'docs.png',
                        delay: 4850
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            }
        },
        pug: {
            docs: {
                files: {
                    'docs/index.html': 'docs/index.pug'
                }
            }
        }
    });

    grunt.registerTask('default', ['screenshot'])
}
