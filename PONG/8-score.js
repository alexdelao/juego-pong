let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
//los puntos
let puntos = 0;

//variables de la tabla
let tablaAlto = 75;
let tablaAncho = 10;
let tablaPosicionY = (canvas.height - tablaAlto)/2;
let tablaPosicionX =(canvas.width-tablaAncho)

//variables de la pelota
let x = canvas.width/2; // posicion x
let y = canvas.height-30; //posicion y
let radio = 10;

let dx = 2; //aumento de x para ver mover bola
let dy = -2;//aumento de y para ver mover bola

//variable para ver si se presiona izquierda o derecha
var derecha = false;
var izquierda = false;

//funcion para recargar o parar el juego ya que pierdes
function gameOver(){
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", canvas.width/2-100, canvas.height/2); //texto y coordenadas
    ctx.fillText('PUNTOS: '+puntos, (canvas.width/2-100), (canvas.height/2)+50);
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('Presiona F5 para volver a jugar', (canvas.width/2-100), (canvas.height/2)+100);
    clearInterval(inicio);

    // let c = confirm('Haz perdido, tu puntaje fue de '+puntos+' puntos'+'\n quieres CONTINUAR? ');
    // if(c){
    //     document.location.reload();
    // }
    
}
//dibujar el puntaje
function dibujarPuntaje() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#42c920";
    ctx.fillText("Puntos: "+puntos, 8, 20); //texto y coordenadas
}

//dibujar la tabla o plaeta
function dibujarTabla(){
    ctx.beginPath();
    ctx.rect(tablaPosicionX,tablaPosicionY, tablaAncho, tablaAlto);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function dibujarBola(){
    //dibujando circulo
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function dibujar(){

    ctx.clearRect(0, 0, canvas.width, canvas.height); //borrando canvas
    dibujarBola();
    dibujarTabla();
    dibujarPuntaje()
//se modifico este codigo para que pegara con la tabla y tres paredes
    if(x + dx < radio) {
        dx = -dx;
    } else if (x + dx > canvas.width-radio ){
        if(y > tablaPosicionY && y < tablaPosicionY + tablaAlto) {
            dx = -dx;
            puntos++ // aumetar puntos si toca la tabla
        }
        else {
            gameOver();
        }
    }
    //Si la posición y de la pelota es mayor que la altura del canvas
    //Si el valor de y de la posición de la bola es menor que cero, cambie la dirección del movimiento en el eje y

    //y tenemos que restarle el valor del radio de la pelota
    //porque si no detectara el choque desde el centro
    //esto es arriba y abajo paredes
    if(y + dy > canvas.height-radio || y + dy < radio) {
        dy = -dy;
    }
//agramos codigo para que al mover la tabla se detenga al chocar con la pared
    if(derecha && tablaPosicionY < canvas.height - tablaAlto) {
        tablaPosicionY += 7;
    }
    else if(izquierda && tablaPosicionY > 0 ) {
        tablaPosicionY -= 7;
    }
    
    //moviendola
    x += dx;
    y += dy;
}

//#####################################################################
//Agregamos los eventos de las teclas para ver si se presinan
//llama a las funciones para cambiar sus valore a tru y a false
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//se activa cuando se apprieta una tecla
function keyDownHandler(e) { 
    if(e.keyCode == 39) {//si es 39 se apreto la derecha y asi
        derecha = true;
    }
    else if(e.keyCode == 37) {
        izquierda = true;
    }
}
//se activa cuando soltamos una tecla
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        derecha = false;
    }
    else if(e.keyCode == 37) {
        izquierda = false;
    }
}
//####################################################
let inicio = setInterval(dibujar, 2);//se repite la fincion cada 10 milisegundos