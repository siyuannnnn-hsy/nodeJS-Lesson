//1.引入events模块
const events = require("events");

//2.实例化event 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//3.绑定事件及事件的处理程序 事件监听
//once 表示只触发一次时间
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})

//4.触发事件，可以进行参数的传递
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");//可以触发多次