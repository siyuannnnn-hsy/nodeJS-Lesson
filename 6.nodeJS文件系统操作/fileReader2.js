const http = require("http");
const fs = require("fs");
const path = require("path");

var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);//buf为偏移的位置
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            });
        });//打开当前文件路径 r+为读写方式打开 fd是文件描述符
    }
    else{
        
    }
}).listen(8085);