var mongoose = require('mongoose');
var schema = mongoose.Schema;
var actionSchema = new schema({
    action: {type:String, index:1, required:true, unique:true},
    done: Boolean
}, {collection: 'todo'});

exports.Action = mongoose.model('todo', actionSchema);
