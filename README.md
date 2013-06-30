Node Boilerplate
================

Node.js Boilerplate Project.

 - Based on Express.js
 - Grunt tasks baked in for running servers, tests, code linting, build scripts, docs generator (using JsDoc 3), and more
 - Structured server side (Node.js) and client side (Require.js) boilerplate code
 - Unit tests runners support for server and client/browser code, plus headless browser testing using CasperJS (a PhantomJS API wrapper)
 - Uses less stylesheet preprocessor
 - Swig template engine already set up
 - Easy development / production mode configurations

How to use
----------

In the project directory, run 'npm install' to install project dependencies.

Run 'grunt help' to get a list of the supported tasks.

Running the server
------------------

Use 'grunt dev' to run the server in development mode and browse to: http://localhost:8000
Use 'grunt server' to run the server in production mode and browse to: http://localhost:8080

Unit tests
----------

To run the client side tests and the unit tests PhantomJS and CasperJS need to be installed.