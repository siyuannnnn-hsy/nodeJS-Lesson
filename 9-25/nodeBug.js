// va a = 1;
//SyntaxError 语法错误 (某个关键字写错)

// console.log(a);
//ReferenceError 引用错误 (某个位置使用了未定义变量)

const http = require("http");
http.createServer(function(req,res){
    req.write("hello");
}).listen(8081);//TypeError 类型错误  write()不是一个函数 不可作为一个函数执行

