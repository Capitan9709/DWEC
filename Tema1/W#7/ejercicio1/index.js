// WS#7 --> 1

function suma(...numeros) {
    let total = 0;
    for (let i=0;i<numeros.length;i++) {
        
        total += numeros[i];
    }
    document.write("El resultado es: "+total);
}

suma(1,6,8,10,2);
