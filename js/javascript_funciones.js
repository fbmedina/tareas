 function n_mayor() {
	var n1 = parseInt(prompt("Primer número"));
	var n2 = parseInt(prompt("Segundo número"));
	var n3 = parseInt(prompt("Tercer número"));

	if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
		document.getElementById("mostrar_n_mayor").innerHTML = "No escribiste números ¡Idiota!";
	}

	if ((n1 == n2) && (n2 == n3)){ 
		document.getElementById("mostrar_n_mayor").innerHTML = "Los tres números son iguales";
	}

	if ((n1 >= n2) && (n1 >= n3)){
		document.getElementById("mostrar_n_mayor").innerHTML = n1 + " es el número mayor";
	} else if ((n1 <= n2) && (n2 >= n3)){
		document.getElementById("mostrar_n_mayor").innerHTML = n2 + " es el número mayor";
	} else if ((n1 >= n2) && (n1 <= n3)){
		document.getElementById("mostrar_n_mayor").innerHTML = n3 + " es el número mayor";
	}
}

function cachipun() {
	var user_choice = prompt("Escoge piedra, papel o tijera");
	var cpu_choice = Math.floor((Math.random() * 3) + 1);

	if (cpu_choice === 1) {
		cpu_choice = "piedra";
	}

	else if (cpu_choice === 2) {
		cpu_choice = "papel";
	}

	else if (cpu_choice === 3) {
		cpu_choice = "tijera";
	}

	if ((user_choice === "piedra") || (user_choice === "papel") || (user_choice === "tijera")) {
		if (user_choice === cpu_choice) {
			document.getElementById("mostrar_cachipun").innerHTML = "Han empatado";
		}
		else {
			if ((user_choice === "piedra") && (cpu_choice === "tijera")) {
				document.getElementById("mostrar_cachipun").innerHTML = "El computador escogió tijera ¡Has ganado!";
			}

			else if ((user_choice === "piedra") && (cpu_choice === "papel")) {
				document.getElementById("mostrar_cachipun").innerHTML = "El computador escogió papel ¡Has perdido!";
			}

			else if ((user_choice === "papel") && (cpu_choice === "piedra")) {
				document.getElementById("mostrar_cachipun").innerHTML = "El computador escogió piedra ¡Has ganado!";
			}

			else if ((user_choice === "papel") && (cpu_choice === "tijera")) {
				document.getElementById("mostrar_cachipun").innerHTML = "El computador escogió tijera ¡Has perdido!";
			}

			else if ((user_choice === "tijera") && (cpu_choice === "papel")) {
				document.getElementById("mostrar_cachipun").innerHTML = "El computador escogió papel ¡Has ganado!";
			}

			else if ((user_choice === "tijera") && (cpu_choice === "piedra")) {
				document.getElementById("mostrar_cachipun").innerHTML = "El computador escogió piedra ¡Has perdido!";
			}
		}
	}

	else {
		document.getElementById("mostrar_cachipun").innerHTML = "No escogiste un objeto válido";
	}
}

function cajero() {
	var monto = Math.floor(prompt("Ingrese un monto"));
	var billetes_20_mil = 0;
	var billetes_10_mil = 0;
	var billetes_5_mil = 0;
	var billetes_2_mil = 0;
	var billetes_mil = 0;
	var monedas_500 = 0;
	var monedas_100 = 0;
	var monedas_50 = 0;
	var monedas_10 = 0;
	var monedas_5 = 0;
	var monedas_1 = 0;

	billetes_20_mil += Math.floor(monto/20000);
	monto = monto%20000;
	billetes_10_mil += Math.floor(monto/10000);
	monto = monto%10000;
	billetes_5_mil += Math.floor(monto/5000);
	monto = monto%5000;
	billetes_2_mil += Math.floor(monto/2000);
	monto = monto%2000;
	billetes_mil += Math.floor(monto/1000);
	monto = monto%1000;
	monedas_500 += Math.floor(monto/500);
	monto = monto%500;
	monedas_100 += Math.floor(monto/100);
	monto = monto%100;
	monedas_50 += Math.floor(monto/50);
	monto = monto%50;
	monedas_10 += Math.floor(monto/10);
	monto = monto%10;
	monedas_5 += Math.floor(monto/5);
	monto = monto%5;
	monedas_1 += Math.floor(monto/1);
	monto = monto%1;

	if (billetes_20_mil >= 1) {
		document.getElementById("mostrar_billetes_20_mil").innerHTML = "Billetes de $20.000: " + billetes_20_mil;
	}

	if (billetes_10_mil >= 1) {
		document.getElementById("mostrar_billetes_10_mil").innerHTML = "Billetes de $10.000: " + billetes_10_mil;
	}

	if (billetes_5_mil >= 1) {
		document.getElementById("mostrar_billetes_5_mil").innerHTML = "Billetes de $5.000: " + billetes_5_mil;
	}

	if (billetes_2_mil >= 1) {
		document.getElementById("mostrar_billetes_2_mil").innerHTML = "Billetes de $2.000: " + billetes_2_mil;
	}

	if (billetes_mil >= 1) {
		document.getElementById("mostrar_billetes_mil").innerHTML = "Billetes de $1.000: " + billetes_mil;
	}

	if (monedas_500 >= 1) {
		document.getElementById("mostrar_monedas_500").innerHTML = "Monedas de $500: " + monedas_500;
	}

	if (monedas_100 >= 1) {
		document.getElementById("mostrar_monedas_100").innerHTML = "Monedas de $100: " + monedas_100;
	}

	if (monedas_50 >= 1) {
		document.getElementById("mostrar_monedas_50").innerHTML = "Monedas de $50: " + monedas_50;
	}

	if (monedas_10 >= 1) {
		document.getElementById("mostrar_monedas_10").innerHTML = "Monedas de $10: " + monedas_10;
	}

	if (monedas_5 >= 1) {
		document.getElementById("mostrar_monedas_5").innerHTML = "Monedas de $5: " + monedas_5;
	}

	if (monedas_1 >= 1) {
		document.getElementById("mostrar_monedas_1").innerHTML = "Monedas de $1: " + monedas_1;
	}
}

