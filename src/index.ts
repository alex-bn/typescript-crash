// Basic Types:
let id: number = 5

let company: string = 'Company Co'
let isPublished: boolean = true
let x: any = 'Hello'

// Define the type of values in an array:
let ids: number[] = [1, 2, 3, 4, 5] // an array that only contains numbers 

// ids.push('Hello') // returns an error since the type doesn't allow strings

let arr: any[] = [1, true, 'string']
console.log(typeof arr);

// Tuple: you can specify the exact types inside of an array

let person: [number, string, boolean] = [1, 'Alex', true] // it's expecting the values in the order defined by the type !

// Tuple Array:

let employee: [number, string][]
employee = [
  [1, 'Jon'],
  [2, 'Ana'],
  [3, 'Zia'],
]
console.log(employee);


// UNIONS:
let pid: string | number = 22 // a variable can hold more than one type when using unions

pid = '22'
pid = 'hello'
console.log(pid);

// Enum 
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
enum userResponse {
  No = 0,
  Yes = 1,
}
console.log(Direction1.Left);
console.log(Direction2.Right);

// Objects:

/*
const user: {
  id: number,
  name: string
} = {
  id: 22,
  name: 'jon'
}

It looks a bit messy so we'll change it to:
*/

type User = {
  id: number,
  name: String
}

const user: User = {
  id: 1,
  name: 'Alex',
}

// Type Assertion: 
// it explicitly tells the compiler that we wanna treat an entity as a different type

let cid: any = 1
// let customerId = <number>cid
// customerId = true // return an error!

let customerId = cid as number // another way of changing the type

// Functions 

function addNum(x: number, y: number): number {
  return x + y
}
console.log(addNum(100, 2));



// Void
function log(message: string | number): void {
  console.log(message);
}
log('Hello')


// Interfaces

interface userInterface {
  readonly id: number // read-only properties 
  name: String
  age?: number // optional property
}

const user1: userInterface = {
  id: 1,
  name: 'Alex',
}


// user1.id = 5 // cannot assign to 'id' because it is a read-only



// A type can be used with primitives and can be used with unions

type Point = number | string
const p1: Point = 1

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


// CLASSES -> classes are used to create objects 




interface PersonInterface {
  id: number
  name: string
  register(): string
}


class Person implements PersonInterface {
  public id: number // private - protected - public
  name: string


  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
    // return 1 // error
  }

}

const Brad = new Person(1, 'Brad T')
const Mike = new Person(2, 'Mike J')

console.log(Brad, Mike);

// console.log(Brad.id);// property 'id' is private and only accessible within the class
// Brad.id = 5 // property 'id' is private and only accessible within the class

console.log(Brad.register())

// Subclasses 
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Saul', 'tester')

console.log(emp.name);
console.log(emp.register());

// Generics : allows to create reusable components 

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Joe', 'Tim', 'Jill'])

// numArray.push('Zia') // returns an error 
// strArray.push(1) // returns an error 