let num = 5;
let potenciador = 2;

const potencia = function (num, potenciador) {
    if (potenciador == 0)
        return (1);
    else 
        return (num ** potenciador);
}
document.write(potencia(num, potenciador));
