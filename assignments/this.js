/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Globally 'this' === the console or window
* 2. When using functions objects before the '.function' are 'this' 
* 3. Constructors return new instances of an object
* 4. 'this' is explicity defined for call and apply methods
*
* write out a code example of each explanation above
*/
console.log(this);

console.log(`You are such a ${this.playfulInsult}`);

const justin = new Employee('Justin');

justin.eat.call(actions); actions.eat.apply(justin);
// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding