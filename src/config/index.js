/**
 * The environment configuration
 * 
 * @module config
 */

var nodeEnv = process.env.NODE_ENV || 'development';

var config = require('../../config/' + nodeEnv + '.json');
config.env = nodeEnv;

module.exports = config;