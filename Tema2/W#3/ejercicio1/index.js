// W.3 -> 1

// 1.a
// function invierteCadena(cadena){
//     document.write(cadena.split(" ").reverse().join(" ")+"<br>");
// }
// invierteCadena("Escribe una frase...");

// 1.b
// function inviertePalabra(cadena){
//     document.write(cadena.split("").reverse().join("")+"<br>");
// }
// inviertePalabra("Palabras invertidas");

// 1.c
// function encuentraPalabraMasLarga(cadena){
//     let cadenaSplit = cadena.split(" ");
//     let palabra = undefined;
//     palabra = cadenaSplit[0];
//     for (let i=0;i<cadenaSplit.length;i++){
//         if (palabra.length <= (cadenaSplit[i].length)){
//             palabra = cadenaSplit[i];
//         }
//     }
        

//     document.write("La palabra mas larga es: "+palabra);
// }
// encuentraPalabraMasLarga("palabra corta palabra muy laaaargaaa");

// 1.d
// function filtraPalabrasMasLargas(cadena, num){
//     let contador = 0;
//     let cadenaSplit = cadena.split(" ");
//     for (let i=0;i<cadenaSplit.length;i++){
//         if (num <= (cadenaSplit[i].length)){
//             contador += 1;
//         }
//     }
//     document.write("Hay "+contador+" palabras que tienen los mismos o mas caracteres que el numero "+num);

// }

// filtraPalabrasMasLargas("Eres un ceporro bastante grande", 5);

// 1.e
// function cadenaBienFormada(cadena){
//     cadena = cadena.charAt(0).toUpperCase()+cadena.slice(1).toLowerCase();
//     document.write(cadena);
// }

// cadenaBienFormada("eSto Es una PruebA De CadEnA");
