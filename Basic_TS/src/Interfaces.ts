// Objects
interface rectangleOptions {
  width: number;
  lenght: number;
}
function rectangle(options: rectangleOptions) {
  let w = options.width;
  let l = options.lenght;
}

rectangle({ width: 30, lenght: 56 });

//Classes
interface isPlayer {
  name: string;
  age: number;
  country: string;

  play(): void;
}

class PlayerDetails3 implements isPlayer {
  constructor(
    public name: string,
    public age: number,
    public country: string
  ) {}

  play() {
    console.log(`Player name is ${this.name}`);
  }
}

let sakib: isPlayer;

sakib = new PlayerDetails3("Sakib", 29, "BD"); // Correct
