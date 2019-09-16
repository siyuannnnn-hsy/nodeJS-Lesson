const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer(function(req,res){
    var filePath = path.join(__dirname,"/data.txt");
    var streamReader = fs.createReadStream(filePath);
    streamReader.pipe(res);
}).listen(8081);