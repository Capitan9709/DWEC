// WS#6 --> 4.12

let columns = parseInt(prompt("Numero de columnas: "));
let high = parseInt(prompt("Pixeles de altura: "));
let width = parseInt(prompt("Pixeles de anchura: "));


document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write(`<tr bgcolor="white" height="${high}">`);

for (let i = 0; i<columns; i++) {

    let color;
    
    if ((i%2) === 0) {
        color = 'black';
    }
    else {
        color = 'white';
    }
    document.write(`<td width="${width}" bgcolor="${color}">&nbsp;</td>`);
}

document.write('</tr>');
document.write('</table>');
