
let integers = [1,5,8,3,6,1];
let total = 0;

const sumElements = function(arr) {
    result = arr.forEach(x => {
        total = total + x;
    });
    return total;
}

document.write(sumElements(integers));
