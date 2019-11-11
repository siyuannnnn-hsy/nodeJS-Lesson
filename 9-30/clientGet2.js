const http = require("http");

var option = {
    host:"localhost",
    port:8081,
    path:"/",
    method:"get"
}

http.get(option,function(res){
    var result = '';
    res.on("data",function(chunk){
        result += chunk;
    });
    res.on("end",function(){
        console.log(result);
    })
})