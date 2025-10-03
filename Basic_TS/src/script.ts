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

// Function Signature
/*===============================*/
let multy: (a: number, b: number) => number; // Func signature

multy = (x, y) => {
  console.log("Hello Func");
  //   return "hello"; // Return type error
  return x * y;
};
console.log(multy(2, 7));

let userInfo: (
  id: number | string,
  details: { name: string; age: number }
) => string; // Func signature

userInfo = (userID, userDetails) => {
  return `User Id is ${userID} and name is ${userDetails.name}`;
};

console.log(userInfo(3, { name: "tasnuva", age: 25 }));

// Classes
/*===============================*/
class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, age: number, coun: string) {
    this.name = n;
    this.age = age;
    this.country = coun;
  }

  play() {
    console.log(`Player name is ${this.name}`);
  }
}

const sonia = new Player("Sonia", 24, "BD");
const mila = new Player("mila", 25, "BD");

const players: Player[] = []; // Player array

// players.push("sonia") // Error: It is not Player type
players.push(sonia);
players.push(mila);

// Access Modifiers
/*===============================*/
class PlayerDetails {
  private name: string;
  public age: number; // By default public
  readonly country: string;

  constructor(n: string, age: number, coun: string) {
    this.name = n;
    this.age = age;
    this.country = coun;
  }

  play() {
    console.log(`Player name is ${this.name}`);
  }
}

const Tasnu = new PlayerDetails("Sonia", 24, "BD");
// console.log(Tasnu.name); // Can not access as it is private
console.log(Tasnu.age);
console.log(Tasnu.country);

// Tasnu.country = "England"; // Can not have access to change as it is read only

// Simplify class using constructor shothand
class PlayerDetails2 {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`Player name is ${this.name}`);
  }
}

// Interfaces
/*===============================*/

// Objects
interface rectangleOptions {
  width: number;
  lenght: number;
}
function rectangle(options: rectangleOptions) {
  let w = options.width;
  let l = options.lenght;
}

rectangle({ width: 30, lenght: 56 });

//Classes
interface isPlayer {
  name: string;
  age: number;
  country: string;

  play(): void;
}

class PlayerDetails3 implements isPlayer {
  constructor(
    public name: string,
    public age: number,
    public country: string
  ) {}

  play() {
    console.log(`Player name is ${this.name}`);
  }
}

let sakib: isPlayer;

sakib = new PlayerDetails3("Sakib", 29, "BD"); // Correct

// Generics
/*===============================*/

const addID = (obj: object) => {
  let id = Math.random() * 100;
  return { ...obj, id };
};

let user = addID({
  name: "Mila",
  age: 24,
});

// user.name // Cannot access for not fixed fields of the parameter object
user.id; // only can access the fixed field of the object

const addID2 = <T>(obj: T) => {
  let id = Math.random() * 100;
  return { ...obj, id };
};

let user2 = addID2({
  name: "Mila",
  age: 24,
});

user2.name; // Now can access
user2.id;

let user3 = addID2("Sakib"); // Run But wrong, here expecting object not string

// To solve this, declare type of <T> to accept
const addID3 = <T extends object>(obj: T) => {
  let id = Math.random() * 100;
  return { ...obj, id };
};

// user3 = addID3("Sakib") // Error, expecting object

// ENUMS
/*===============================*/

enum ResTypes {
  SUCCESS,
  FAILED,
  UNAUTHORIZED,
}

interface APIResponse {
  name: string;
  type: ResTypes;
  country: string;
}

let response: APIResponse;

response = {
  name: "Tasnuva",
  type: ResTypes.FAILED, // O/P: type: 1
  country: "BD",
};

let response2: APIResponse;
response2 = {
  name: "Tasnuva",
  type: ResTypes.SUCCESS, // O/P: type: 0
  country: "BD",
};
