var express = require('express');
//var http = require('http');
var app = express();
/*var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('personalPsyco',['myCollection']);*/
var request = require('request');

// default idex page on server
//app.use(express.static(__dirname + '/app/'));
/*app.use(bodyParser.json());*/

var url = "http://railpnrapi.com/test/check_pnr/pnr/1234567890/format/json/pbapikey/ea4485cf0725ad5cedbe05d705e3f98c/pbapisign/c17d2ff9c8e0ad8a578ce39ab199655095416e4f";
//var url = "http://jsonplaceholder.typicode.com/posts/1";
app.get('/getData',function(req,resp){
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            resp.end(body);
        }else{
           console.log("EERRORROROROROR====");
            console.log(error);
        }
    })
});

/*app.get('/getData',function(req,resp){
    var Client = require('node-rest-client').Client;
    var _data;
// direct way
    client = new Client();

    args ={
        headers:{"Access-Control-Allow-Origin":"*"}
    };

    client.get(url, args,
        function(data, response){
            // parsed response body as js object
            console.log(response);
            /!*response.json(data);*!/
            _data = data;
        });
    resp.end(_data);
});*/

app.use(express.static('./')).get('*',function(req,res){
        res.sendfile('app/index.html');
    }).listen(3000);
console.log("server running");

