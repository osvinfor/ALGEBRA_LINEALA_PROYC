var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
x1=0
y1=200
x2=400
y2=200
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
d=((x2-x1)**2+(y2-y1)**2)**0.5
document.write("la distancia es: ",d)






