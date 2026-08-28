function add7(num){
    return num+7;
}

console.log(add7(10))


function multiply(x,y){
    return x*y;
}

console.log(multiply(3,2))

function capital(str){
    let firstLetter = str.charAt(0).toUpperCase();
    let remainingChar = "";
    for(let i = str.length; i > 0; i--){
        remainingChar +=str.charAt(i).toLowerCase();
    }
    
    firstLetter += remainingChar.split("").reverse().join("");
    return firstLetter
}
console.log(capital('abcd'))
console.log(capital('aBcd'))
console.log(capital('abD'))
console.log(capital('aBCD'))

function lastLetter(str){
    return str.charAt(str.length-1);
}
console.log(lastLetter('abcd'));

