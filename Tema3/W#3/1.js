// 1.a
let num = [3,45,2,5,1,13,27,9];
let largestNum = 0;

for (let i = 0; i < num.length; i++) {
    if (largestNum < num[i] ) {
        largestNum = num[i];
    }
}
document.write("1.a: "+largestNum+"<br>");

// 1.b
let string = ["illo", "es", "una", "prueba"];
let longestString = "";
for (let i=0; i<string.length; i++){
    if (string[i].length > string.length){
        longestString = string[i];
    }
}
document.write("1.b: "+longestString+"<br>");

// 1.c
let even = [4,45,2,5,66,18,27,9];
let resultEven = [];
even.forEach(element => {
    if(element % 2 == 0)
        resultEven.push(element);
});
document.write("1.c: "+resultEven+"<br>");

// 1.d
let odd = [3,45,2,5,1,13,27,9];
let resultOdd = [];
odd.forEach(element => {
    if(element % 2 != 0)
        resultOdd.push(element);
});
document.write("1.d: "+resultOdd+"<br>");

// 1.e
// let stringIS = ["instrumento", "historico", "listo"];
// let resultStringIs = [];
// if(stringIS.find("is"))
//     resultStringIs.push(stringIS.find());
// document.write("1.e: "+resultStringIs+"<br>");

// 1.f
let randomNums = [3,45,2,5,1,13,27,9];
let divisibleThree = [];
randomNums.forEach(element => {
    if(element % 3 == 0)
        divisibleThree.push(element);
});
document.write("1.f: "+divisibleThree+"<br>");

// 1.g
let array1 = ["dos", 1, "paco"];
let array2 = ["array2", 33, "alguacil"];
document.write("1.g: "+array1.concat(array2)+"<br>");

// 1.h
let numArray = [140000, 104, 33, 1, 99];
numArray.sort(function(a, b) {
    return a - b;
});
document.write("1.h: "+numArray+"<br>");

// 1.i
let words = ["first", "second", "third"];
quitWord = words.shift();
document.write("1.i: "+words+"<br>")

// 1.j
words.unshift("newWord");
document.write("1.j: "+words+"<br>")

// 1.k
quitLastWord = words.slice(1,1,"NewThirdWord");
document.write("1.k: "+words+"<br>")
