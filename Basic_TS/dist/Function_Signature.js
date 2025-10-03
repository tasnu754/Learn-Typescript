let multy; // Func signature
multy = (x, y) => {
    console.log("Hello Func");
    //   return "hello"; // Return type error
    return x * y;
};
console.log(multy(2, 7));
let userInfo; // Func signature
userInfo = (userID, userDetails) => {
    return `User Id is ${userID} and name is ${userDetails.name}`;
};
console.log(userInfo(3, { name: "tasnuva", age: 25 }));
export {};
//# sourceMappingURL=Function_Signature.js.map