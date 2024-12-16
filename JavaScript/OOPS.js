function Student(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.greeting = function() {
        return 'Hi, I\'m ' + this.firstname + ' and I\'m ' + this.age + ' years old.';
    };
}

let student1 = new Student('John', 'Doe', 25);
let greetingMessage = new Student('Jane', 'Doe', 23).greeting();
console.log(greetingMessage);


class Person{
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}
let person1 = new Person('John', 'Doe', 25);
console.log(person1);

class Vehicle { 
 
    constructor(variant) { 
        this.model = variant; 
    }
    get model( ) { 
        return this.model;
    }
    set model(value) { 
    this.model = value; 
    }
}
     
let v = new Vehicle('dummy'); 
console.log(v.model) ; // get is invoked 
v.model = 'demo' ;

class Vehicle {
    constructor(variant) {
        this._model = variant; // Use a backing field to store the value
    }

    get model() {
        return this._model; // Access the backing field
    }

    set model(value) {
        this._model = value; // Update the backing field
    }
}

let v = new Vehicle('dummy');
console.log(v.model); // "dummy" - get is invoked
v.model = 'demo';     // set is invoked
console.log(v.model); // "demo" - get is invoked
