//ARRAY ASOCIATIVO
var imagenes = [];
imagenes["tocinauro"] = "imagenes/cerdo.png";
imagenes["cauchin"] = "imagenes/vaca.png";
imagenes["pokacho"] = "imagenes/pollo.png";

//ARRAY DONDE SE ENCUENTRAN LOS PAKIMANES
var pakimanes=[];
pakimanes.push(new pakiman("tocinauro","Hierba",120,40));
pakimanes.push(new pakiman("cauchin","Fuego",100,30));
pakimanes.push(new pakiman("pokacho","Agua",80,50));

//IMPLEMENTACION DE UN NUEVO FOR, "var x for in", "var x for of";
/*for-in: x tiene el valor del indice del array
  for-of: x tiene el valor del los elementos dentro del array*/

for(var elemento of pakimanes){
	elemento.mostrar();
}

//REPRODUCE EL LLANTO DE CADA PAKIMON

sonidos();
function sonidos(){

	for(i=0;i<3;i++) {
		imagenes[i] = document.getElementsByTagName('img')[i];
	}

	imagenes[0].addEventListener('mouseover',aux = function(){llanto(0);});
	imagenes[1].addEventListener('mouseover',aux = function(){llanto(1);});
	imagenes[2].addEventListener('mouseover',aux = function(){llanto(2);});
}

function llanto(i){
	pakimanes[i].hablar();
}