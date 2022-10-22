// Esta funcion es igual que la siguiente

// function () {
//     console.log("funciona");
// }

// Esta funcion arrow es igual que la anterior

// () => console.log("funciona");

// a = [3,45,2,5,1,13,27,9];

alumnos = [{nombre:"marquez",edad:21},{nombre:"Juan Carlos",edad:22},
{nombre:"Carlos",edad:19},{nombre:"Luis",edad:18}]

// console.log(alumnos.sort ( (a,b)=> {
//     if (a.edad>b.edad)
//         return +1;
//     else if (a.edad<b.edad)
//         return -1;
//     return 0;
// }));

console.log(alumnos.sort ( (a,b)=> a.edad-b.edad));
