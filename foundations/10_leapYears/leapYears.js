const leapYears = function(year) {
    // return year.filter(val => val % 4 !== 0);
    if (year% 400 === 0){
        return true;
    }
    
    else if(year % 4 === 0 ){
        if (year % 100 === 0){
            return false;
        }
        return true;
    }
    return false;    
};

// Do not edit below this line
module.exports = leapYears;
