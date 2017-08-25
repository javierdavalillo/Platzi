//CLASE DE OBJETOS

class pakiman {
	
	constructor(nombre,tipo,vida,ataque){
		this.nombre = nombre;
		this.tipo = tipo;
		this.vida = vida;
		this.ataque = ataque;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.nombre];
		this.sonido = new Audio();
		this.sonido.src = 'sonidos/'+this.nombre + '.wav';
	}
	
	hablar(){
		this.sonido.play();
	}
	
	mostrar(){
		var titulo = document.createElement('h3');
		var contenido = document.createElement('p');
		var div = document.getElementById(this.nombre);
		div.appendChild(this.imagen);
		div.appendChild(titulo);
		div.appendChild(contenido);
		titulo.innerHTML=this.nombre;
		contenido.innerHTML = 
			"Tipo: " + this.tipo + "<br>Salud: " + this.vida + "<br>Ataque: " + this.ataque;
	}

}


