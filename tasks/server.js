module.exports = function(grunt){
    
    grunt.registerTask('server:dev', 'Starts up the application server in development mode.', function() {
        var done = this.async();
        grunt.helper('runNodeApp', 'src/app.js', 'development');
    });
    
    grunt.registerTask('server:prod', 'Starts up the application server in production mode.', function() {
        var done = this.async();
        grunt.helper('runNodeApp', 'src/app.js', 'production');
    });
    
    grunt.registerTask('server:test', 'Starts up the test server.', function() {
        var done = this.async(),
            testServer = require(process.cwd() + '/tools/test-server/server.js');
        
        testServer.start({
            openBrowser: true
        });        
    });
    
    grunt.registerHelper('runNodeApp', function(appFile, nodeEnv) {
        if(nodeEnv) {
            process.env.NODE_ENV = nodeEnv;
        }
        require(process.cwd() + '/' + appFile);
    });
};