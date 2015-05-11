var querystring = require('querystring');
var crypto = require('crypto');

module.exports = function(id, secret, url) {
	var serviceUrl = "http://302-location.com";

	var params = {"id":id, "url":url};
	params["token"] = crypto.createHash('sha256').update(secret + querystring.stringify(params)).digest('hex');

	return serviceUrl+"/?"+querystring.stringify(params);
}