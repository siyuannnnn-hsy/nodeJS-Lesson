const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

debugger;
/**
 * 1.debugger 设置断点
 * 2.node inspect 文件名
 * 3.c 到断点后继续执行
 * 4.watch(变量名)
 * 5.watchers 查看监听的变量
 * 6.unwatch('变量名')
 * 7.restart 重启脚本
 */

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);//把req.url转化成对象
    var pathName = urlObj.pathname;//urlObj的路径
    //console.log(pathName);
    switch(pathName){
        //请求http://localhost:8081/
        case "/":
            showIndex(res);
            break;
        //网页文件在浏览器解析过程中 如果需要一些资源 会再次向服务器发起请求 图片 视频 js脚本 css文件
        case "/1.png":
            showImg(res);
            break;
        case "/getfilelist":
            showList(res);
            break;
        case "/delfile":
            delFile(urlObj,res);
            break;
        case "/getfile":
            getFile(urlObj,res);
            break;
        case "/getchildfile":
            getChildFile(urlObj,res);
            break;
    }
}).listen(8081);

function showIndex(res){
    var indexPath = path.join(__dirname,"index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}

function showImg(res){
    var imgPath = path.join(__dirname,"1.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(imgContent);
    res.end();
}

var list = [];
function showList(res){
    list = [];
    var filePath = path.join(__dirname,"fileDir");
    var files = fs.readdirSync(filePath);
    for(var i = 0;i < files.length;i++){
        var fileObj = {};
        var childPath = path.join(filePath, files[i]);
        var statObj = fs.statSync(childPath);//获得信息 文件大小 文件名称 文件创建时间等信息
        if(statObj.isFile()){
            fileObj.fileType = "file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear() + "-" + (birthTimer.getMonth()+1)
                             + "-" + birthTimer.getDate() + "-" + birthTimer.getHours()
                             + ":" + birthTimer.getMinutes() + ":" + birthTimer.getSeconds();
        list.push(fileObj);//得到一个数组
    }
    var listStr = JSON.stringify(list);
    res.writeHead(200,{"Contsnt-Type":"text/plain"});
    res.write(listStr);
    res.end();
}

function delFile(urlObj,res){
    var timer = urlObj.query.createtime;
    for(var i = 0;i < list.length;i++){
        if(list[i].createTime == timer){
            deleteRealFile(list[i].fileName);
        }
    }
    res.end("success");
}

function deleteRealFile(fileName){
    var filePath = path.join(__dirname,"fileDir",fileName);
    var statObj = fs.statSync(filePath);//判断当前文件路径是文件还是文件夹
    if(statObj.isFile()){
        fs.unlinkSync(filePath);
    }
    else if(statObj.isDirectory()){
        delDir(filePath);//删除文件夹
    }

}

function delDir(filePath){
    var files = fs.readdirSync(filePath);
    for( var i = 0 ;i < files.length;i++){
        var childPath = path.join(filePath,files[i]);//得到子文件或者子文件夹的相关信息
        var childStatObj = fs.statSync(childPath);//判断子文件是文件还是文件夹
        if(childStatObj.isFile()){
            fs.unlinkSync(childPath);
        }
        else if (childStatObj.isDirectory()){
            delDir(childPath);
        }
    }
    fs.rmdirSync(filePath);//删除文件及文件夹
}

function getFile(urlObj,res){
    var createTime = urlObj.query.createtime;
    for(var i = 0 ;i < list.length;i++){
        if(list[i].createTime == createTime){
            showContent(list[i].fileName,res);//显示文件内容和名字
        }
        
    }
}

function showContent(fileName,res){
    var filePath = path.join(__dirname,"fileDir",fileName);
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
}

function getChildFile(urlObj,res){
    var timer = urlObj.query.createtime;
    //console.log(timer);
    for(var i = 0;i < list.length;i++){
        if(list[i].createTime == timer){
            getChildList(list[i].fileName,res);
        }
    }
}

function getChildList(fileName,res){
    // console.log(fileName);
    var filePath = path.join(__dirname,"fileDir",fileName);
    var files = fs.readdirSync(filePath);
    var childList = [];
    for(var i = 0;i < files.length;i++){
        var fileObj = {};
        var statObj = fs.statSync(path.join(filePath,files[i]));
        if(statObj.isFile()){
            fileObj.fileType = "file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.size = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear() + "-" + (birthTimer.getMonth()+1)
                            + "-" + birthTimer.getDate() + "-" + birthTimer.getHours()
                            + ":" + birthTimer.getMinutes() + ":" + birthTimer.getSeconds();
        childList.push(fileObj);
    }
    console.log(childList);
    var childStr = JSON.stringify(childList);
    res.end(childStr);
}