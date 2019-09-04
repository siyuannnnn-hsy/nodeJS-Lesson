var i = 0;
process.stdin.on("data",function(data){
    if(i == 0){
        console.log("Name:");
    }
    else if(i == 1){
        console.log("Email:");
    }
    else if(i == 2){
        console.log("QQ:");
    }
    else if(i == 3){
        console.log("Mobile:");
    }
    else{
        process.exit();
    }
    i++;
});

