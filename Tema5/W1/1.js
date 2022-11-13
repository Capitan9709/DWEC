window.onload = () => {
    let numEnlaces = document.getElementsByTagName("a").length;
    console.log("Número de enlaces: " + numEnlaces);
    
    let direccionPenEnlace = document.getElementsByTagName("a")[numEnlaces - 2].href;
    console.log("Dirección del penúltimo enlace: " + direccionPenEnlace);

    let numGoogle = document.querySelectorAll("a[href='https://www.google.es/']").length;
    console.log("Número de enlaces a Google: " + numGoogle);

    let ultimoParrafo = document.getElementsByTagName("p")[document.getElementsByTagName("p").length - 1];
    let numEnlacesParrafo = ultimoParrafo.getElementsByTagName("a").length;
    console.log("Número de enlaces del tercer párrafo: " + numEnlacesParrafo);

}