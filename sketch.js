//Clase uno con Aaron Montoya

//declaracion de variables
var diametro;//solo declarar
//asignarle un valor
diametro = 50;

//declarar una funcion
// function 


//ejecutar guardar al principio, elprograma se puede caer
 function setup() {
//Crea el lienzo
createCanvas(400,300);
//Da color al fondo del lienzo(rojo,verde,azul)
  background(0,255,0);
}
function draw() {
  
  //declarar variable ancho
var anchoBorde= 10;

estilo1();

//si no deseo ver la cola del dibujo, debo copiar el fondo en draw
//background(0,255,0);
//para que aparesca una ellipse en la pantalla como plano cartesiano
//ubicacion X, Y, ancho, alto}
ellipse(13,40,32,50);

// voy a dibujar con el mouse una elipse
//posicion(posX, posY, width, heigth)(ubicacion, tamaño)

// sin relleno  noFill();
  ellipse(mouseX,mouseY,100,diametro);
  // se ejecutara cada vez qeu entre al loop de draw
 diametro = diametro +1;

//funcion declarada
function estilo1(){
  //Ancho del borde
strokeWeight(2);
//color del borde
stroke(210,0,100);
//Relleno del elipse
fill(255,222,0);
}

}