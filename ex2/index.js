var emitter = require ('events');
var eventsCon = require('./config').events;

var emt = new emitter();

emt.on('eventsCon.HI', function(){
    console.log("hello!!!");
});

emt.emit('eventsCon.HI');