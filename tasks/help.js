module.exports = function(grunt){
    grunt.registerTask('help', 'B-Fil help.', function() {
        console.log('');
        console.log('  Project command line tasks:');
        console.log('   grunt help           - shows this help');
        console.log('   grunt doc            - generates the documentation using JSDoc 3');
        console.log('   grunt lint           - runs jslint on the codebase');
        console.log('   grunt test:node      - executes the node server tests');
        console.log('   grunt test:browser   - executes the browser tests with PhantomJS');
        console.log('   grunt test:casperjs  - executes the interaction tests with CasperJS');
        console.log('   grunt less           - compiles less into css stylesheets');
        console.log('   grunt min            - minifies the third party libraries');
        console.log('   grunt build:all      - build the browser modules (debug and release versions)');
        console.log('   grunt build:debug    - build the debug version of the browser modules');
        console.log('   grunt build:release  - build the release version of the browser modules');
        console.log('   grunt watch          - watches source files and on changes runs: lint, test');
        console.log('   grunt server:dev     - runs the server in development mode');
        console.log('   grunt server:prod    - runs the server in production mode');
        console.log('   grunt server:test    - runs the test server');
        console.log('');
        console.log('  Tasks aliases:');
        console.log('   grunt test           - alias for: test:node, test:browser, test:casperjs');
        console.log('   grunt build          - alias for: less, min, build:all');
        console.log('   grunt dev            - alias for: server:dev');
        console.log('   grunt server         - alias for: server:prod');
        console.log('   grunt                - alias for: lint, test, build, doc');
        console.log('');
    });
};