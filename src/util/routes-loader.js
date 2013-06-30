/**
 * The routes loader
 * 
 * @module util/routes-loader
 */

var fs = require('fs');

/**
 * Loads routes from a directory
 * 
 * @param {Object} app The express application.
 * @param {String} dir The directory path containing the routes modules.
 */
exports.load = function( app, dir ) {

	var self = this;

    fs.readdirSync( dir ).forEach( function( filename ) {

        if (filename.indexOf('.js') === -1) {
            return;
        }

        var routesModulePath = dir + '/' + filename.substr( 0, filename.indexOf('.') );
        require( routesModulePath )( app );
    });
};