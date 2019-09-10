

function circleFun(r){
    this.r = r;
    this.circumference = function(){
        var circumference=4*3.14*r;
        console.log("circumference:"+circumference);
    };
    this.area = function(){
        var area = Math.pow(r,2)*3.14;
        console.log("area:"+area);
    };
}
var cir = new circleFun(2);

module.exports={
    circumference:cir.circumference,
    area:cir.area
}