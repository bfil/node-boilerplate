/**
 * The application
 * 
 * @module app
 */
define(function(require, exports, module) {
    'use strict';

    /**
     * Represents an App
     * 
     * @constructor
     */
    function App() {
        
    }

    /**
     * Starts the application
     */
    App.prototype.start = function() {
        console.log('Application Started.');
    };

    module.exports = App;
});
