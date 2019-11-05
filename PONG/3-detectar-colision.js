let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

//variables de la tabla
let tablaAlto = 75;
let tablaAncho = 10;
let tablaPosicion = (canvas.height - tablaAlto)/2;

//variables de la pelota
let x = canvas.width/2; // posicion x
let y = canvas.height-30; //posicion y
let radio = 10;

let dx = 2; //aumento de x para ver mover
let dy = -2;//aumento de y para ver mover

function dibujarBola(){
    //dibujando circulo
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function dibujar(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); //borrando canvas
    dibujarBola();
//
    if(x + dx > canvas.width-radio || x + dx < radio) {
        dx = -dx;
    }
    //Si la posición y de la pelota es mayor que la altura del canvas
    //Si el valor de y de la posición de la bola es menor que cero, cambie la dirección del movimiento en el eje y

    //y tenemos que restarle el valor del radio de la pelota
    //porque si no detectara el choque desde el centro
    if(y + dy > canvas.height-radio || y + dy < radio) {
        dy = -dy;
    }
    
    //moviendola
    x += dx;
    y += dy;
}

setInterval(dibujar, 10);//se repite la fincion cada 10 milisegundos