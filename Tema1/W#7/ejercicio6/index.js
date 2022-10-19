// WS#7 --> 6

function onlyUniques(...arguments){
    let result = [...new Set(arguments)];
    return result;
}

document.write(onlyUniques('cat', 'cat', 'dog', 'pig'));


// function onlyUniques(...args) {
//     result = [];
//     for (arg of args) {
//         if (!(result.includes(arg))) {
//             result.push(arg);
//         }
//     }
//     return result;
// }

// document.write(onlyUniques('cat' + 'cat' + 'dog' + 'pig')+'<br>');
