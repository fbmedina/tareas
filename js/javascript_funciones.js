function numero_mayor() {
	var numero1 = parseInt(prompt("Primer número"));
	var numero2 = parseInt(prompt("Segundo número"));
	var numero3 = parseInt(prompt("Tercer número"));


	if ((numero1 == numero2) && (numero2 == numero3)){ 
		console.log("Los tres números son iguales");
	}

	if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
		console.log("No escribiste números ¡Idiota!");
	}

	if ((numero1 >= numero2) && (numero1 >= numero3)){
		console.log(numero1 + " es el número mayor");

	} else if ((numero1 <= numero2) && (numero2 >= numero3)){
		console.log(numero2 + " es el número mayor");

	} else if ((numero1 >= numero2) && (numero1 <= numero3)){
		console.log(numero3 + " es el número mayor");
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
	
	aconsole.log("¡Contraseña correcta!");
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

	console.log(suma);
}

function n_positivos_do_while() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;
	var i = 1;

	do {
		suma += i;
		i += 1;
	} while (i <= n);

	console.log(suma);
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

	console.log(suma);

}

function n_positivos_pares_for() {
	var n = Math.floor(prompt("Ingrese un número"));
	var suma = 0;

	for (var i = 2; i <= n; i += 1){
		if (i % 2 === 0){
			suma += i;
		}
	}

	console.log(suma);
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

	for (var i = 0; i < size; i += 1){
		for (var j = i + 1; j < size; j += 1){
			piramide += " ";
		}

		for (j = 0; j < 2 * i + 1; j += 1){
			piramide += "*";
		}

		piramide += "\n";
  	}

  	console.log(piramide);
}