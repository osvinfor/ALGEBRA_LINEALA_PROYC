var c=document.getElementById("myCanvas4");
var ctx=c.getContext("2d");
function puntosmat(){
    document.getElementById("res1").innerHTML = "Punto Mat: "+cuadroM();
}
function cuadroM(){
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 0);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(266, 0);
ctx.lineTo(266, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 0);
ctx.stroke();
}