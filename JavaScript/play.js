const person = {
    name: 'Abdur',
    age: 28,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
