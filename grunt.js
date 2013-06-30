module.exports = function(grunt) {
    grunt.initConfig(require(__dirname + '/config/grunt.json'));
    grunt.loadTasks('tasks');
    grunt.registerTask('test','test:node test:browser test:casperjs');
    grunt.registerTask('build','less min build:all');
    grunt.registerTask('dev','server:dev');
    grunt.registerTask('server','server:prod');
    grunt.registerTask('default', 'lint test build doc');
}; 