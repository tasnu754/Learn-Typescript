class Player {
    constructor(n, age, coun) {
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
const players = []; // Player array
// players.push("sonia") // Error: It is not Player type
players.push(sonia);
players.push(mila);
export {};
//# sourceMappingURL=Classes.js.map