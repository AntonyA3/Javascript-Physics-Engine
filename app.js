
var http = require('http');
var url = require('url');
var fileService = require('fs');
var path = require ('path');
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));



var server = app.listen(8080, function(){


});

app.get('/', function(req, res){
    fileService.readFile("index.html",function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

    });
    

});

app.get('/about.html', function(req, res){
    fileService.readFile("about.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

    })

});

