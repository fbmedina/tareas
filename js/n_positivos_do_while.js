var n = Math.floor(prompt("Ingrese un número"));
var suma = 0;
var i = 1;

do {
	suma += i;
	i += 1;
} while (i <= n);

console.log(suma);