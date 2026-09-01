const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for(let i = 0; i <= people.length-1; i++){
    if (people[i] === 'Lola' || people[i] === 'Phil'){
        refused.textContent += people[i] + ', ';
    }
    else{
        admitted.textContent += people[i] + ', ';
    }
}

let admittedNames = admitted.textContent.slice(0,admitted.textContent.length - 2);
let refusedNames = refused.textContent.slice(0,refused.textContent.length - 2);

admittedNames += '.';
refusedNames += '.'

console.log(admittedNames);
console.log(refusedNames);
