const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    console.log(urlPathName);
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        var htmlPath = __dirname + "\\views\\view.html";
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
   
    
});
server.listen(8099);
console.log("server is listening 8099");

/*
const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(res,req){
    var filePath = path.join(__dirname,"/views/view.html");
    var fileContent = fs.readFileSync(filePath);
    fileContent = fileContent.toString("utf-8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}).listen(8080);
console.log("server is listening 8080");
*/