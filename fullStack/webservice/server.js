var express = require('express');
var app = express();
//app.use('/', express.static('./public')).listen(8080);
var todoAction = require('./todoActionController');
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/', express.static('./public'));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //app.set('json spaces',4);
    res.set("Content-Type", "application/json");
    next();
});

app.get('/ws_todo/getActionsData', todoAction.getData);

app.listen(port);
console.log("listening on port"+port);