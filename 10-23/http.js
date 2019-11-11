const  http = require('http');

http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/heml'});

    // res.setHeader('Content-Length',10);//响应内容的字节长度

    // res.setHeader('Content-Encoding','gzip');//服务器端的压缩方式设置

    res.setHeader('Date',(new Date()).toLocaleString());//服务端响应的时间

    res.setHeader('Set-Cookie','name=zhangsan');
    res.statusCode = 404;
    res.end('hello node');
}).listen(8081);
console.log('server is listening 8081');