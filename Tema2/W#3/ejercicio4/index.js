// W.3 -> 4

function separarPorLetras(cadena) {
    const resultado = [];
    let cadenaSplit = cadena.toLowerCase().split("");
    for (let i=0;i<cadenaSplit.length;i++) {
        if (cadenaSplit[i] === ("a")){
            resultado.push(cadenaSplit[i]);
        }
        else if (cadenaSplit[i] === ("e")){
            resultado.push(cadenaSplit[i]);
        }
        else if (cadenaSplit[i] === ("i")){
            resultado.push(cadenaSplit[i]);
        }
        else if (cadenaSplit[i] === ("o")){
            resultado.push(cadenaSplit[i]);
        }
        else if (cadenaSplit[i] === ("u")){
            resultado.push(cadenaSplit[i]);
        }
        else if (cadenaSplit[i] === (" ")){
            continue;
        }
        else {
            resultado.unshift(cadenaSplit[i])
        }
    }
    document.write(resultado);
}

separarPorLetras("Esto es una cadena simple");
