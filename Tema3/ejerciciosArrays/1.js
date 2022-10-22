// EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:

// Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
// Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
// Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)

let compra = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];
document.write(compra+"<br>");

compra.splice(1,1);
document.write(compra+"<br>");

compra.splice(3,0,"Naranjas","Sandia");
document.write(compra+"<br>");

compra.splice(1,1,"Cerezas","Nisperos");
document.write(compra);
