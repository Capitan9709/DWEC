function generarImagenesAleatorias() {
    let imagenes = ["html5","javascript","mysql","php","python"];
    let posiciones = [0,1,2,3,4,5,6,7,8,9];
  
    let cartas = document.getElementsByClassName("carta");
  
    for (let i = 0; i < 5; i++) {
       
        // Generar un número aleatorio entre 0 y 4
        let numeroRandom = Math.floor(Math.random() * imagenes.length);
        let imgs = imagenes[numeroRandom];
        for(let j = 0; j < 2; j++) {
  
            // Generar un número aleatorio entre 0 y 9
            let randonNumeroPosicion = Math.floor(Math.random() * posiciones.length)
    
            // Obtener la posición de la carta
            let randomPosicion = posiciones[randonNumeroPosicion];
    
            // Eliminar la posición de la lista de posiciones
            posiciones.splice(randonNumeroPosicion, 1);
            
            cartas[randomPosicion].setAttribute("imagen",imgs);
            let imagen = cartas[randomPosicion].children[0];
            imagen.setAttribute("src","imgs/" + imgs + ".svg");
            imagen.setAttribute("alt",imgs);
        }
        // Eliminar el imagen de la lista de imagenes
        imagenes.splice(numeroRandom,1);
    }
}
  
window.onload = generarImagenesAleatorias();
  
    function activarTimer() {
        timer = setInterval(() => {
        let time = document.getElementById("seconds");
        let seconds = Number(time.innerHTML);
        seconds++;
        if (time.innerHTML < 9) {
            time.innerHTML = "0" + seconds;
        } else {
            time.innerHTML = seconds;
        }
        if (seconds === 60) {
            let minutes = document.getElementById("minutes");
            let minutesNumber = Number(minutes.innerHTML);
            minutesNumber++;
            if (minutes.innerHTML < 9) {
            minutes.innerHTML = "0" + minutesNumber;
            } else {
            minutes.innerHTML = minutesNumber;
            }
            time.innerHTML = "00";
        }
        }, 1000);
    }
  
    function pararTimer() {
        clearInterval(timer);
    }
  
  let contador = 0;
  let primeraCarta = "";
  let segundaCarta = "";
  let numeroPuntos = 0;
  let timerPulsado = false;
  // Se intento implementar las vidas
  let numeroVidas = 10;
  
  let cartas = document.querySelectorAll(".imagenes .carta");
  let result = document.getElementById("resultado");
  
  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (timerPulsado === false) {
        activarTimer();
        timerPulsado = true;
      }
      if (numeroVidas > 0) {
        carta.classList.add("clicked");
        
        // Si el contador es 0, la carta es la primera carta
  
        if (contador == 0) {
          primeraCarta = carta.getAttribute("imagen");
          contador++;
        } else {
          segundaCarta = carta.getAttribute("imagen");
          contador = 0;
  
          if (primeraCarta == segundaCarta) {
            let cartasIguales = document.querySelectorAll(
              `.carta[imagen="${primeraCarta}"]`
            );
  
            // Agregamos la clase "matched" a las cartas iguales
  
            cartasIguales[0].classList.add("matched");
            cartasIguales[0].classList.remove("clicked");
            cartasIguales[1].classList.add("matched");
            cartasIguales[1].classList.remove("clicked");
  
            numeroPuntos++;
          } else {
            let cartasDiferentes = document.querySelectorAll(".carta.clicked");
  
            // Agregamos la clase "wrong" a las cartas diferentes
  
            cartasDiferentes[0].classList.add("wrong");
            cartasDiferentes[1].classList.add("wrong");
  
            setTimeout(() => {
              cartasDiferentes[0].classList.remove("wrong", "clicked");
              cartasDiferentes[1].classList.remove("wrong", "clicked");
            }, 800);
          }
        }
      } else {
        result.innerHTML = `You lost!`;
        result.style.backgroundColor = "red";
        result.style.color = "white";
        result.style.padding = "4px";
        result.style.borderRadius = "5px";
        pararTimer();
        cartas.forEach((carta) => {
          carta.style.opacity = 0.5;
        });
      }
  
      if (numeroPuntos == 5) {
        result.innerHTML = `You win!`;
        result.style.backgroundColor = "green";
        result.style.color = "white";
        result.style.padding = "4px";
        result.style.borderRadius = "5px";
        pararTimer();
      }
    });
  });