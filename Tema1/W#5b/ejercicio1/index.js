// WS#5 --> 1 switch

mes = prompt("Elige un mes");

switch (mes) {
    case"enero":
    case"marzo":
    case"mayo":
    case"julio":
    case"agosto":
    case"octubre":
    case"diciembre":
        alert("El mes "+mes+" tiene 31 dias");
        break;
    case"abril":
    case"junio":
    case"septiembre":
    case"noviembre":
        alert("El mes "+mes+" tiene 30 dias");
        break;
    case"febrero":
        alert("El mes febrero tiene 28 o 29 dias");
        break;
    default:
        alert("No existe ese mes");
}
