
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

//cuadrado rojo
ctx.beginPath();//inicio
ctx.rect(20, 40, 50, 50);//coordenadas y tamaño de la figura
ctx.fillStyle = "#FF0000";//color
ctx.fill();
ctx.closePath();//final

//circulo
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//rectangulo 
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";//colorea solo el contorno
ctx.stroke();
ctx.closePath();