/**
 * console.time("计时标识")
 * 检测代码的执行效率的时候
 * 可以选择使用console.time() console.timeEnd()
 */
console.time("test");//启动一个计时器
function loopTime(){
    var sum = 0;
    for(var i = 0;i<10000;i++){
        for(var j = 0;j<100;j++){
            sum += j*i; 
        }
    }
    return sum;
}
loopTime();
console.timeEnd("test");//结束一个计时器