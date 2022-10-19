// WS#7 --> 7

function sumAndAquare(...nums) {
    let total = 0;
    for (let i = 0; i<nums.length;i++) {

        total += ((nums[i])**2);
    }
    document.write("El total es: "+total);
}

sumAndAquare(1,2);
