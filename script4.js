var c=document.getElementById("myCanvas4");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(400, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(400, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineTo(200, 200);
ctx.stroke();

