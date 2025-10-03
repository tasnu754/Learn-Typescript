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

userInfo = (
  userID: number | string,
  userDetails: { name: string; age: number }
) => {
  return `User Id is ${userID} and name is ${userDetails.name}`;
};

console.log(userInfo(3, { name: "tasnuva", age: 25 }));
