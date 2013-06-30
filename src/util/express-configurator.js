/**
 * The express configurator
 * 
 * @module util/express-configurator
 */

var express = require('express'),
    cons = require('consolidate'),
    swig = require('swig'),
    path = require('path');

/**
 * Configures an express application
 * 
 * @param {Object} app The express application.
 * @param {String} root The root folder of the application.
 */
exports.configure = function( app, root ) {
    
    app.configure(function(){
        app.engine('.html', cons.swig);
        app.set('views', root + '/views');
        app.set('view engine', 'html');
        app.set('view options');
        app.use(express.methodOverride());
        app.use(express.bodyParser());
        app.use(app.router);
        app.use(express.static( path.join( root, '..', 'public') ));
    });

    app.configure('development', function() {
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
        app.locals.devMode = true;
    });

    app.configure('production', function() {
        app.use(express.errorHandler());
        app.locals.devMode = false;
    });

};