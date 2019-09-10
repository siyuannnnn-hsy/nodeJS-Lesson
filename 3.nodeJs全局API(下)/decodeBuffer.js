var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf = Buffer.from(base64Str,"base64");
var str = buf.toString("utf-8").split(":");
console.log("用户名："+str[0],"密码："+str[1]);