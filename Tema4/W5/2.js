// function validarDNI(){
//     let regexp = RegExp("^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
//     let dniInput = document.getElementById("DNI");
//     return regexp.test(dniInput);
// }

// function validarCorreo(){
//     let regexp = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
//     let emailInput = document.getElementById("Email");
//     return regexp.test(emailInput);
// }

// function validarUsuario(){
//     let regexp = RegExp("^(?=.*[A-Za-z])(?=.*d)(?=.*[.,;])[A-Za-zd.,;]{8,}$");
//     let usernameInput = document.getElementById("Usuario");
//     return regexp.test(usernameInput);
// }

// function validarTelefono(){
//     let regexp = RegExp("^\\d{9}$");
//     let phoneInput = document.getElementById("Movil");
//     return regexp.test(phoneInput);
// }

// let form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
// e.preventDefault();

// let emailResult = validarCorreo();
// let dniResult = validarDNI();
// let userResult = validarUsuario();
// let telResult = validarTelefono();

// if (!emailResult) {
//         emailInput.style.border = "red solid 2px";
//     } 
//     else {
//         emailInput.removeAttribute("style");
//     }
//     if (!dniResult) {
//         dniInput.style.border = "red solid 2px";
//     } 
//     else {
//         dniInput.removeAttribute("style");
//     }
//     if (!userResult) {
//         usernameInput.style.border = "red solid 2px";
//     } 
//     else {
//         usernameInput.removeAttribute("style");
//     }
//     if (!telResult) {
//         phoneInput.style.border = "red solid 2px";
//     } 
//     else {
//         phoneInput.removeAttribute("style");
//     }

//     if (emailResult && dniResult && userResult && telResult) {
//         return true;
//     } 
//     else {
//         return false;
//     }
// });

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailRegularExpression = new RegExp(
    "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
  );
  let emailInput = document.getElementById("Email");
  let email = emailInput.value;
  let emailResult = emailRegularExpression.test(email);

  let DNIRegularExpression = new RegExp("^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
  let dniInput = document.getElementById("DNI");
  let dni = dniInput.value;
  let DNIResult = DNIRegularExpression.test(dni);

  let usernameRegularExpression = new RegExp(
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[.,;])[A-Za-zd.,;]{8,}$"
  );
  let usernameInput = document.getElementById("Usuario");
  let username = usernameInput.value;
  let usernameResult = usernameRegularExpression.test(username);

  let phoneRegularExpression = new RegExp("^\\d{9}$");
  let phoneInput = document.getElementById("Movil");
  let phone = phoneInput.value;
  let phoneResult = phoneRegularExpression.test(phone);

  if (!emailResult) {
    emailInput.style.border = "red solid 2px";
  } else {
    emailInput.removeAttribute("style");
  }
  if (!DNIResult) {
    dniInput.style.border = "red solid 2px";
  } else {
    dniInput.removeAttribute("style");
  }
  if (!usernameResult) {
    usernameInput.style.border = "red solid 2px";
  } else {
    usernameInput.removeAttribute("style");
  }
  if (!phoneResult) {
    phoneInput.style.border = "red solid 2px";
  } else {
    phoneInput.removeAttribute("style");
  }

  if (emailResult && DNIResult && usernameResult && phoneResult) {
    return true;
  } else {
    return false;
  }
});
