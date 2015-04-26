var SparkPost = require('sparkpost');
var dotenv = require('dotenv').load();

// console.log(process.env.sparkpostKey);
var key = { key: process.env.sparkpostKey};

var email = new SparkPost(key);

var send = email.transmission.send;

// Send it off into the world!
exports.send = function(req, res) {
	// expecting name, email in req.body
	var name = 'Jason Levy' || req.body.name;
	var email = 'jasond.levy@gmail.com' || req.body.email;
	var message = 'Casted 3D is Ready' || req.body.message;

//	console.log('name: ', name, ' email: ', email, ' message: ', message);

	var trans = {};
	trans.recipients = [{ address: { name: name, email: email } }];
	trans.text = message;
	// Set some metadata for your email
	trans.campaign = 'Casted 3D';
	trans.from = 'admin@casted3d.com';
	trans.subject = 'Your 3D cast is ready for pick up.';

	console.log(res);
  if (res.err) {
    console.log('Whoops! Something went wrong');
    console.log(res.err);
    res.send(error);
  } else {
    console.log('Woohoo! You just sent your first mailing!');
    res.send(true);
  }

};
