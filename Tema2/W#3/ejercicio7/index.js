// W.3 -> 7

function palindromo(cadena) {
    cadena = cadena.toLowerCase();
    cadena = cadena.replace(/ /g, "");
    let cadenaSplitReves = cadena.split("").reverse();
    cadenaSplitReves = cadenaSplitReves.join("");
    if (cadena == cadenaSplitReves) {
      document.write(`${cadena} --> es palíndroma`);
    } else {
      document.write(`${cadena} --> NO es palíndroma`);
    }
  }
  
  palindromo("anabel");
  
