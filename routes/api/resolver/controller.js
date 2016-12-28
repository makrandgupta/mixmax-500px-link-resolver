// var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var API500px = require('500px');
var api500px = new API500px(process.env.CONSUMER_KEY_500px);

// the 500px link resolver API
exports.resolver = function(req, res) {
	var url = req.query.url.trim();

	// 500px image urls are in the format:
	// https://500px.com/photo/:id/photoname-by-firstname-lastname
	// TODO extract id from url
	// var matches = url.match(/\-([a-zA-Z0-9]+)$/);
	// if (!matches) {
	// 	res.status(400).send('Invalid URL format');
	// 	return;
	// }
	// console.log('printing');
	// console.log(matches);

	var parameters = {
		'image_size' : '2'
	};
	
	api500px.photos.getById(parameters,  function(error, results) {
		if (error) {
			// Error!
			res.status(500).send('Error');
			return;
		}

		// Do something
		var width = results.photo.width > 600 ? 600 : results.photo.width;
		var html = '<img style="max-width:100%;" src="' + results.photo.image_url + '" width="' + width + '"/>';
		res.json({
			body: html
		});
	});
};