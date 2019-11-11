const fs = require("fs");
const path = require("path");

//创建文件夹
fs.mkdirSync("hello world");

//读取目录
var list = fs.readdirSync(__dirname);
console.log(list);

//删除目录
var files = fs.readdirSync(path.join(__dirname,"/node"));
fs.unlinkSync(path.join(__dirname,"/node/" + files[0]));

fs.rmdirSync(path.join(__dirname,"/hello"));