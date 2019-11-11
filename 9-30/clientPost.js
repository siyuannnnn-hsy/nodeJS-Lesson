const http = require("http");
const querystring = require("querystring");

var infor = {"user":"zhangsan"};
var str = querystring.stringify(infor);
var option = {
    host:"localhost",
    port:8081,
    path:"/",
    method:"post"
}
var req = http.request(option,function(res){

});

req.write(str);
req.end();