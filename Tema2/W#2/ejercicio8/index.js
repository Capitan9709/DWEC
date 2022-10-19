// W.2 -> 8

let num_img = (Math.floor(Math.random()*(3))+ 1);
if (num_img === 1)
    document.write("<img id='imagen1' src='./img1.jpg' width='500' heigh='500'>");
else if (num_img ===2)
    document.write("<img id='imagen2' src='./img2.jpg' width='500' heigh='500'>");
else 
    document.write("<img id='imagen3' src='./img3.jpg' width='500' heigh='500'>");