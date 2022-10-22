let array = ["Juan", "Jaime", "Javi", "Geronimo", "Alberto", "Juan Carlos"];
let nombresJ = array.slice();
let j = 0;
for (let i=0; i<nombresJ.length; i++){
    if(nombresJ[i].charAt(0) != 'j'){
        nombresJ.splice(i,1,'');
    }
}
nombresJ.sort()
while(nombresJ[j]==''){
    nombresJ.shift();
}
document.write(nombresJ);