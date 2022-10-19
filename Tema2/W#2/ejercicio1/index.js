// W.2 -> 1
document.write("Numero entre 0 y 1: <br>");
document.write(Math.random()+"<br><br>");

document.write("Numero entre 100 y 200: <br>");
// Esto es para que el maximo del random sea 200 y el minimo 100
document.write(Math.floor(Math.random()*(200 - 100))+ 100+"<br><br>");

let max = parseInt(prompt("Elige un numero maximo"));
let min = parseInt(prompt("Elige un numero minimo"));

document.write("Numero entre "+max+" y "+min+": <br>");
document.write(Math.floor(Math.random()*(max - min))+ min+"<br><br>");
