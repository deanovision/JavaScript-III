/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - this refers to the window or console
* 2. Implicit - this refers to the function in which it is executed
* 3. Explicit - this is specifically given an object to refer to
* 4. New - this refers directly to the new object being created from a corresponding constructor function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2
// code example for Implicit Binding

const person = {
name: "Rodean",
age: 31,
school: "Lambda",
speak: function(){
    return (`Hi my name is ${this.name} how are you doing?`);
    }
}
console.log(person.speak());

// Principle 3
// code example for New Binding

const People = function(name, age, school){
    this.name = name;
    this.age = age;
    this.school = school;
    this.talk = function(){
        return `My name is ${this.name} I am ${this.age} and I attend ${this.school}`;
    };
};

const robert = new People("Robert", 22, "FAU");
const ashley = new People("Ashley", 23, "FSU");
console.log(robert.talk())

// Principle 4
// code example for Explicit Binding

function intro(person){
    return (`Hello everyone my name is ${this.name} and I am a student at ${this.school}`);
};

console.log(intro.call(ashley));