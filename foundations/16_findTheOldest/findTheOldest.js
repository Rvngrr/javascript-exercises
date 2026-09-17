const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();

    let getOldest = arr.sort((a,b)=>{
        return ((b.yearOfDeath || currentYear )- b.yearOfBirth) - ((a.yearOfDeath || currentYear ) - a.yearOfBirth)
    });
    
    // console.log(getOldest[0].name);
    return getOldest[0];
};
// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