function password_while() {
	var user_tried;
	var password = "contraseña123";

	while (user_tried !== password){
		user_tried = prompt("Adivine la contraseña");
	}
	
	document.getElementById("mostrar_password_while").innerHTML = "¡Contraseña correcta!";
}

function password_do_while() {
	var user_tried;
	var password = "contraseña123";

	do {
		user_tried = prompt("Adivine la contraseña");
	} while (user_tried !== password);
	
	document.getElementById("mostrar_password_do_while").innerHTML = "¡Contraseña correcta!";
}

function n_positivos_while() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;
	var i = 1;

	while (i <= n){
		suma += i;
		i += 1;
	}

	document.getElementById("mostrar_n_positivos_while").innerHTML = "La suma es: " + suma;
}

function n_positivos_do_while() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;
	var i = 1;

	do {
		suma += i;
		i += 1;
	} while (i <= n);

	document.getElementById("mostrar_n_positivos_do_while").innerHTML = "La suma es: " + suma;
}

function n_positivos_pares_while() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;
	var i = 2;

	while (i <= n){
		if (i % 2 === 0){
			suma += i;
		}
		i += 1;
	}

	document.getElementById("mostrar_n_positivos_pares_while").innerHTML = "La suma sólo de los números pares es: " + suma;

}

function n_positivos_pares_for() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;

	for (var i = 2; i <= n; i += 1){
		if (i % 2 === 0){
			suma += i;
		}
	}

	document.getElementById("mostrar_n_positivos_pares_for").innerHTML = "La suma sólo de los números pares es: " + suma;
}

function secuencia_0_1() {
	var n = Math.floor(prompt("Ingrese un número"));
	var secuencia = "";

	for(var i = 0; i <= n; i += 1) {
		if (i === n){
			secuencia += "2";
		} else if (i % 2 === 0){
			secuencia += "0 ";
		} else if (i % 2 !== 0){
			secuencia += "1 ";
		}
	}

	document.getElementById("mostrar_secuencia_0_1").innerHTML = secuencia;
}

function cuadrado() {
	var size = Math.floor(prompt("Ingrese el tamaño del lado del cuadrado"));
	var cuadrado = "";

	for (var i = 1; i <= size; i += 1){
  		for (var j = 1; j <= size; j += 1) {
    		cuadrado += "*";
    	}

    	cuadrado += '<br>'; 
  	}

 	document.getElementById("mostrar_cuadrado").innerHTML = cuadrado;
}

function piramide() {
	var size = Math.floor(prompt("Ingrese el tamaño de la base de la pirámide"));
	var piramide = "";

	for (var i = 1; i <= size; i += 1){
  		for (var j = 1; j <= i; j += 1) {
    		piramide += "*";
    	}

    	piramide += "<br>"; 
  	}

  	document.getElementById("mostrar_piramide").innerHTML = piramide;
}

function piramide_centrada() {
	var size = Math.floor(prompt("Ingrese el tamaño de la base de la pirámide"));
	var piramide = "";

	for (var i = 0; i < size; i += 2){

		for (var j = i / 2; j < size / 2; j += 1){
			piramide += "&nbsp;";
		}

		for (j = 0; j < i + 1; j += 1){
			piramide += "*";
		}

		piramide += "<br>";
  	}

  	document.getElementById("mostrar_piramide_centrada").innerHTML = piramide;
}

