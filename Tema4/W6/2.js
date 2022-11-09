
window.onload = () => {
    let btonRojo = document.getElementById("rojo");
    let btonAzul = document.getElementById("azul");

    let btonPRojo = document.getElementById("p-rojo");
    let btonPBlanco = document.getElementById("p-blanco");

    let cerrarSesion = document.getElementById("cerrarSesion");

    btonRojo.addEventListener("click",fondoRojo);
    btonAzul.addEventListener("click",fondoAzul);

    btonPRojo.addEventListener("click",fondoPRojo);
    btonPBlanco.addEventListener("click",fondoPBlanco);

    cerrarSesion.addEventListener("click", deleteCookie);
}

function fondoRojo(){
    setCookie("colorFondo","red",15);
    document.body.style.backgroundColor = "red";
}

function fondoAzul(){
    setCookie("colorFondo","blue",15);
    document.body.style.backgroundColor = "blue";
}

function fondoPBlanco(){
    setCookie("colorParrafo","white",15);
    document.querySelector("p").style.backgroundColor = "white";
}

function fondoPRojo(){
    setCookie("colorParrafo","red",15);
    document.querySelector("p").style.backgroundColor = "red";
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

function setCookie(cname, cvalue, exmins) {
    const d = new Date();
    d.setTime(d.getTime() + (exmins*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "") {
        setCookie("username", username, 5);
      }
    }
}

function deleteCookie() {
    document.cookie = "username" + '=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/;';
}

checkCookie();