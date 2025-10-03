let myFunc;
myFunc = () => {
    console.log("Hiii");
};
const myFunc2 = (a, b, c) => {
    console.log(a, b);
};
// myFunc2("hello", " world"); //Error
myFunc2("hello", "world", "guys");
// Optional parameter
const myFunc3 = (a, b, c) => {
    console.log(a, b);
};
myFunc3("hello", " world"); //Correct (c is now optional)
// Default value
const myFunc4 = (a, b, c = "Guys") => {
    console.log(a, b);
};
myFunc4("hello", " world"); //Correct (c has a default value)
myFunc4("hello", " world", "Tasnuva"); //Correct 
// Return type define
const myFunc5 = (a, b) => {
    return (a + b);
};
myFunc5("Hello", " World");
export {};
//# sourceMappingURL=Function_type.js.map