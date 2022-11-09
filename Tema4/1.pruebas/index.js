// const miH1 = document.getElementById("miTitulo");
// const btn = document.querySelector('button');

// function random(number) {
//     return Math.floor(Math.random() * (number+1));
// }

// function cambiaColor() {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//     alert("Funciona");
// };

// btn.addEventListener('click', cambiaColor);
// miH1.onclick = cambiaColor;
// addEventListener('click', () => {cambiaColor()})

window.onload = () => {
    let btonRojo = document.getElementById("rojo");
    let btonAzul = document.getElementById("azul");

    btonRojo.addEventListener("click",fondoRojo);
    btonAzul.addEventListener("click",fondoAzul);

}

function fondoRojo(){
    setCookie("colorFondo","red",15);
    document.body.style.backgroundColor = "red";
}

function fondoAzul(){
    setCookie("colorFondo","blue",15);
    document.body.style.backgroundColor = "blue";
}


if (getCookie("colorFondo"))
    console.log(document.cookie);
else
    document.cookie = "colorFondo = red;"

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    if(exdays === 0)
        var expires = "expires=";
    else
        var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


