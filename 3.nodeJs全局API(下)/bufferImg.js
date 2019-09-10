const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"1.png");
    var imgBuffer = fs.readFileSync(imgPath);
    var baseUrl = imgBuffer.toString("base64");
    console.log(baseUrl);
    var imgSrc = "data:image/png;base64,"+baseUrl;
    var htmlStr = "<!DOCTYPE html><head></head>" + "<body><img src='"+ imgSrc +"'/></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8087);
console.log("server is listening 8087");
