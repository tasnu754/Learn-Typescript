let myFunc: Function;

myFunc = () =>{
    console.log("Hiii");
}

const myFunc2 = (a: string, b: string, c:string) =>{
    console.log(a, b);
}

// myFunc2("hello", " world"); //Error
myFunc2("hello", "world", "guys");


// Optional parameter
const myFunc3 = (a: string, b: string, c?:string) =>{
    console.log(a, b);
}

myFunc3("hello", " world"); //Correct (c is now optional)

// Default value
const myFunc4 = (a: string, b: string, c:string = "Guys") =>{
    console.log(a, b);
}

myFunc4("hello", " world"); //Correct (c has a default value)
myFunc4("hello", " world", "Tasnuva"); //Correct 


// Return type define
const myFunc5 = (a: string, b: string) : string => {
    return (a + b);
}

myFunc5("Hello", " World");