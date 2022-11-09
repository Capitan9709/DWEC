window.onload = () => {
    document.write("<div border='1'>");
    document.write("<table border='1'>");
        for(let i = 0; i < 100; i++){
            document.write("<tr>");
                for(let j = 0; j < 100;j++){
                    document.write("<td width='2px' height='2px' style='border-style: hidden;'></td>");
                }
            document.write("</tr>");
        }
    document.write("</table>");
    document.write("</div>");
    document.write("<button>Borrar</button>");

    let celdas = document.getElementsByTagName("td");
    let boton = document.querySelector("button");

    for (i = 0; i < celdas.length; i++) {
        celdas[i].onmouseover = cambiaColor;
    }
    
    boton.addEventListener("click",()=>{
        for (i = 0;i < celdas.length;i++) {
            celdas[i].style.backgroundColor = "white";
        }
    })

    function cambiaColor(e) {
        if (e.ctrlKey === true) {
            e.target.style.backgroundColor = "red";
        } else if (e.shiftKey === true) {
            e.target.style.backgroundColor = "black";
        } else if (e.altKey === true) {
            e.target.style.backgroundColor = "white";
        }
    }
}
    