// WS#6 --> 4.19

let ancho = parseInt(prompt("Pixeles de anchura: "));

document.write('<table border="0" cellspacing="2" bgcolor="black">');

for (let c = 0; c<8;c++) {
    document.write(`<tr bgcolor="white">`);

    for (let i = 0; i<8; i++) {
            
        let color;
        
        if (i%2 == 0) {
            if(c%2 == 0) {
                color = 'black';
            }
            else {
                color = 'white';
            }
        }
        else if (i%2 != 0) {
            if(c%2 != 0) {
                color = 'black';
            }
            else {
                color = 'white';
            }
        }
        document.write(`<td width="${ancho}" height="${ancho}" bgcolor="${color}">&nbsp;</td>`);
    }
    document.write('</tr>');

}

document.write('</table>');
