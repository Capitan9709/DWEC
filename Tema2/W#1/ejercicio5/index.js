// W.1 -> 5

function reloj(){
    document.open();
    const actualDate = new Date();
    var hour = actualDate.getHours();
    var minutes = actualDate.getMinutes();
    var seconds = actualDate.getSeconds();
    document.write(`${hour}:${minutes}:${seconds}<br>`);
    setTimeout(reloj,1000);
}

setTimeout(reloj,1000);
