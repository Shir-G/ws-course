var mongoose = require('mongoose');
var Action = require('./todo');

exports.getData = function(req,res){
    Action.find({}).where('todo').ne('PRIVATE').exec(function(err,docs){
        //actionsData = docs;
        console.log("docs:" +docs);
        res.json(docs);
        return;
    });
}

//when i get the json in the browser - copy the url and put it in the angular