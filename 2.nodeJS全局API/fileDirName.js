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