function adivina_el_n() {
	var limite = Math.floor(prompt("¿Ingrese el límite?"));
	var azar = Math.ceil(Math.random()*limite);
	var user = 0;
	var count = 1;
	var oportunities = Math.floor(prompt("¿Cuántas oportunidades quieres tener?"));

	while (azar !== user) {
		user = Math.floor(prompt("Adivina un número del 1 al " + limite));
		if (azar === user) {
			document.getElementById("mostrar_adivina_el_n").innerHTML = "¡Has ganado!";
			break;
		} else if (count === oportunities) {
			document.getElementById("mostrar_adivina_el_n").innerHTML = "¡Has perdido!";
			break;
		} else if (user > azar) {
			document.getElementById("mostrar_adivina_el_n").innerHTML = "El número es más bajo";
		} else if (user < azar) {
			document.getElementById("mostrar_adivina_el_n").innerHTML = "El número es más alto";
		}
		count += 1;
	}
}

function n_al_reves() {
	var n = prompt("Ingrese un número");
	var resultado = "";

	for (var i = n.length -1; i >= 0; i -= 1){
		resultado += n[i];
	}

	document.getElementById("mostrar_n_al_reves").innerHTML = resultado;
}

function n_al_derecho_reves() {
	var n = prompt("Ingrese un número");
	var resultado = "";

	for (var i = n.length -1; i >= 0; i -= 1){
		resultado += n[i];
	}

	if (resultado === n) {
		document.getElementById("mostrar_n_al_derecho_reves").innerHTML = "El número al derecho y al revés es igual";
	} else {
		document.getElementById("mostrar_n_al_derecho_reves").innerHTML = "El número al derecho y al revés no es igual";
	}
}

function n_primo() {
	var n = Math.floor(prompt("Ingrese un número"));
	
	if ((n === 1) || (n === 2)){
		document.getElementById("mostrar_n_primo").innerHTML = "Es primo";
	} else {
		for (var i = 2; i < n; i += 1){
	        if (n % i === 0) {
	            document.getElementById("mostrar_n_primo").innerHTML = "No es primo";
	            break;
	        } else{
	            document.getElementById("mostrar_n_primo").innerHTML = "Es primo";
	            break; 
    		}
		}
	}
}

/*function n_primos() {
	var n = Math.floor(prompt("Ingrese un número"));
	var primos = [];

	for (var i = 1; i < 4; i += 1){
		document.getElementById("mostrar_n_primos").innerHTML = i;
	}

	for (i = 4; i <= n; i += 1){
	    primos.push(i);
	    for (var j = 2; j < i ; j += 1){
			if (i % j !== 0){
				primos.push(i);
			}
		}

		document.getElementById("mostrar_n_primos").innerHTML = primos;
	}
}*/

function n_par_o_impar(){
	var n = Math.floor(prompt("Escoge un número"));
	
	if (n % 2 === 0) {
		document.getElementById("mostrar_n_par_o_impar").innerHTML = "Es par";
	} else if (n % 2 !== 0){
		document.getElementById("mostrar_n_par_o_impar").innerHTML = "Es impar";
	}
}

function meses_pares() {
	var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octube", "noviembre", "diciembre"];
	var meses_pares = [];

	meses.forEach(function(elem, index) {
		if ((index + 1) % 2 === 0 ) {
			meses_pares.push(elem);
		}
	});

	document.getElementById("mostrar_meses_pares").innerHTML = meses_pares;
}

function vocales() {
	var frase = prompt("ingrese una frase");
	var arreglo = frase.split("");
	var solo_las_vocales = [];

	arreglo.forEach(function (elem){
		if (elem === "a" || elem === "e" || elem === "i" || elem === "o" || elem === "u") {
			solo_las_vocales.push(elem);
		}
	});

	document.getElementById("mostrar_vocales").innerHTML = solo_las_vocales;
}

