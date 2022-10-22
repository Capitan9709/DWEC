// EJERCICIO: Dado un array con los días de la semana obtén la posición en el array del primer día que empieza por ‘M’

let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let result = semana.findIndex((dia) => dia.charAt("0") == "M");
document.write(result);