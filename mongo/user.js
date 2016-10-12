var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
    name: {type:String, index:1, required:true, unique:true},
    age: Number,
    status: {type:String, required:true},
    groups: [String]
}, {collection: 'users'});

module.exports = userSchema;

//mongoose.model('User', schema_name);