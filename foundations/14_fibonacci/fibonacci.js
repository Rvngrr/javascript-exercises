const fibonacci = function(num) {
    if(num < 0){
        return 'OOPS';
    }
    
    let sum = [0];

    for (let i = 0; i < num; i++){
        if (i === 0){
            sum.push(1);
            // console.log(sum);
        }
        else{
            let curr = sum.length-1
            let prev = sum.length-2

            sum.push(sum[prev] + sum[curr]);
            // console.log(sum);
        }

    };
    // console.log(sum);
    return sum.at(-1)

    // if(num < 0){
    //     return 'OOPS';
    // }
    
    // let prev = 0;
    // let curr = 1;

    // for (let i = 0; i < num; i++){
    //     let next = prev + curr;
    //     prev = curr;
    //     curr = next;

    // };
    // // console.log(sum);
    // return next;
};
console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
