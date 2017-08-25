var peso, g_tierra=9.80, g_marte=3.71, g_jupiter=24.79;
var resultado = document.getElementById('resultado');

document.getElementById('marte').onclick = function(){calculo(g_marte);}
document.getElementById('jupiter').onclick = function(){calculo(g_jupiter);}

function calculo(planeta){

	peso = parseFloat(document.getElementById('caja').value);
	peso = (peso*planeta)/g_tierra;
	peso = peso.toFixed(2);
	if(planeta==g_marte){
		resultado.innerHTML = ("En marte pesas, "+peso+"kg");
	}else{
		resultado.innerHTML = ("En jupiter pesas, "+peso+"kg");
	}
		
}