const https = require("https");

https.get("https://www.baidu.com/",function(res){
    var result = "";
    res.on("data",function(chunk){
        result += chunk;
    });
    res.on("end",function(){
        console.log(result);
    })
});