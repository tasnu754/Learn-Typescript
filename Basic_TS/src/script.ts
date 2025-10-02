const city = "Dhaka city";
console.log(city);


/*==============================*/
let name = "Tasnuva";

name = 243; //cannot assign number

console.log(name);


/*==============================*/
let play;

play = "Football";
play = 243; //can assign number

console.log(play);


// Fuctions
/*===============================*/
function multiply(a, b){
    return a*b;
}

console.log(multiply(2, "tasnu")); //Run but Wrong

/*===============================*/
function multiply2(a:number, b:number){
    return a*b;
}

console.log(multiply2(2, "tasnu")); //Giving error
console.log(multiply2(2, 4));


// Arrays
/*===============================*/
let games = ["Ludu", "Caram"];

games.push(345); // Would not take


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

person.name = 454 // error
person.country = "BD" // error
person.isFemale = false // Correct