let ciudades = ["Madrid", "Barcelona", "Valencia", "Malaga", "Cadiz", "Santander"];


function hangman() {
    let ciudad = ciudades[(Math.random() * ciudades.length).toFixed(0)];
    let objetivo = ciudad.toLowerCase();

    let palabra = objetivo.split("");
    for(let i = 0; i < palabra.length; i++){
        let letra = document.createElement("span");
        letra.innerHTML = "_"+" ";
        document.getElementById("parrafo").appendChild(letra);
    }
    
    console.log(ciudades);
    console.log(objetivo);

    let intentos = 10;
    let aciertos = 0;
    document.getElementById("resultado").innerHTML = "Intentos Restantes: "+intentos;
                    
    let divs = document.getElementsByClassName("letras");

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", (e) => {
            let letraEncontrada = false;
            console.log(e.target.innerHTML);
            for(let j = 0; j < palabra.length; j++){
                if (e.target.innerHTML == palabra[j]) {
                    e.target.style.backgroundColor = "green";
                    e.target.style.color = "white";
                    console.log("letra "+palabra[j]+" encontrada");
                    letraEncontrada = true;
                }
            }
            if(letraEncontrada == true) {
                aciertos += 1;
            }
            else{
                e.target.classList.add("letraErronea");
                if(e.target.classList.contains("letraErronea")){ 
                    e.target.style.opacity = "0";
                }
                intentos -=1;
                document.getElementById("resultado").innerHTML = "Intentos Restantes: "+intentos;
                if(intentos == 0 || intentos <= 0){
                    document.getElementById("resultado").innerHTML = "¡Has perdido!";
                }
            }
            if (palabra.length == aciertos) {
                document.getElementById("resultado").innerHTML = "¡Has ganado!";  
            }
        });
    }
}

window.onload = () => {
    hangman();
    
}