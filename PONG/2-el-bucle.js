let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let x = canvas.width/2; // posicion x
let y = canvas.height-30; //posicion y

let dx = 2; //aumento de x para ver mover
let dy = -2;//aumento de y para ver mover

function dibujarBola(){
    //dibujando circulo
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function dibujar(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); //borrando canvas
    dibujarBola();
    //moviendola
    x += dx;
    y += dy;
}

setInterval(dibujar, 10);//se repite la fincion cada 10 milisegundos