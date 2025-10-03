class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, age: number, coun: string) {
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

const players: Player[] = []; // Player array

// players.push("sonia") // Error: It is not Player type
players.push(sonia);
players.push(mila);
