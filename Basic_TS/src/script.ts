const city = "Dhaka city";
console.log(city);

/*==============================*/
let name = "Tasnuva";

// name = 243; //cannot assign number

console.log(name);

/*==============================*/
let play;

play = "Football";
play = 243; //can assign number

console.log(play);

// Fuctions
/*===============================*/
// function multiply(a, b){
//     return a*b;
// }

// console.log(multiply(2, "tasnu")); //Run but Wrong

/*===============================*/
function multiply2(a: number, b: number) {
  return a * b;
}

// console.log(multiply2(2, "tasnu")); //Giving error
console.log(multiply2(2, 4));

// Arrays
/*===============================*/
let games = ["Ludu", "Caram"];

// games.push(345); // Would not take

/*===============================*/
let gamesArr = ["Ludu", "Caram", 55];

gamesArr.push(345); // will take

// Objects
/*===============================*/
let person = {
  name: "Mila",
  age: 25,
  isFemale: true,
};

// person.name = 454 // error
// person.country = "BD" // error
person.isFemale = false; // Correct

// Explicit type define
/*===============================*/

//Variables
let myName: string;
// myName = 34; //Error
myName = "Tasnuva Islam";

// Arrays
let a: number[] = [];
// a.push("Apple") // Error
a.push(44);

// Union type define
/*===============================*/

//Variables
let b: number | string;
b = 34;
b = "abc";

// Arrays
let c: (String | number)[] = [];
c.push(65);
c.push("abc");
// c.push(true) // Error

//Objects
let personObj: object;
personObj = {
  name: "tasnu",
  age: "25abc",
  isScame: true,
};

let person2: {
  name: string;
  age: number;
};

person2 = {
  name: "tasnu",
  // age: "25abc", // Error
  age: 34,
  // isScame: true //Error
};

let d: object;
d = [2, 9, 54]; // Correct, Array is an object type

// Dynamic type or any type
/*===============================*/

//Variables
let ab: any;
ab = "Hello";
ab = 34;

// Arrays
let names: any[] = [];
names.push("Sonia", 66, "Mila");

//Objects
let person3: {
  name: any;
  age: any;
};

person3 = {
  name: 344,
  age: "45",
};

// Function type
/*===============================*/
let myFunc: Function;

myFunc = () => {
  console.log("Hiii");
};

const myFunc2 = (a: string, b: string, c: string) => {
  console.log(a, b);
};

// myFunc2("hello", " world"); //Error
myFunc2("hello", "world", "guys");

// Optional parameter
const myFunc3 = (a: string, b: string, c?: string) => {
  console.log(a, b);
};

myFunc3("hello", " world"); //Correct (c is now optional)

// Default value
const myFunc4 = (a: string, b: string, c: string = "Guys") => {
  console.log(a, b);
};

myFunc4("hello", " world"); //Correct (c has a default value)
myFunc4("hello", " world", "Tasnuva"); //Correct

// Return type define
const myFunc5 = (a: string, b: string): string => {
  return a + b;
};

myFunc5("Hello", " World");

// Type Alias
/*===============================*/
const studentDetails = (
  sid: number | string,
  student: { name: string; age: number }
  // Not clean code
) => {
  console.log(`Student id is ${sid} and student name is ${student.name}`);
};

const hello = (student: { name: string; age: number }) => {
  // Redundant student variable
  console.log(`Student name is ${student.name}`);
};

// Define types separately
type numOrString = number | string;
type studentType = { name: string; age: number };

const studentDetails2 = (sid: numOrString, student: studentType) => {
  console.log(`Student id is ${sid} and student name is ${student.name}`);
};

const hello2 = (student: studentType) => {
  console.log(`Student name is ${student.name}`);
};
