const palindromes = function (string) {
    let arr = string.split("");
    
    let hasNonStrChar = arr.some((element) => {
        return /^[0-9]$/.test(element);
    })

    if (!hasNonStrChar){
        let strArr = arr.filter((element) => {
            return /^[a-zA-Z]$/.test(element);
        })


        let strArrRev = [...strArr];
            strArrRev.reverse();


        if(strArr.join("").toLowerCase() === strArrRev.join("").toLowerCase()){
            console.log(strArr.join(""), strArrRev.join(""));
            return true;
        }
        
        console.log(strArr.join(""), strArrRev.join(""));

    }

    
    return false
};

console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
