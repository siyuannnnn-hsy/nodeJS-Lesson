const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if(pathName=='/'){
        showIndex(res);
    }
    else if(pathName=='/list'){
        showList(res);
    }
    else if(pathName=='/image.png'){//(pathName.indexOf('.png')>=0){//index返回查找的第一个所在的索引位置
        showImg(res);
    }   
    else if(pathName=='/upload' && req.method == 'POST'){
        uploadFile(req,res);
    }
    else if(pathName.indexOf('upload')>=0 && req.method == 'GET'){//是客户端要图片的请求
        // 一个一个的把图片都响应回去
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,"Content-Type","image/png");
        res.end(imgContent);
    }
    else if(pathName=='/getlist'){//获取upload文件夹下的图片信息
        var files = fs.readdirSync(__dirname+'/upload');
        var fileStr = JSON.stringify(files);//
        res.end(fileStr);
    }
}).listen(8082);
console.log('server is listening 8082');

function showIndex(res){
    var indexPath = path.join(__dirname,'./index.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fileContent);
}
function showList(res){
    var listPath = path.join(__dirname,'./list.html');
    var listContent = fs.readFileSync(listPath);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(listContent);
}
function showImg(res){
    var imgPath = path.join(__dirname,'/image.png');
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{'Content-type':'image/png'});
    res.end(imgContent);
}
function uploadFile(req,res){
    var dataStr = '';//用来接收数据
    req.setEncoding('binary');
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length - 2);//进行字符串截取，使之只剩下图片部分的内容
        var imgData = '';
        for(var i=0;i<bufArr.length;i++){
            imgData +=bufArr[i]+'\r\n';
        }
        var buf = Buffer.from(imgData,"binary");
        var timer = (new Date()).getTime();
        fs.writeFileSync(__dirname+'/upload/'+timer+'.png',buf,{'encoding':'binary'});
        res.end('submit success');
    })
}
/**
 * 地址栏中发起http请求
 * 超链接发起http
 * 提交表单发起请求
 * ajax发起请求 可以使get也可以使post
 * <script src> get请求
 * <img src=""/> get请求
 * <link href=""> get请求
 * 
 * get请求：向服务器传递的参数都在URL里面呈现
 * http://localhost:8082/detail?newId=1&newType=1
 * var urlObj = url.parse(req.url,true);
 * urlObj.query.newId
 * 
 * post请求 数据存储在请求体里面 提交表单
 * req.on('data',function(chunk){})
 * req.on('end',function(req,res){})
 */