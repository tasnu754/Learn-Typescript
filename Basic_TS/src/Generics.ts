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
