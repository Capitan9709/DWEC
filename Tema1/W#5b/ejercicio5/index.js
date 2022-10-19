// WS#5 --> 5 if/else

examen1 = parseInt(prompt("Introduce la nota del examen 1"));
examen2 = parseInt(prompt("Introduce la nota del examen 2"));
practica1 = parseInt(prompt("Introduce la nota de la practica 1"));
practica2 = parseInt(prompt("Introduce la nota de la practica 2"));

med_examen = (examen1 + examen2) /2;
med_practica = (practica1 + practica2) /2;

if (med_examen>=4.5) {
    porcentaje_examen = med_examen - (med_examen * 0.75);
}

if (med_practica>=4.5) {
    porcentaje_practica = med_practica - (med_practica* 0.25);
}

if ((porcentaje_examen + porcentaje_practica) >= 5) {
    console.log("La media esta aprobada con una nota de ",porcentaje_examen+porcentaje_practica);
}
else {
    console.log("La media esta suspensa");
}