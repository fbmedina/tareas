var user_tried;
var password = "contraseña123";


do {
	user_tried = prompt("Adivine la contraseña");
} while (user_tried !== password);
alert("¡Contraseña correcta!");