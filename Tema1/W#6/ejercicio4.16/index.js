// WS#6 --> 4.16

let number = parseInt(prompt("Introduce un numero META: "));
console.log("Numero aceptado...");

let j2 = parseInt(prompt("Adivina el numero elegido anteriormente: "));


do {
    if (j2 > number) {
        console.log("Tu numero es mayor que el objetivo");
    }
    else if (j2 < number) {
        console.log("Tu numero es menor que el objetivo");
    }
    j2 = parseInt(prompt("Escribe otro numero"));
}

while (j2!=number)

console.log("Has Acertado!");