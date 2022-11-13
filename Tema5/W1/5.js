document.getElementById("añadir").addEventListener("click", añadirArchivo);

function añadirArchivo(){
    let elemento = document.createElement("input");
    elemento.setAttribute("type", "file");
    document.getElementById("form").appendChild(elemento);
}