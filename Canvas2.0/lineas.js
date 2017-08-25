var c = document.getElementById('lienzo');
var ctx = c.getContext('2d');
var mouseX = c.width/2;
var mouseY = c.height/2;
var numeroLineas = 22;
var radio = 100;

c.addEventListener('mousemove', posicionMouse);
crearLineas();
setInterval(dibujar,1000/60);

function crearLineas() {
	//Crea un array de lineas con distintas orbitas y velocidades
	lineas = [];
	for (var i = 0; i < numeroLineas; i++) {
		var linea = {
			tamaño: 4,
			angulo: 0,
			posicion: {x: mouseX, y: mouseY},
			posicionNueva: {x: mouseX, y: mouseY},
			velocidad: 0.01+Math.random()*0.04,
			orbita: radio*.5 + (radio * .5 * Math.random()),
			fillColor: '#6f6f6f'
		};
		lineas.push(linea);
	}
}

function posicionMouse(e) {
	//Obtiene la posicion del mouse con respecto al canvas	
   	var borde = c.getBoundingClientRect();
   	mouseX = e.clientX - borde.left,
   	mouseY = e.clientY - borde.top
}

function dibujar() {

	//Se crea un rectangulo del tamaño del canvas para un efecto de desvanecer las lineas
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
   	ctx.fillRect(0, 0, c.width, c.height);
		
	//Dibujar las lineas en el canvas
	for (i = 0; i < lineas.length; i++) {
		var linea = lineas[i];
			
		//Guarda la posicion original del la linea
		var aux = { x: linea.posicion.x, y: linea.posicion.y };
			
		//Incrementar el angulo, de tal manera que el circulo se mantenga girando
		linea.angulo += linea.velocidad;
			
		//Hacer que las lineas sigan al mouse 
		linea.posicionNueva.x += ( mouseX - linea.posicionNueva.x) * (linea.velocidad);
		linea.posicionNueva.y += ( mouseY - linea.posicionNueva.y) * (linea.velocidad);
			
		//Aplicar la posicion
		linea.posicion.x = linea.posicionNueva.x + Math.cos(i + linea.angulo) * (linea.orbita);
		linea.posicion.y = linea.posicionNueva.y + Math.sin(i + linea.angulo) * (linea.orbita);
		
		//Limitar las lineas al borde del canvas
		linea.posicion.x = Math.max( Math.min( linea.posicion.x, c.width ), 0 );
		linea.posicion.y = Math.max( Math.min( linea.posicion.y, c.height ), 0 );
		
		//Lo que en realidad dibujas las lineas...
		ctx.beginPath();
		ctx.fillStyle = linea.fillColor;
		ctx.strokeStyle = linea.fillColor;
		ctx.lineWidth = linea.tamaño;
		ctx.moveTo(aux.x, aux.y);
		ctx.lineTo(linea.posicion.x, linea.posicion.y);
		ctx.stroke();
		ctx.arc(linea.posicion.x, linea.posicion.y, linea.tamaño/2, 0, Math.PI*2, true);
		ctx.fill();
	}
}