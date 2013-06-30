var spawn = require('child_process').spawn;

module.exports = function(grunt){
    
    // Server test task

    var Mocha = require('mocha'),
        mocha = new Mocha();
    
    mocha.reporter('spec').ui('bdd');
    
    grunt.registerTask('test:node', 'Executes the node server unit tests.', function() {
                
        var done = this.async(),
            should = require('chai').should();
        
        var filepaths = grunt.file.expandFiles('test/node/*.js');
        filepaths.forEach(function(filepath) {
            mocha.addFile(filepath);
        });
        
        mocha.run(done);
    });

    // Browser test task
    
    grunt.registerTask('test:browser', 'Executes the browser unit tests with PhantomJS.', function() {

        var done = this.async(),
            testServer = require(process.cwd() + '/tools/test-server/server.js');
        
        testServer.start(function() {
            grunt.helper('mocha-phantomjs', {
                args : ['http://localhost:' + testServer.DEFAULT_PORT + '/test'],
                done : function(err) {
                    testServer.stop();
                    done(err);
                }
            });
        });        
    });

    // CasperJS test task
    
    grunt.registerTask('test:casperjs', 'Executes the interaction tests with CasperJS.', function() {
        
        var done = this.async(),
            appServer = require(process.cwd() + '/src/server.js');

        var filepaths = grunt.file.expandFiles('test/casperjs/*.js'),
            testsExecuted = 0;

        function executeTest( i ) {
            grunt.helper('casperjs', {
                args : [ filepaths[i] ],
                done : testExecuted
            });
        }

        function testExecuted(err) {

            if(err) {
                return done(err);
            }
            
            testsExecuted++;
            if(testsExecuted === filepaths.length) {
                appServer.stop();
                done();
            }
            else {
                executeTest(testsExecuted);
            }
        }
        
        if(filepaths.length > 0) {
            appServer.start(function() {
                executeTest(testsExecuted);
            });
        }
        else {
            done();
        }
    });

    // Helpers

    grunt.registerHelper('mocha-phantomjs', function(options) {

        var mochaPhantomJS = spawn('mocha-phantomjs', options.args, { stdio: 'inherit' });

        mochaPhantomJS.on('exit', function(code) {

            if (code) {
                if (code === 127) {

                    grunt.warn('PhantomJS and/or Mocha-PhantomJS not found.', options.code);
                } else {

                    grunt.warn('Task exited unexpectedly with exit code ' + code + '.');
                }
            }

            options.done(code);
        });
    });

    grunt.registerHelper('casperjs', function(options) {

        var casperjs = spawn('casperjs', options.args, { stdio: 'inherit' });

        casperjs.on('exit', function(code) {

            if (code) {
                if (code === 127) {

                    grunt.warn('PhantomJS and/or CasperJS not found.', options.code);
                } else {

                    grunt.warn('Task exited unexpectedly with exit code ' + code + '.');
                }
            }

            options.done(code);
        });
    });
};