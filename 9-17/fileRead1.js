const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
var filePath1 = path.join(__dirname,"/file1.txt");
console.time("total");
console.time("text");
//同步读取 (Sync)
var fileContent = fs.readFileSync(filePath);
console.timeEnd("text");
console.time("text1");
var fileContent1 = fs.readFileSync(filePath1);
console.timeEnd("text1");
console.timeEnd("total");
// console.log(fileContent.toString());
// console.log(fileContent1.toString());
console.log("read end");//最后执行