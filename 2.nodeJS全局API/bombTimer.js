function Bomb(message){
    this.message=message,
    this.explode = function(){
        console.log(message);
    }
}
var Bomb1 = new Bomb("bomb!!!");
setTimeout(function(){
    Bomb1.explode();
},2000);