function companeros() {
	var companeritos = [
	{ nombre: "Sebastián Meza Estrada", genero: "masculino", edad: 25 },
	{ nombre: "Cristóbal Domínguez Henriquez", genero: "masculino", edad: 35 },
	{ nombre: "Daniela Alejandra Mora", genero: "femenino", edad: 28 },
	{ nombre: "Manuel Alejandro Saez Palominos", genero: "masculino", edad: 28 },
	{ nombre: "Gonzalo Patricio Alarcón Iturra", genero: "masculino", edad: 28 },
	{ nombre: "Rodrigo Ignacio Hein Yanez", genero: "masculino", edad: 29 },
	{ nombre: "Francisca Beatriz Medina Concha", genero: "femenino", edad: 22 },
	{ nombre: "María Alejandra Quintana Ramirez", genero: "femenino", edad: 28 },
	{ nombre: "Nathalie Ravilet", genero: "femenino", edad: 28 },
	{ nombre: "Joaquin Sepúlveda", genero: "masculino", edad: 24 },
	{ nombre: "Carlos Patricio Salas Marín", genero: "masculino", edad: 27 },
	{ nombre: "Diego Guajardo", genero: "masculino", edad: 28 },
	{ nombre: "Benjamín Silva López", genero: "masculino", edad: 35 },
	{ nombre: "Belén Guede Vicencio", genero: "femenino", edad: 18 },
	{ nombre: "Juan Cristóbal Pazos", genero: "masculino", edad: 30 },
	{ nombre: "David Wazowski", genero: "masculino", edad: 31 }
	];

	var arreglo_mujeres = companeritos
		.filter(function(companero){
			return companero.genero === "femenino";
		}) .map(function(companero){
			return " " + companero.nombre;
		});

	var total_edad_mujeres = companeritos
		.filter(function(companero){
			return companero.genero === "femenino";
		}) .map(function(companero){
			return companero.edad;
		}) .reduce(function(anterior, actual){
			return anterior+actual;
		},0);

	var arreglo_hombres = companeritos
		.filter(function(companero){
			return companero.genero === "masculino";
		}).map(function(companero){
			return " " + companero.nombre;
		});

	var total_edad_hombres = companeritos
		.filter(function(companero){
			return companero.genero === "masculino";
		}) .map(function(companero){
			return companero.edad;
		}) .reduce(function(anterior, actual){
			return anterior+actual;
		},0);

	var total_edad = total_edad_hombres + total_edad_mujeres;

	document.getElementById("mostrar_companeros_mujeres").innerHTML = "Las mujeres del curso son: " + arreglo_mujeres + " y sumadas sus edades dan: " + total_edad_mujeres;
	document.getElementById("mostrar_companeros_hombres").innerHTML = "Los hombres del curso son: " + arreglo_hombres + " y sumadas sus edades dan: " + total_edad_hombres;
	document.getElementById("mostrar_companeros_total").innerHTML = "Sumadas las edades de todos dan: " + total_edad;
}

function bebidas() {
	function Persona (nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
		this.ebriedad = 0;
		this.sorbos_totales = 0;
		
		this.sorbo_bebida = function (bebida) {
			if ((bebida.alcoholica === false) && (bebida.sorbos > 0) && (this.sorbos_totales < 30)){
				bebida.sorbos -= 1;
				this.sorbos_totales += 1;
				console.log(this.nombre + " de ha bebido una bebida no-alcoholica <br> A la bebida le quedan " + bebida.sorbos + " sorbos");
			} else if ((bebida.alcoholica === true) && (this.edad >= 18) && (bebida.sorbos > 0) && (this.ebriedad < 25) && (this.sorbos_totales < 30)){
				bebida.sorbos -= 1;
				this.ebriedad += 1;
				this.sorbos_totales += 1;
				console.log(this.nombre + " ha bebido una bebida alcoholica y su ebriedad es de " + this.ebriedad + "<br> A la bebida le quedan " + bebida.sorbos + " sorbos");
			} else if (((bebida.alcoholica === true) && (this.edad < 18)) && (bebida.sorbos > 0) && (this.sorbos_totales < 30)){
				console.log(this.nombre + " no puede beber alcohol, es menor de edad");
			} else if (bebida.sorbos <= 0){
				console.log("La bebida se ha acabado");
			} else if (this.sorbos_totales >= 30) {
				console.log(this.nombre + " ya ha bebido demasiado (más de 30 sorbos)");
			} else if (this.ebriedad >= 25){
				console.log("¡" + this.nombre + " está borracho, ya no puede seguir bebiendo bebidas alcohólicas!");
			}
			return this;
		};
	}

	function Bebida (alcoholica) {
		this.alcoholica = alcoholica;
		this.sorbos = 10;
	}

	var persona1 = new Persona("Pedro", 20);
	var persona2 = new Persona("Pepito", 12);
	var bebida1 = new Bebida(true);
	var bebida2 = new Bebida(false);
	var bebida3 = new Bebida(true);
	var bebida4 = new Bebida(true);

	persona2.sorbo_bebida(bebida2).sorbo_bebida(bebida4);
	persona1.sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida1).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida3).sorbo_bebida(bebida4).sorbo_bebida(bebida4).sorbo_bebida(bebida4).sorbo_bebida(bebida4).sorbo_bebida(bebida4).sorbo_bebida(bebida4).sorbo_bebida(bebida2).sorbo_bebida(bebida2).sorbo_bebida(bebida2).sorbo_bebida(bebida2).sorbo_bebida(bebida2).sorbo_bebida(bebida2);
}