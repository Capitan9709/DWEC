// WS#6 --> 4.15

let number = parseInt(prompt("Introduce un numero META: "));
console.log("Numero aceptado...");

let j2 = parseInt(prompt("Adivina el numero elegido anteriormente: "));

while (j2!=number) {
    if (j2 > number) {
        console.log("Tu numero es mayor que el objetivo");
    }
    else if (j2 < number) {
        console.log("Tu numero es menor que el objetivo");
    }
    j2 = parseInt(prompt("Escribe otro numero"));
}
console.log("Has Acertado!");