class PlayerDetails {
    constructor(n, age, coun) {
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
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`Player name is ${this.name}`);
    }
}
export {};
//# sourceMappingURL=Access_Modifier.js.map