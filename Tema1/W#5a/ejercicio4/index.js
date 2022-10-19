// WS#5 --> 4 condicionales

num = parseInt(prompt("Introduce un numero"));



if (num>100){
    console.log("El numero tiene descuento");
    desc = num *0.15
    num = num-desc
    console.log("El numero queda en ",num," contando el descuento");
} 
else{
    console.log("A el numero no se le hace descuento");
}

