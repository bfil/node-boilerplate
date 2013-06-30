/**
 * The application main routes
 * 
 * @module routes/main
 */

/**
 * Renders the homepage
 */
function homepage(req, res) {
    res.render('index.html');
}

module.exports = function ( app ) {
	app.get('/', homepage);
};