module.exports = function(grunt) {

    var exec = require('child_process').exec,
        fs = require('fs'),
        rimraf = require('rimraf');
    
    grunt.registerTask('doc', 'Creates the documentation using jsDoc Toolkit 3.', function() {
        var done = this.async();
        
        rimraf('./doc', function() {

            console.log('Generating node docs...');
            jsDoc3('./src/', './doc/node', './src/README.md', function(err) {

                if(err) {
                    console.error(err.toString());
                    done();
                }
                else {

                    console.log('Generating browser docs...');
                    jsDoc3('./public/js/src', './doc/browser', './public/js/src/README.md', function(err) {

                        if(err) {
                            console.error(err.toString());
                        }
                        else {
                            console.log('Documentation generated successfully.');
                        }

                        done();
                    });
                }
            });

        });        
    });

    function jsDoc3( sourceDir, docDir, readmeFilePath, callback ) {
        
        exec('tools/jsdoc3/jsdoc -d ' + docDir + ' ' + sourceDir + ' ' + readmeFilePath + ' -r',
            function(error, stdout, stderr) {
                callback(error);                
            }
        );
    }
}; 