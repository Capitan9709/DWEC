// Ejemplo1
/*let _miVariable="jose";

console.log("El valor de mi variable es= "+_miVariable);
_miVariable=true;
console.log(`El valor de mi variable es= ${_miVariable}`);

console.log("Si o no juan");
document.write("<h1>Contenido de mi web</h1>");

let a = 3;
let b = 5;

let suma = a+b;
let mult = a*b;
console.log("El resultado de la suma es= "+suma);
console.log("El resultado de la multiplicacion es= "+mult);
*/
// let c = 5;
// let d = 9;
// let booleano = false;
// if ((c === 6 || c === 27) && d === 9) {
//     console.log("la condicion es true");
//     console.log("Fin del IF");
// } 
// else{
//     console.log("la condicion es false");
// }

// switch (c) {
//     case 6:
//         console.log("c vale 6");
//         console.log("Fin el case");
//         break;
//     case 5:
//         console.log("c vale 5");
//         break;
//     default:
//         console.log("a es distinto de 6 y 5");
// }

// edad = parseInt(prompt("Introduce tu edad"));
// console.log(edad);
// alert(edad);

// for (let i=0; i<10; i++){
//     document.write(i+"<br>");
// }

// for (let c=10; c>=0; c--) {
//     document.write(c+"<br>");
// }

// let nombre=["pepe","juan","armando"];

// for (let i=0; i<nombre.length; i++) {
//     document.write(nombre[i]+"<br>");
// }

// for (let j of nombre)
//     document.write(j+"<br>");

// let contador = 9;

// while (contador<=10){
//     document.write(contador+"<br>");
//     contador++;
// }

// do {
//     document.write(contador+"<br>");
//     contador++;
// }
// while (contador<=10)

// function suma(a=0,b=0,c=0) {
//     let resultado = a+b+c;
//     document.write(resultado);
// }

// let numeros = [1,5,8]
// suma(...numeros);

function suma(...numeros) {
    document.write(numeros.length);
}

suma(1,6,8,6);

