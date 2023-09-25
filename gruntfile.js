module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/style.css': 'src/style.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/script.min.js': 'src/script.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
