//接收post请求发来的数据
const http = require("http");

http.createServer(function(req,res){
    var result = "";
    req.on("data",function(chunk){
        result += chunk;
    });
    req.on("end",function(){
        console.log(result);
    })
}).listen(8081);
console.log("server is listening 8081");