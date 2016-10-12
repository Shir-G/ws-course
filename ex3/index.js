var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/assets', express.static(__dirname + '/public'));

// app.get('/myProfile',function(req,res,next){
//     res.send('<!doctype html><html><head><link href="./assets/style.css" rel="stylesheet"></head><body><h1>WOW</h1></body></html>');
//     req.next();
// });

// app.all('*', function(req,res){
//     console.log("logged In");
// });

app.post('/myProf*ile',function(req,res){
    var username = req.body.username;
    res.json({"u":username})
});

app.get('/myProf*ile/:user_id', function(req,res){
    var name = req.params.user_id;
    res.send('<!doctype html><html><head><title>'+name+'</title></head><body><h1>WOW</h1></body></html>');
});



app.get('/', function(req,res){
    res.json({dir:'root'});
});

app.post('/products', function(req,res){
    res.json({product:'something'});
});

app.put('/item', function(req,res){
    res.json({dir:'item'});
});

app.listen(port);
console.log('listening on port ' +port);