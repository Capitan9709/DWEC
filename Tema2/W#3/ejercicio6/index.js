// W.3 -> 6

function subCadena(cadena1, cadena2){
    if(cadena1.includes(cadena2)){
        document.write(`La subcadena --> ${cadena2}</br>Está incluida en la cadena --> ${cadena1}`);
    }
    else{
        document.write(`La subcadena --> ${cadena2}</br>NO Está incluida en la cadena --> ${cadena1}`);
    }
}

subCadena("hola buenas"," buenas")
