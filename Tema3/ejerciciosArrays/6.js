// EJERCICIO: Dado un array con los días de la semana indica si algún día empieza por ‘S’. Dado un array con los días de la semana indica si todos los días acaban por ‘s’

let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let resultDia = semana.some((dia) => dia[0] == "S");
document.write(resultDia+"<br>");

let resulTodos = semana.every((dia)=> dia.endsWith("s"));
document.write(resulTodos);