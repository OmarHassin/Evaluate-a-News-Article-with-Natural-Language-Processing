const dotenv = require('dotenv');
      dotenv.config();
var aylien = require("aylien_textapi");

function validateInputRequest(req, res, next) {
    if(!req.body.text ) { // check for input validation
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res, next) {
    
    // Aylien API credentias load app_id and app_key from .env file
    // Please make sure to carate an account in aylian and obtain your own app_id and app_key
    // then create a .env file and set it.
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY

        //application_id: '5c9664e4',
       // application_key: 'a010e0107433e96036e43f0b34a5da1c'
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.validateInputRequest = validateInputRequest;
exports.PostHandler = PostHandler;