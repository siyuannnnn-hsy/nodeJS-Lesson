/**
 * process.pid进程的ID值，唯一标识
 * 
 * process.platform返回程序运行的操作系统平台
 * 
 * process.argv获取当前程序的命令行参数
    * process.argv是一个数组 默认会有两个数组元素
    * process.argv[0]表示的node的可执行文件所在的路径
    * process.argv[1]表示当前执行脚本文件所在的路径
    * process.argv[2]2以后表示的是传入的命令行参数
 * 
 * process.cwd() 当前脚本执行所在的路径

 * 
 */
console.log(process.pid);
console.log(process.platform);
console.log(process.argv);
console.log(process.cwd());