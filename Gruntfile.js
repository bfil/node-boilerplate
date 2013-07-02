module.exports = function(grunt) {
    grunt.initConfig(require(__dirname + '/config/grunt.json'));

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['test:node', 'test:browser', 'test:casperjs']);
    grunt.registerTask('build',['less', 'uglify', 'build:all']);
    grunt.registerTask('dev',['server:dev']);
    grunt.registerTask('server',['server:prod']);
    grunt.registerTask('default', ['jshint', 'test', 'build', 'doc']);
}; 