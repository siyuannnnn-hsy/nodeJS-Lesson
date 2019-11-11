var arg1 = process.argv[2];
if(arg1 == "e"){
    process.exit();//退出当前进程
}
else if(arg1 == "k"){
    process.kill(process.pid);//杀死进程
}
else{
    setTimeout(function(){
        console.log("延时结束")
    },5000)
}