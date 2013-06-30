var casper = require('casper').create();

casper.test.comment('Homepage tests');

function getLinks() {
    return document.querySelectorAll('a.link');
}

casper.start('http://localhost:8000/', function() {
    this.test.assertTitle('Node Boilerplate', 'Homepage title is the one expected');
});

casper.then(function() {
    this.test.assertExists('#logo', 'Logo element exists');
    var links = this.evaluate(getLinks);
    this.test.assert(links.length === 2, 'Main links of the homepage exist');
});

casper.run(function() {
    this.test.renderResults(true);
    this.test.done();
    this.exit();
});