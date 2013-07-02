module.exports = function(grunt){

    var less = require('less'),
        fs = require('fs');

    grunt.registerMultiTask('less', 'Compiles less stylesheets.', function() {
        var done = this.async();

        var filepaths = grunt.file.expand(this.filesSrc),
            compiledCount = 0,
            parser = new(less.Parser)({
                paths: [ './public/less' ]
            });

        function cssCompiled() {
            compiledCount++;
            if(compiledCount === filepaths.length) {
                done();
            }
        }

        filepaths.forEach(function(filepath) {
            
            fs.readFile(filepath, function(err, lessCss){

                if(err) {
                    throw new Error(err);
                }

                lessCss = lessCss.toString();

                parser.parse(lessCss, function (e, tree) {
                    var css = tree.toCSS({ compress: true });

                    var cssFile = filepath.replace(/less/g, 'css');

                    fs.writeFile(cssFile, css, function(err) {

                        if(err) {
                            throw new Error(err);
                        }

                        console.log('CSS created successfully: ' + cssFile);

                        cssCompiled();
                    });
                });
            });
        });
    });
};