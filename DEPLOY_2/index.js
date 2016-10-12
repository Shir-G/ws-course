'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./config').events;
var hotel = require('./hotel');

var http = require('http'),
    express = require('express');

var port = process.env.PORT || 3000;

var hotel1 = new hotel("my hotel", "spa");
var messages = [];
var indexMsg = 0;

hotel1.on(eventsConfig.PRINT, function(){
    console.log("------------------");
    messages.push('HOTEL:' + `${hotel1.name} ${hotel1.branch}`);
    messages.push('STARS:' + `${hotel1.stars}`);
    messages.push('LIKES:' + `${hotel1.likes}`);
    messages.push('REVIEWS:' + `${hotel1.reviews}`);
   
   for(var i=0; i<4; i++){
    console.log(messages[indexMsg]);
    indexMsg++;
   }
});

hotel1.on(eventsConfig.ERROR, function(){
    console.log("------------------");
    console.log("ERROR:Can't erase a review that doesnt exist yet..")
});

hotel1.like();
hotel1.star(5);
hotel1.star(3);
hotel1.star(1);
hotel1.review('this is a review');
hotel1.deleteReview(0);
hotel1.deleteReview(3);

var app = express();

app.get('/', function(req,res){
    res.send(messages);
    res.end();
});
http.createServer(app).listen(port);
