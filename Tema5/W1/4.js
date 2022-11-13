let numElementos = document.getElementsByTagName("li").length;
document.getElementById("añadir").addEventListener("click", añadirElemento);

function añadirElemento() {
    let elemento = document.createElement("li");
    elemento.innerHTML = "Elemento " + numElementos;
    document.getElementById("lista").appendChild(elemento);
    numElementos++;
}
