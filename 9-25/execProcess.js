const cp = require("child_process");


/**
 * err 启动子进程过程异常得到的错误对象
 * stdout 子进程的输出
 * stderr 子进程执行过程的错误对象
 */
cp.exec("node childProcess.js" + " javascirpt",function(err,stdout,stderr){
    if(err){
        console.log(err);
    }
    else{
        console.log(stdout);
        console.log(stderr);
    }
})