"use strict";
// Basic Types:
let id = 5;
let company = 'Company Co';
let isPublished = true;
let x = 'Hello';
// Define the type of values in an array:
let ids = [1, 2, 3, 4, 5]; // an array that only contains numbers 
// ids.push('Hello') // returns an error since the type doesn't allow strings
let arr = [1, true, 'string'];
console.log(typeof arr);
// Tuple: you can specify the exact types inside of an array
let person = [1, 'Alex', true]; // it's expecting the values in the order defined by the type !
// Tuple Array:
let employee;
employee = [
    [1, 'Jon'],
    [2, 'Ana'],
    [3, 'Zia'],
];
console.log(employee);
// UNIONS:
let pid = 22; // a variable can hold more than one type when using unions
pid = '22';
pid = 'hello';
console.log(pid);
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var userResponse;
(function (userResponse) {
    userResponse[userResponse["No"] = 0] = "No";
    userResponse[userResponse["Yes"] = 1] = "Yes";
})(userResponse || (userResponse = {}));
console.log(Direction1.Left);
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'Alex',
};
// Type Assertion: 
// it explicitly tells the compiler that we wanna treat an entity as a different type
let cid = 1;
// let customerId = <number>cid
// customerId = true // return an error!
let customerId = cid; // another way of changing the type
// Functions 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(100, 2));
// Void
function log(message) {
    console.log(message);
}
log('Hello');
const user1 = {
    id: 1,
    name: 'Alex',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
        // return 1 // error
    }
}
const Brad = new Person(1, 'Brad T');
const Mike = new Person(2, 'Mike J');
console.log(Brad, Mike);
// console.log(Brad.id);// property 'id' is private and only accessible within the class
// Brad.id = 5 // property 'id' is private and only accessible within the class
console.log(Brad.register());
// Subclasses 
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Saul', 'tester');
console.log(emp.name);
console.log(emp.register());
// Generics : allows to create reusable components 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Joe', 'Tim', 'Jill']);
// numArray.push('Zia') // returns an error 
// strArray.push(1) // returns an error 
