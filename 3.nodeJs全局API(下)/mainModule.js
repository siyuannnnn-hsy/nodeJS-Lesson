var circleModule = require("./circleModule.js");

var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的半径为"+r);
console.log("圆的周长为"+circleObj.circumference());
console.log("圆的面积为"+circleObj.area());

