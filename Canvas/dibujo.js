//CANVAS
var c = document.getElementById('dibujo');
var ctx = c.getContext('2d');
c.style.background = "#282828";

//FORMULARIO
var boton = document.getElementById('boton'),
	numerador = document.getElementById('n'),
	denominador = document.getElementById('d');

//EVENTOS
numerador.addEventListener('keyup',validar);
denominador.addEventListener('keyup',validar);
boton.addEventListener('click',dibujar);
boton.addEventListener('mousedown',borrar)
dibujar();


function validar(){
	if(numerador.value>7){
		numerador.value=7;
	}
	if(denominador.value>9){
		denominador.value=9;
	}
}

function dibujar(){
	var i,n,d,k;
	var pi=3.1416;

	n=numerador.value;
	d=denominador.value;
	if(n=="" && d==""){
		n=7;
		d=8;
	}

	k=n/d;

	for(i=0; i<2*pi*d; i+=0.001){
		var r = 200*Math.cos(k*i);
		var x = r*Math.cos(i);
		var y = r*Math.sin(i);
		punto(x,y);
	}
}

function borrar(){
	ctx.clearRect(0, 0, c.width, c.height);
}

function punto(x, y){
	ctx.fillStyle="#fff";	
	ctx.fillRect(x+(c.width/2),y+(c.height/2),.5,.5);
}