// WS#6 --> 4.13

let columns = parseInt(prompt("Numero de columnas: "));
let high = parseInt(prompt("Pixeles de altura: "));
let width = parseInt(prompt("Pixeles de anchura: "));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write(`<tr bgcolor="white" height="${high}">`);

let i = 0

while (i<columns) {
    document.write(`<td width="${width}">&nbsp;</td>`);
    i++;
}

document.write('</tr>');
document.write('</table>');

