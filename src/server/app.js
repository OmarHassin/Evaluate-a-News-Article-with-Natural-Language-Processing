var path = require('path')
var express = require('express');
var app = express();
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser')
var requestPost = require('./handleRequest')
var cors = require('cors');



app.use(cors())
app.use(bodyParser.json())  // to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
// Post
app.post('/article', requestPost.validateInputRequest, requestPost.PostHandler);

module.exports = app;
const port = 3000;
app.listen(port, ()=>{
  console.log("Server running :) ");
  console.log(`on localhost:${port}`);
});
