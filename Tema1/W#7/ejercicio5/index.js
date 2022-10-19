// WS#7 --> 5

function sumEveryOther(...nums) {
    let total = 0;
    for (let position = 0; position < nums.length; position +=2) {
        total += nums[position]
    }
    return total;
}

document.write(sumEveryOther(1,22,104) + "<br>");
