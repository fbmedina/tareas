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