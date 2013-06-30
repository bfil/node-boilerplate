var express = require('express'),
    path = require('path'),
    configure = require('./config'),
    routes = require('./routes'),
    spawn = require('child_process').spawn;

var app = express();

exports.DEFAULT_PORT = 4000;
exports.DEFAULT_TEST_DIR = path.normalize( __dirname + '/../../test/browser/' );

exports.start = function(options, onReadyCallback) {
        
    if(typeof options === 'function') {
        onReadyCallback = options;
        options = {};
    }
    
    options.port = options.port || this.DEFAULT_PORT;
    options.testDir = options.testDir || this.DEFAULT_TEST_DIR;
    
    app.locals.testDir = options.testDir;
    
    configure(app, express, options);
    routes(app);
    
    if(options.viewsFolder) {
        app.set('views', options.viewsFolder);
    }
    
    this._server = app.listen(options.port, function() {
        console.log('Test server running on port %d', options.port);
        
        if(options.openBrowser) {
            spawn('open', ['http://localhost:' + options.port + '/test']);
        }
        
        if(onReadyCallback) {
            onReadyCallback();
        }
    });
};
    
exports.stop = function() {
    this._server.close();
};