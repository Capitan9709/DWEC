let imagenes = ["./imagenes6/img1.jpg", "./imagenes6/img2.jpg", "./imagenes6/img3.jpg", "./imagenes6/img4.gif", "./imagenes6/img5.jpg"];

document.getElementById("siguiente").addEventListener("click", siguienteImagen);
document.getElementById("anterior").addEventListener("click", anteriorImagen);

function siguienteImagen(){
    let imagen = document.getElementById("imagen");
    let indice = imagenes.indexOf(imagen.getAttribute("src"));
    if (indice < imagenes.length - 1){
        imagen.setAttribute("src", imagenes[indice + 1]);
    }
}

function anteriorImagen(){
    let imagen = document.getElementById("imagen");
    let indice = imagenes.indexOf(imagen.getAttribute("src"));
    if (indice > 0){
        imagen.setAttribute("src", imagenes[indice - 1]);
    }
}
