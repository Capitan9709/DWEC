// EJERCICIO: Dado el array arr1 con los días de la semana haz un array arr2 que sea igual al arr1. Elimina de arr2 el último día y comprueba quá ha pasado con arr1. Repita la operación con un array llamado arr3 pero que crearás haciendo una copia de arr1.

let arr1 = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let arr2 = arr1;
arr2.pop();
document.write(arr1+"<br>");

let arr3 = arr1;
arr3.pop();
document.write(arr1);
