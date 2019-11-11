const http = require("http");

http.get("https://localhost:8081",function(res){
    var result = "";
    res.on("data",function(chunk){
        result += chunk;
    });
    res.on("end",function(){
        console.log(result);
    })
});