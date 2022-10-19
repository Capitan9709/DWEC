// WS#5 --> 3 if/else


edad = parseInt(prompt("Introduce tu edad"));

if (edad<= 5) {
    console.log("Debes de estar en el Jardin de Infancia");
}
else if(edad>5 && edad<12) {
    console.log("Debes de estar en Primaria");
}
else if(edad>11 && edad<17) {
    console.log("Debes de estar en Secundaria");
}
else if(edad>16 && edad<22) {
    console.log("Debes de estar en Bachiller o Ciclos");
}
else {
    console.log("Debes de estar en Universidad");
}