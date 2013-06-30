module.exports = function(app, express, options) {

    var DEFAULT_PUBLIC_DIR = __dirname + '/../../public';

    var cons = require('consolidate'),
        swig = require('swig');
    
    app.configure(function(){
        app.engine('.html', cons.swig);
        app.set('views', __dirname + '/views');
        app.set('view engine', 'html');
        app.use(express.methodOverride());
        app.use(express.bodyParser());
        app.use(app.router);
        app.use(express.static(__dirname + '/public'));
        app.use(express.static(options.publicDir || DEFAULT_PUBLIC_DIR));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });
};