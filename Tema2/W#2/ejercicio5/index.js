// W.2 -> 5

let a = parseInt(prompt("Elige el valor de a"));
let b = parseInt(prompt("Elige el valor de b"));
let c = parseInt(prompt("Elige el valor de c"));

let square = Math.pow(b,2);
let primero = square-4*a*c;

let x1 = (-(b)+Math.sqrt(primero)) / (2*a);
let x2 = (-(b)-Math.sqrt(primero)) / (2*a);

if (isNaN(x1) && isNaN(x2))
    document.write("No tiene Solucion");
else if (x1 === 0 || x2 === 0)
    document.write("Solo tiene una solucion, x = 0");
else {
    x1 = x1.toFixed(2);
    x2 = x2.toFixed(2);
    document.write("Ecuacion completada: <br>");
    document.write("X1 = "+x1+"<br>");
    document.write("X2 = "+x2+"<br>");
}
