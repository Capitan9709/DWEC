// EJERCICIO: Dado un array con los días de la semana devuelve otro array con los días en mayúsculas

let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let resultDia = semana.map(dia => dia.toLocaleUpperCase());
document.write(resultDia);
