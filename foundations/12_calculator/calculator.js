const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
	if(arr.length > 0){
    return arr. reduce((sum, number) => {
      return sum + number 
    },0)
  }
  else return 0;
};

const multiply = function(arr) {
  if(arr.length > 0){
      return arr. reduce((product, number) => {
        return product * number 
      },1)
    }
    return 0;
};

const power = function(base, exponent) {
	if (exponent > 0){
    return base ** exponent;
  }
  return 1
};

const factorial = function(num) {
	let arr = [];
  if (num > 0){
    for(let i = num; i > 0; i--){
      arr.push(i);
    }

    return multiply(arr);
  }

  return 1;
};


// console.log(add(3,1), subtract(3,1), sum([3,0,2,1]), multiply([ 6, 5, 4, 3, 2, 1 ]),power(0,0), factorial(6))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
