var request = require('request'),
	dotenv  = require('dotenv').load();

var sinchAppKey = process.env.sinchAppKey,
	sinchSecret = process.env.sinchSecret;


var _auth;

sinchAuth = function(appKey, secret){
	if (appKey && secret){
		_auth = "Basic " + new Buffer("application\\" + appKey + ":" + secret).toString("base64");
	}

	return _auth;
};


exports.sendMessage = function (req, res) {
    var phoneNumber = '14153028525' || req.body.phone;
    var message = 'Your Casted 3D is ready for pickup' || req.body.message;
//    console.log('phone: ', phoneNumber, 'message: ', message);
	var auth = sinchAuth(sinchAppKey, sinchSecret);
	if (!auth){
		throw new Error("No Authorization was provided");
	}
    var options = {
        method: 'POST',
        url : "https://messagingApi.sinch.com/v1/sms/" + phoneNumber,
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : auth
        },
        body: "{\"Message\":\"" + message + "\"}"
    };
    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error);
        return error;
    };

    request(
        options,
        callback
    );
};

exports.getStatus = function(messageId){
	var auth = sinchAuth();
	if (!auth){
		throw new Error("No Authorization was provided");
	}
    var options = {
        method: 'GET',
        url : "https://messagingApi.sinch.com/v1/sms/" + messageId,
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : auth
        }
    };
    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error);
        console.log(body);
    };

    request(
        options,
        callback
    );
};

