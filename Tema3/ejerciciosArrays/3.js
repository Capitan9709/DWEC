// EJERCICIO: Dado un array con los días de la semana obtén todos los días que empiezan por ‘M’

let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let result = semana.filter((dia) => dia.charAt("0") == "M");
document.write(result);