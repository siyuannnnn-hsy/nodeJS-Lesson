var timerId = setTimeout(function(){
    console.log("game over");
},3000);

timerId.unref();
timerId.ref();