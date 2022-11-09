window.onload = ()=>{
    let normal = document.getElementById("normal");
    let minimalista = document.getElementById("minimalista");
    
    minimalista.addEventListener("click", () => {
        
        // Css del body
        let body = document.querySelector("body");
        body.style.backgroundColor = "rgb(240, 240, 166)";

        // Css de los links
        let rectangulo = document.getElementById("rectangulo");
        rectangulo.style.padding = "2px"
        rectangulo.style.color = "blue";
        rectangulo.style.backgroundColor = "rgb(150, 220, 220)";
        rectangulo.style.fontWeight = "bold";
        rectangulo.style.marginRight = "600px";
        rectangulo.style.fontFamily = "sans-serif";
        rectangulo.style.borderBottom = "2px solid black";
        rectangulo.style.borderRight = "2px solid black";

        // Css del titulo
        let titulo = document.getElementById("titulo");
        titulo.style.fontFamily = "sans-serif";

        // Css de los parrafos
        let parrafos = document.querySelectorAll("p");
        for(let i = 0; i < parrafos.length;i++)
            parrafos[i].style.fontFamily = "sans-serif";

        // Css del parrafo fuerte
        let strong = document.getElementById("strong");
        strong.style.fontWeight = "bold"

        // Css del parrafo dentro de un marco
        let marco = document.getElementById("marco");
        marco.style.padding = "10px";
        marco.style.backgroundColor = "yellow";
        marco.style.fontWeight = "bold";
        marco.style.marginRight = "600px";
        marco.style.border = "2px solid black";
    });


    normal.addEventListener("click", () => {
        // Css del parrafo fuerte
        let parrafos = document.getElementsByClassName("h-parrafo");
        for(let i=0;i<parrafos.length;i++)
            parrafos[i].innerHTML = "";
    });


}