const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    /**
     * 哪些请求发起的是get请求
     * 1.点击超链接
     * 2.地址栏通过网址请求
     * 3.通过ajax发起请求
     * 接受get请求的参数：req.url(http.IncomingMessage.url)
     * 提取URL上的有效数据 例如资源路径，参数 可以借助于URL模块(原生模块)，url.parse(req.url,true)
     */
    var urlObj = url.parse(req.url,true);//转化成对象结构
    console.log(urlObj);
}).listen(8081);
console.log("server is listening 8081");