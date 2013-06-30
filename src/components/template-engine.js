/**
 * The template engine
 * 
 * @module components/template-engine
 */

var config = require('../config'),
    swig = require('swig'),
    path = require('path');

swig.init({
    root:  path.join( __dirname, '..', 'views'),
    allowErrors: true // allows errors to be thrown and caught by express instead of being suppressed by Swig
});

