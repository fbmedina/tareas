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