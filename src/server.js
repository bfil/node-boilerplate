/**
 * The application server
 * 
 * @module server
 */

var config = require('./config'),
    express = require('express'),
    expressConfigurator = require('./util/express-configurator'),
    routesLoader = require('./util/routes-loader');

var app = express();

// Loads the template engine
require('./components/template-engine');

// Configures the express application server
expressConfigurator.configure( app, __dirname );

// Loads the application routes
routesLoader.load( app, __dirname + '/routes' );

/**
 * Starts the server
 * 
 * @param {Function} [callback] The callback to trigger when the server is ready.
 */
exports.start = function( callback ) {

    if(!this._server) {

        this._server = app.listen( config.port, function() {
            console.log('Server running on port %d in %s mode', config.port, app.settings.env);
            if(callback) {
                callback();
            }
        });
    }
};

/**
 * Shuts down the server
 */
exports.stop = function() {
    this._server.close();
};