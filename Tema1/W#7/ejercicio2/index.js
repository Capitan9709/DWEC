// WS#7 --> 2

function addOnlyNums(...numeros) {
    let total = 0;
    for (let i of numeros) {
        if (isNaN(i)==false) {
            total +=i;
        }
    }
    return total;
}

document.write(addOnlyNums(1,5,'cat',10,2));
