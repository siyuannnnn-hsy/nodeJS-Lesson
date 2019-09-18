const http = require("http");
const fs = require("fs");
const path = require("path");

var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        //fs.readFile()是一个异步方法 执行该句不会等待文件读取元素 就直接执行后面函数
        //回调函数是等到文件读取完成之后才执行的
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log(data.toString());
            }
        });
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8085);