var fondo = document.getElementById('cajero');
var pantalla = document.getElementById('pantalla');
var boton = document.getElementById('boton');
var caja = document.getElementById('caja');

pantalla.addEventListener('click',function(){cambio(true);});
boton.addEventListener('click',function(){entregarDinero();cambio(false);});

var imagen=[],banco=[],retiro=[];

banco.push(new billete(100,1));
banco.push(new billete(50,3));
banco.push(new billete(20,2));
banco.push(new billete(10,2));
banco.push(new billete(5,2));


function entregarDinero(){

	if(calculo()){

		var monto=pantalla.value;

		for(var tipo of banco){
		
			if(monto>0){
				var div = Math.floor(monto/tipo.valor);

				if(div>tipo.cantidad){
					cantidad = tipo.cantidad;
				
				}else{
					cantidad = div;
				}

				retiro.push(new billete(tipo.valor,cantidad));
				tipo.cantidad-=cantidad;
				monto = monto - (tipo.valor*cantidad);
			}
		}

		for(elemento in retiro){

			if(retiro[elemento].cantidad>0){

				for(var i=0;i<retiro[elemento].cantidad;i++){

					imagen[i]=document.createElement('img');
					imagen[i].src="imagenes/"+retiro[elemento].valor+".jpg"
					imagen[i].className="billete";
					caja.appendChild(imagen[i]);
				}
			}
		}
	
	}else{
		alert("Cantidad de dinero no disponible.");
	}
	pantalla.value="";
	retiro.splice(0, retiro.length);
}

function cambio(fondo){
	if(fondo){
		cajero.src="imagenes/cajero2.png"
		caja.innerHTML = "";
	}else{
		cajero.src="imagenes/cajero1.png"
	}
}

function calculo() {

	var monto=pantalla.value;

	for(var tipo of banco){
		
		if(monto>0){
			var div = Math.floor(monto/tipo.valor);

			if(div>tipo.cantidad){
				cantidad = tipo.cantidad;
			
			}else{
				cantidad = div;
			}
			monto = monto - (tipo.valor*cantidad);
		}
	}

	if(monto==0){
		return true;
	}else{
		return false;
	}
}