module.exports = function(grunt){
    
    var requirejs = require('requirejs'),
        fs = require('fs'),
        buildConfig = grunt.config('build'),
        modulesConfig = require(process.cwd() + '/config/browser-modules.json');
        
    function cloneObject(obj) {
        
        var clone = {};
        
        for(var i in obj) {
            
            if( Object.prototype.toString.call( obj[i] ) === '[object Array]' ) {
                
                clone[i] = obj[i];
            }
            else if(typeof(obj[i]) === 'object') {
                
                clone[i] = cloneObject(obj[i]);
            }
            else {
                
                clone[i] = obj[i];
            }
        }
        return clone;
    }
    
    function getFullConfig(moduleConfig, debug) {
       
        var config = cloneObject(moduleConfig); 
        var baseConfig = debug ? buildConfig.debug : buildConfig.release;
        
        for (var i in baseConfig) {
            
            if(!config[i]) {
                config[i] = baseConfig[i];
            }
        }
        config.out = baseConfig.deployFolder + '/' + (debug ? config.out : config.out.replace('.js','.min.js'));
        return config;
    }
    
    grunt.registerTask('build:all', 'Builds the project.', function() {
        
        buildModules(true);
        buildModules(false);
    });
    
    grunt.registerTask('build:debug', 'Builds the project (debug).', function() {
        
        buildModules(true);
    });
    
    grunt.registerTask('build:release', 'Builds the project (release).', function() {
        
        buildModules(false);
    });
    
    function buildModules(debug) {
        
        for(var i in modulesConfig) {
            
            var module = modulesConfig[i];
            var config = getFullConfig( module, debug );
            console.log('Building module: ' + config.out);

            requirejs.optimize(config);
        }   
    }
};