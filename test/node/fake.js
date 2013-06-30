describe('Fake Tests', function(){

    it('should check if true is true', function(){
        true.should.equal(true);
    });

    it('should check if ok is ok (async)', function(done){
        setTimeout(function() {
            'ok'.should.equal('ok');
            done();
        }, 100);
    });
    
    it('should load the config module', function() {
        var config = require('../../src/config');
        config.should.be.an('object');
    });

});