const name = 'Abdur';
let age = 28;
const hobbis = true;
age = 30;

const summarizeUser = function(name, age, hobbis) {
    return (
        'name is ' +
        name + 
        ', age is ' +
        age +
        ' and the user hobbies is ' +
        hobbis
    );
};

const add = (a, b) => a+ b;

console.log(add(1, 2));

console.log(summarizeUser(name, age, hobbis));
