// WS#7 --> 7

function combineAllArrays(...arrays) {
    combined_array = []
    for (let i = 0; i<arrays.length;i++) {
        combined_array += (arrays[i]+",");
    }
    return combined_array;
}


let array1 = [1,"2","tres"];
let array2 = [5,"siete","9"];
let array3 = [8,"papa frita"];

document.write(combineAllArrays(array1,array2,array3));
