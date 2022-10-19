// WS#5 --> 6 condicionales

edad = parseInt(prompt("Introduce tu edad"));
localidad = prompt("Introduce tu localidad");


if ((edad>17)&&(edad<31)&&(localidad=="Madrid")){
    console.log("Puedes acceder al carnet de empresarios");
} 
else{
    console.log("No puedes acceder al carnet de empresarios");
}

