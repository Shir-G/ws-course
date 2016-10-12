var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds023530.mlab.com:23530/db_ringapp2016_2591');
var user = require('./user');

var conn = mongoose.connection;  //connecyion refrence
var mod = mongoose.model('User', user);

conn.on('error', function(err){
    console.log('connection error' + err);
});

var newUser1 = new mod({
    name: "Nimrod",
    age: 20,
    status: "A",
    groups: ["sports", "music", "books"]
});
conn.once('open', function(){
    console.log('connected.');
    newUser1.save(function(err,doc){
        
    }) 
    //console.log(x);
    //var query = model.find();
    mod.find({}).where('status').in(['A','B']).exec(function(err, user){
        //if(err) throw err;
        console.log(user);
        mongoose.disconnect();
    });
    
});