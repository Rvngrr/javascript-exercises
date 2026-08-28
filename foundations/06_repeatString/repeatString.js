const repeatString = function(txt,num) {
    if(num < 0){
        return "ERROR"
    }
    if(num === 0){
        return ""
    }
    else{
        let str = "";
        for(i = num; i > 0; i--){
            // str.concat(" ", txt)
            str += txt;
        }
        return str;
    }
};

// Do not edit below this line
module.exports = repeatString;
