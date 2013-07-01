Node Boilerplate
================

Node.js Boilerplate Project.

 - Node.js server based on Express.js
 - Grunt tasks baked in
 - Structured server side (Node.js) and client side (Require.js) boilerplate code
 - Unit tests runners support for server and client/browser code using Mocha
 - Headless browser testing using CasperJS (wrapper for PhantomJS)
 - LESS stylesheets support
 - Swig as the default template engine
 - Docs generator (using JsDoc 3)
 - Easy development / production mode configurations
 - Build scripts to generate JS and CSS prod-ready files
 - A separate test-server in the tools directory that can be run standalone
 - Basic layout with responsive grid system

How to use
----------

In the project directory, run 'npm install' to install project dependencies.

Install grunt: 'npm install -g grunt@0.3.17' (Grunt 0.4+ is not supported by the project yet).

Run 'grunt help' to get a list of the supported tasks.

Running the server
------------------

Use 'grunt dev' to run the server in development mode and browse to: http://localhost:8000

Use 'grunt server' to run the server in production mode and browse to: http://localhost:8080

Unit tests
----------

To run the client side tests and the unit tests PhantomJS and CasperJS need to be installed.

Mocha-PhantomJS is also needed: use 'npm install -g mocha-phantomjs' to install it.

The test folder contains 3 types of tests:

 - browser: client side javascript unit tests
 - node: server side unit tests
 - casperjs: CasperJS test scripts

Feedback
--------

Please, report any issue or other nice-to-have features.

License
-------

(The MIT License)

Copyright (c) 2013 Bruno Filippone

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.