// W.1 -> 3

let i = 60;

function s60(){
    if (i != 0) {
        i -= 1;
        document.write(i+"<br>");
        setTimeout(s60,1000);
    }
    else {
        document.write("Han pasado 60 segundos!");
    }
    
}
setTimeout(s60, 1000)
