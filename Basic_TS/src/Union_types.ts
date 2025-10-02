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