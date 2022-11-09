document.querySelector("form").addEventListener("keyup",() => {
    document.getElementById("nombre").addEventListener("keyup",() => {
        let nombre = document.getElementById("nombre");
        let regexp = new RegExp("^[A-Z][a-z].*");
        if(regexp.test(nombre.value)){
            lower.style.borderColor = "red";
        }
        else{
            lower.style.borderColor = "black";
        }
    
    })
    document.getElementById("apel").addEventListener("keyup",() => {
        let apel = document.getElementById("apel");
        let regexp = new RegExp("^[A-Z][a-z].*");
        if(regexp.test(apel.value)){
            lower.style.borderColor = "red";
        }
        else{
            lower.style.borderColor = "black";
        }
    
    })
    document.getElementById("num").addEventListener("keyup",() => {
        let tel = document.getElementById("num");
        let regexp = new RegExp("^[0-9]{10}$");
        if(regexp.test(tel.value)){
            lower.style.borderColor = "red";
        }
        else{
            lower.style.borderColor = "black";
        }
    
    })
    document.getElementById("mail").addEventListener("keyup",() => {
        let email = document.getElementById("mail");
        let regexp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        if(regexp.test(email.value)){
            lower.style.borderColor = "red";
        }
        else{
            lower.style.borderColor = "black";
        }
    
    })
    document.getElementById("contra").addEventListener("keyup",() => {
        let pass = document.getElementById("contra");
        let regexp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        if(regexp.test(pass.value)){
            lower.style.borderColor = "red";
        }
        else{
            lower.style.borderColor = "black";
        }
    
    })
})