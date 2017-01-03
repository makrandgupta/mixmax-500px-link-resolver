// var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var API500px = require('500px');
var api500px = new API500px(process.env.CONSUMER_KEY_500px);

// read saved tokens from JSON file. If not valid then refresh tokens

// the 500px link resolver API
exports.resolver = function(req, res) {
	var url = req.query.url.trim();

	// 500px image urls are in the format:
	// https://500px.com/photo/:id/photoname-by-firstname-lastname

	var url_split = url.split('/');
	var image_id = url_split[4];
	var url_title = url_split[5];

	var parameters = {
		'image_size' : '4'
	};
	
	api500px.photos.getById(image_id, parameters, function(error, results) {
		if (error) {
			// Error!
			res.status(500).send('Error');
			return;
		}

		console.log(results);
		var title = results.photo.name + " by " + results.photo.user.firstname + " " + results.photo.user.lastname;
		var title_hyp = title.replace(/ /g, '-');
		console.log(title_hyp);
		if(title_hyp.toLowerCase() != url_title) {
			res.status(500).send('Error');
			return;
		}

		var width = results.photo.width > 800 ? 800 : results.photo.width;
		var html = "<img style='max-width:100%;' src='" + results.photo.image_url + "' width='" + width + "'/>";
		res.json({
			body: html,
			subject: title
		});
	});
};