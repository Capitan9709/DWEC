// W.3 -> 2

function Determinator(cadena){
    if (cadena == cadena.toUpperCase()) 
        document.write("La cadena esta formada solo por mayusculas");
    else if (cadena == cadena.toLowerCase())
        document.write("La cadena esta formada solo por minusculas");
    else 
        document.write("La cadena esta formada por mayusculas y minusculas");
}

Determinator("Frase CoN Mayusculas Y MINUSCULAS");
// Determinator("FRASE CON MAYUSCULAS");
// Determinator("frase con minusculas");
