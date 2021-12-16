var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req,res) {
    var q = url.parse(req.url,true);
    var filename = "."+q.pathname;
    console.log(filename); 

    if(filename == '/'){
        filename = '/index.html';
    }
    filename = filename + '.html';
    fs.readFile(filename, function (err,data) {
        if(err){
            res.writeHead(200, {'Content-Type': 'text/html'});
          return  res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log("...inserting:" + req.url);
       return res.end("Hello World on svr");
    });
}).listen(8066);

console.log("Server is running on 8066");