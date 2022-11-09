function validarMayuscula(string){
    let regexp = RegExp("[A-Z]");
    return regexp.test(string);
}

document.write("validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula: "+validarMayuscula("Prueba mayuscula")+"<br>");

function validarCaracteresEspeciales(string){
    let regexp = RegExp("[!@#$%^&]");
    return regexp.test(string);
}

document.write("validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres (!@#$%^&): "+validarCaracteresEspeciales("PruEbA")+"<br>");

function validarCorreo(string){
    let regexp = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regexp.test(string);
}

document.write("validarCorreo: El parámetro debe tener el formato correcto de un email: "+validarCorreo("fernandito@gmail.com")+"<br>");

function validarTarjetaCredito(string){
    let regexp = RegExp("^\d{16}$");
    return regexp.test(string);
}

document.write("validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito: "+validarTarjetaCredito("1234123412341234")+"<br>");

function validarLongitud(string){
    let regexp = RegExp("^.{8,}$");
    return regexp.test(string);
}

document.write("validarLongitud: El parámetro debe tener al menos 8 caracteres: "+validarLongitud("12345678")+"<br>");

function validarNumero(string){
    let regexp = RegExp(".*[0-9]*.$");
    return regexp.test(string);
}

document.write("validarNumero: El parámetro debe contener al menos un dígito: "+validarNumero("1hola")+"<br>");
