function n_mayor() {
	var n1 = parseInt(prompt("Primer número"));
	var n2 = parseInt(prompt("Segundo número"));
	var n3 = parseInt(prompt("Tercer número"));

	if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
		console.log("No escribiste números ¡Idiota!");
	}

	if ((n1 == n2) && (n2 == n3)){ 
		console.log("Los tres números son iguales");
	}

	if ((n1 >= n2) && (n1 >= n3)){
		console.log(n1 + " es el número mayor");
	} else if ((n1 <= n2) && (n2 >= n3)){
		console.log(n2 + " es el número mayor");
	} else if ((n1 >= n2) && (n1 <= n3)){
		console.log(n3 + " es el número mayor");
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
			console.log("Han empatado");
		}
		else {
			if ((user_choice === "piedra") && (cpu_choice === "tijera")) {
				console.log("El computador escogió tijera ¡Has ganado!");
			}

			else if ((user_choice === "piedra") && (cpu_choice === "papel")) {
				console.log("El computador escogió papel ¡Has perdido!");
			}

			else if ((user_choice === "papel") && (cpu_choice === "piedra")) {
				console.log("El computador escogió piedra ¡Has ganado!");
			}

			else if ((user_choice === "papel") && (cpu_choice === "tijera")) {
				console.log("El computador escogió tijera ¡Has perdido!");
			}

			else if ((user_choice === "tijera") && (cpu_choice === "papel")) {
				console.log("El computador escogió papel ¡Has ganado!");
			}

			else if ((user_choice === "tijera") && (cpu_choice === "piedra")) {
				console.log("El computador escogió piedra ¡Has perdido!");
			}
		}
	}

	else {
		console.log("No escogiste un objeto válido");
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
		console.log("Billetes de $20.000: " + billetes_20_mil);
	}

	if (billetes_10_mil >= 1) {
		console.log("Billetes de $10.000: " + billetes_10_mil);
	}

	if (billetes_5_mil >= 1) {
		console.log("Billetes de $5.000: " + billetes_5_mil);
	}

	if (billetes_2_mil >= 1) {
		console.log("Billetes de $2.000: " + billetes_2_mil);
	}

	if (billetes_mil >= 1) {
		console.log("Billetes de $1.000: " + billetes_mil);
	}

	if (monedas_500 >= 1) {
		console.log("Monedas de $500: " + monedas_500);
	}

	if (monedas_100 >= 1) {
		console.log("Monedas de $100: " + monedas_100);
	}

	if (monedas_50 >= 1) {
		console.log("Monedas de $50: " + monedas_50);
	}

	if (monedas_10 >= 1) {
		console.log("Monedas de $10: " + monedas_10);
	}

	if (monedas_5 >= 1) {
		console.log("Monedas de $5: " + monedas_5);
	}

	if (monedas_1 >= 1) {
		console.log("Monedas de $1: " + monedas_1);
	}
}

function password_while() {
	var user_tried;
	var password = "contraseña123";

	while (user_tried !== password){
		user_tried = prompt("Adivine la contraseña");
	}
	
	console.log("¡Contraseña correcta!");
}

function password_do_while() {
	var user_tried;
	var password = "contraseña123";

	do {
		user_tried = prompt("Adivine la contraseña");
	} while (user_tried !== password);
	
	console.log("¡Contraseña correcta!");
}

function n_positivos_while() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;
	var i = 1;

	while (i <= n){
		suma += i;
		i += 1;
	}

	console.log("La suma es: " + suma);
}

function n_positivos_do_while() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;
	var i = 1;

	do {
		suma += i;
		i += 1;
	} while (i <= n);

	console.log("La suma es: " + suma);
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

	console.log("La suma sólo de los números pares es: " + suma);

}

function n_positivos_pares_for() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;

	for (var i = 2; i <= n; i += 1){
		if (i % 2 === 0){
			suma += i;
		}
	}

	console.log("La suma sólo de los números pares es: " + suma);
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

	console.log(secuencia);
}

function cuadrado() {
	var size = Math.floor(prompt("Ingrese el tamaño del lado del cuadrado"));
	var cuadrado = "";

	for (var i = 1; i <= size; i += 1){
  		for (var j = 1; j <= size; j += 1) {
    		cuadrado += "*";
    	}

    	cuadrado += '\n'; 
  	}

 	console.log(cuadrado);
}

function piramide() {
	var size = Math.floor(prompt("Ingrese el tamaño de la base de la pirámide"));
	var piramide = "";

	for (var i = 1; i <= size; i += 1){
  		for (var j = 1; j <= i; j += 1) {
    		piramide += "*";
    	}

    	piramide += "\n"; 
  	}

  	console.log(piramide);
}

function piramide_centrada() {
	var size = Math.floor(prompt("Ingrese el tamaño de la base de la pirámide"));
	var piramide = "";

	for (var i = 0; i < size; i += 2){

		for (var j = i / 2; j < size / 2; j += 1){
			piramide += " ";
		}

		for (j = 0; j < i + 1; j += 1){
			piramide += "*";
		}

		piramide += "\n";
  	}

  	console.log(piramide);
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
			console.log("has ganado");
			break;
		} else if (count === oportunities) {
			console.log("has perdido");
			break;
		} else if (user > azar) {
			console.log("el número es más bajo");
		} else if (user < azar) {
			console.log("el número es más alto");
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

	console.log(resultado);
}

function n_al_derecho_reves() {
	var n = prompt("Ingrese un número");
	var resultado = "";

	for (var i = n.length -1; i >= 0; i -= 1){
		resultado += n[i];
	}

	if (resultado === n) {
		console.log("El número al derecho y al revés es igual");
	} else {
		console.log("El número al derecho y al revés no es igual");
	}
}

function n_primo() {
	var n = Math.floor(prompt("Ingrese un número"));
	
	if ((n === 1) || (n === 2)){
		console.log("Es primo");
	} else {
		for (var i = 2; i < n; i += 1){
	        if (n % i === 0) {
	            console.log("No es primo"); 
	            break;
	        } else{
	            console.log("Es primo");
	            break; 
    		}
		}
	}
}

function n_primos() {
	var n = Math.floor(prompt("Ingrese un número"));

	for (var i = 1; i < 4; i += 1){
		console.log(i);
	}

	for (i = 4; i <= n; i += 1){
	    var primo = 0;
	    for (var j = 2; j < i ; j += 1){
			if (i % j === 0){
				primo = 1;
			}
		}
	    if (primo === 0) {
	    	console.log(i);
	    }
	}
}

function n_par_o_impar(){
	var n = Math.floor(prompt("Escoge un número"));
	
	if (n % 2 === 0) {
		console.log("Es par");
	} else if (n % 2 !== 0){
		console.log("Es impar");
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

	console.log(meses_pares);
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

	console.log(solo_las_vocales);
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

	console.log("Las mujeres del curso son: " + arreglo_mujeres + " y sumadas sus edades dan: " + total_edad_mujeres);
	console.log("Los hombres del curso son: " + arreglo_hombres + " y sumadas sus edades dan: " + total_edad_hombres);
	console.log("Sumadas las edades de todos dan: " + total_edad);
}