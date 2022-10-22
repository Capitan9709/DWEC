
let cont_1 = 0;
let cont_2 = 0;
let cont_3 = 0;
let cont_4 = 0;
let cont_5 = 0;
let cont_6 = 0;

function lanzamiento() {
    num = Math.floor(Math.random() * (1,6) + 1);
    return num;
}
for (let i = 0; i<6000;i++){
    num = lanzamiento();
    if (num === 1)
        cont_1 ++;
    else if (num === 2)
        cont_2 ++;
    else if (num === 3)
        cont_3 ++;
    else if (num === 4)
        cont_4 ++;
    else if (num === 5)
        cont_5 ++;
    else if (num === 6)
        cont_6 ++;
}
document.write("Contador 1: "+cont_1+"<br>","Contador 2: "+cont_2+"<br>","Contador 3: "+cont_3+"<br>","Contador 4: "+cont_4+"<br>","Contador 5: "+cont_5+"<br>","Contador 6: "+cont_6+"<br>");

