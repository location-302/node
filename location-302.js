var querystring = require('querystring');
var crypto = require('crypto');

module.exports = function(id, secret, url) {
	var serviceUrl = "http://302-location.com";

	var token = crypto.createHash('sha256').update(secret+url).digest('hex');
	token = token.substring(0, 4);

	return serviceUrl+"/?"+querystring.stringify({"i":id, "u":url, "t":token});
}