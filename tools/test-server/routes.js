var fs = require('fs');

module.exports = function(app) {
    
    app.get('/test', function(req, res) {
        var scripts = fs.readdirSync(app.locals.testDir).filter(function(o) { return o.indexOf('.js') != -1; });
        res.render('test-runner.html', { scripts: scripts, layout: false });
    });
    
    app.get('/test/*', function(req, res) {
        var testName = req.url.replace('/test/','');
        res.sendfile(app.locals.testDir + testName);
    });
};