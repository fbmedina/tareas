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