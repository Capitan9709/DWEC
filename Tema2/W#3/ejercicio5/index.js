// W.3 -> 5

function noRepited(cadena) {
    cadena = cadena.replace(/ /g,"");
    let splitcadena = [...new Set(cadena)];
    result = splitcadena.join("");
    return result;
}

document.write(noRepited("aabcdc re dedaesd  "));
