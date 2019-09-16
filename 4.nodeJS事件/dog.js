// var events = require("events");
// var EventEmitter = events.EventEmitter;
// function Dog(name,energy){
//     EventEmitter.call(this);
//     this.name = name;
//     this.energy = energy;
//     var that = this;
//     setInterval(function(){
//         that.emit("barked");
//     }, 1000);
// }
// Dog.prototype.__proto__ = EventEmitter.prototype;
// var dog1 = new Dog("taidi",4);
// var dog2 = new Dog("zangao",8);
// dog1.on("barked",function(){
//     if(this.energy != 0){
//         console.log(this.name + " barked!" + " energy:" + this.energy);
//         this.energy--;
//     }
//     else{
//         console.log(this.name + " barked!" + " energy:0");
//         process.exit();
//     }
// })
// dog2.on("barked",function(){
//     if(this.energy != 0){
//         console.log(this.name + " barked!" + " energy:" + this.energy);
//         this.energy--;
//     }
//     else{
//         console.log(this.name + " barked!" + " energy:0");
//         process.exit();
//     }
// })
// module.exports = {
//     Dog:Dog,
//     barked:barked,
//     dog1:dog1,
//     dog2:dog2
// }




//原生模块 核心模块
const events = require("events");
var EventEmitter = events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
}
Dog.prototype.__proto__ = EventEmitter.prototype;

module.exports = Dog;