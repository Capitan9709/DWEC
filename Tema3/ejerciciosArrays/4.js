// EJERCICIO: Dado un array con los días de la semana obtén el primer día que empieza por ‘M’

let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let result = semana.find((dia) => dia.charAt("0") == "M");
document.write(result);