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
function multiply2(a:number, b:number){
    return a*b;
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
    name : "Mila",
    age : 25,
    isFemale: true
}

// person.name = 454 // error
// person.country = "BD" // error
person.isFemale = false // Correct


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
let b: (number | string);
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
    name : "tasnu", 
    age: "25abc",
    isScame: true
}

let person2: {
    name: string,
    age: number,
}

person2 = {
    name : "tasnu", 
    // age: "25abc", // Error
    age: 34
    // isScame: true //Error
}


let d: object;
d = [2, 9 , 54]; // Correct, Array is an object type
