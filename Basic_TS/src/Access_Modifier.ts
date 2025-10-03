class PlayerDetails {
  private name: string;
  public age: number; // By default public
  readonly country: string;

  constructor(n: string, age: number, coun: string) {
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
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`Player name is ${this.name}`);
  }
}
