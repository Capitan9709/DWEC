// W.1 -> 2

const actualDate = new Date();
let fechaHoy = actualDate;
document.write("La fecha de hoy es: "+fechaHoy+"<br>");

let fecha85 = fechaHoy.setDate(fechaHoy.getDate()+85);
fecha85 = new Date(fecha85);
document.write("La fecha de hoy mas 85 dias es: "+fecha85+"<br>");

let fecha187 = fechaHoy.setDate(fechaHoy.getDate()-187);
fecha187 = new Date(fecha187);
document.write("La fecha de hoy mas 85 dias es: "+fecha187+"<br>");

let sum2y = fecha85.setFullYear(fecha85.getFullYear()+2);
sum2y = new Date(sum2y);
document.write(`${sum2y}<br>`);

let rest24h = fecha187.setHours(fecha187.getHours()-24);
rest24h = new Date(rest24h);
document.write(`${rest24h}<br>`);

let fecharesto = fecha85.getDate()-fecha187.getDate();
fecharesto = new Date(fecharesto);
document.write(`${fecharesto}<br>`);
