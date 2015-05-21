var querystring = require('querystring');
var crypto = require('crypto');

module.exports = function(id, secret, url) {
	var serviceUrl = "http://302-location.com";

	var params = {"i":id, "u":url};
	params["t"] = crypto.createHash('sha256').update(secret + querystring.stringify(params)).digest('hex');
	params["t"] = params["t"].substring(0, 4);

	return serviceUrl+"/?"+querystring.stringify(params);
}