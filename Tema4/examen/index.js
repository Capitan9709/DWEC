// Ejercicio 5 -----------------------

function Exa5(string){
    string = string.toLowerCase();
    let array = string.split("");
    var objeto = []; 
    for(var i in array){
        objeto[array[i]] = ( objeto[array[i]] || "" ) + "+"; 
    }
    return objeto;

}

console.log(Exa5("Chicago"));
console.log(Exa5("Granada"));
console.log(Exa5("Malaga"));

// Ejercicio 6 -----------------------
// Este ejercicio no funciona correctamente

function sumaArray(a, b){
    return a + b;
}

function Exa6(...array){
    let resultado = [];
    for(let i = 0; i < array.length; i++){
        resultado.push(array[i].reduce(sumaArray));
    }
    return resultado;
}

console.log(Exa6([[1,4],[3,1],[2,2]]));

// Ejercicio 7 -----------------------

function Exa7(id){
    let elemento = document.getElementById(id);
    elemento.style.fontSize = "12px";
    elemento.style.color = "green";
    elemento.style.backgroundColor = "blue";
    elemento.style.fontFamily = "ComicSans";
}

Exa7("DIV1");

// Ejercicio 8 -----------------------

// Funcion para generar numeros aleatorios (depende del parametro)
function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

// Funcion para generar el codigo rgb
function colorRGB(){
    
        var color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        return "rgb" + color;
    
}

window.onload = () => {
    let divs = document.getElementsByClassName("colores");

    // Cada vez que se recargue la pagina se 
    // van a generar nuevos colores aleatorios
    function cambiarColores(){
        for(let i = 0; i < divs.length; i++){
            let color = colorRGB();
            divs[i].style.backgroundColor = color;
        }
    }
    cambiarColores();

    // Cada vez que se haga click en un div, este se mostrara en la 
    // consola diciendo cuantas veces ha sido clickado
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", () => {
            divs[i].clicks = divs[i].clicks || 1;
            console.log("El div con color " + divs[i].style.backgroundColor + " ha sido clickado " + divs[i].clicks + " veces");
            divs[i].clicks++;
        });
    }
}