// v1 -------------
// function showCoords(e) {
//     var coords = "X coords: " + e.clientX + ", Y coords: " + e.clientY;
//     console.log(coords)
//   }

// onmousemove = showCoords(e);

// v2 -------------
// window.addEventListener('mousemove', (event) => {
//     console.log("X coords: " + event.clientX + ", Y coords: " + event.clientY);
// });

// v3 -------------
window.onload = () => {
let html = document.querySelector("html");

function mousemove(event) {
    console.log("clientX: ", event.clientX, 
    "clientY:", event.clientY);
}

html.addEventListener('mousemove', mousemove);
}