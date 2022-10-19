// WS#6 --> 4.14

let columns = parseInt(prompt("Numero de columnas: "));
let high = parseInt(prompt("Pixeles de altura: "));
let width = parseInt(prompt("Pixeles de anchura: "));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write(`<tr bgcolor="white" height="${high}">`);

let i = 0

while (i<columns) {

    let color;

    if ((i%2) === 0) {
        color = 'black';
    }
    else {
        color = 'white';
    }

    document.write(`<td width="${width}" bgcolor="${color}">&nbsp;</td>`);
    i++;
}

document.write('</tr>');
document.write('</table>');

