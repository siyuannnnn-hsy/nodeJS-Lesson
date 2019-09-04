var arg1 = process.argv[2];
if(arg1 == "-h"){
    console.log("请输入运算式");
}
else if(arg1 == undefined){
    console.log("请输入运算式");
}
else{
    var result = eval(arg1);
    console.log(arg1+"=%s",result);
}