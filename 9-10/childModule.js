function sayHello(){
    console.log("hello");
}
function showName(){
    console.log(userName);
}
var userName = "zhangsan";
module.exports = {
    sayHello:sayHello,   //可被外部访问
    userName:userName
}//自定义模块
