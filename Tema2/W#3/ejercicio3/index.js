// W.3 -> 3

function localizarSubcadena(cadena, subcadena) {
    const posiciones = [];
    let cadenaSplit = cadena.split(" ");
    for (let i=0;i<cadenaSplit.length;i++) {
        if (cadenaSplit[i] === subcadena){
            posiciones.push(i);
        }
    }
    document.write("Las posiciones donde se repiten las subcadenas son: "+[...posiciones]);
}

localizarSubcadena("hola buenas buenas tardes", "buenas");
