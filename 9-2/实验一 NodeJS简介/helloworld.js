const http = require("http");

var server = http.createServer(function(req,res){
/**
 * http协议 协议的结构 协议的请求响应过程
 * 状态码
 */
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("<h1>hello world<h1>");
    res.end();//响应结束
});

server.listen(8081);
console.log("server is listening 8081");
/*
    1.shit+鼠标右键 点击打开power shell窗口
    2.编译node.js文件 node+文件名
    3.每次修改js文件时，需要重新执行node+文件名
    4.在node中的js文件，必须要编译才能执行
    5.WebStore
*/

console.log(1+1);

